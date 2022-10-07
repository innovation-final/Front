import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Layout from '../layout/Layout';
import { postAPI } from '../../shared/api';
import Button from '../elements/Button';
import stockData from '../../data/stockData';
import LoadingSpinner from '../elements/LoadingSpinner';

function BoardEdit() {
    const ref = useRef(null);

    const { id } = useParams();
    // 데이터 뽑아오기
    const { data, isLoading } = useQuery(['post', id], () =>
        postAPI.getPost(id),
    );
    if (isLoading) return <LoadingSpinner />;

    const stockName = data?.data.data.stockName;
    const title = data?.data.data.title;
    const content = data?.data.data.content;

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // 제목수정
    const [editTitle, setEditTitle] = React.useState(title);
    const onChangeTitle = event => {
        setEditTitle(event.target.value);
    };

    // 내용 수정
    const [editContent, setEditContent] = React.useState(content);
    const onChangeContent = event => {
        setEditContent(event.target.value);
    };
    // 종목 수정
    const [inputValue, setInputValue] = useState(stockName);
    const [isHaveInputValue, setIsHaveInputValue] = useState(false);
    const [dropDownList, setDropDownList] = useState(Object.keys(stockData));
    const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

    const showDropDownList = () => {
        if (inputValue === '') {
            setIsHaveInputValue(false);
            setDropDownList([]);
        } else {
            const choosenTextList = Object.keys(stockData).filter(textItem =>
                textItem.includes(inputValue),
            );
            setDropDownList(choosenTextList);
        }
    };

    const clickDropDownItem = clickedItem => {
        setInputValue(clickedItem);
        setIsHaveInputValue(false);
    };

    const changeInputValue = event => {
        setInputValue(event.target.value);
        setIsHaveInputValue(true);
    };
    const handleDropDownKey = event => {
        // input에 값이 있을때만 작동
        if (isHaveInputValue) {
            if (
                event.key === 'ArrowDown' &&
                dropDownList.length - 1 > dropDownItemIndex
            ) {
                setDropDownItemIndex(dropDownItemIndex + 1);
            }

            if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
                setDropDownItemIndex(dropDownItemIndex - 1);
            if (event.key === 'Enter' && dropDownItemIndex >= 0) {
                clickDropDownItem(dropDownList[dropDownItemIndex]);
                setDropDownItemIndex(-1);
            }
        }
    };

    useEffect(showDropDownList, [inputValue]);

    const putPost = async req => {
        const response = await postAPI.putPost(id, req);
        return response;
    };

    const editMutation = useMutation(req => putPost(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries(['posts', '최신순']);
        },
    });

    // 수정 버튼
    const onClickEdit = () => {
        if (window.confirm('수정하겠습니까?')) {
            editMutation.mutate({
                title: editTitle,
                content: editContent,
                stockName: inputValue,
            });
            alert('수정되었습니다');
            navigate(`/post/${id}`);
        } else {
            return false;
        }
        return 0;
    };

    return (
        <Layout>
            <WriteTitle>
                <Icon>
                    <EditIcon />
                </Icon>
                <Text>글수정</Text>
            </WriteTitle>

            <Card className="card">
                <ButtonBox>
                    <ClearButton>
                        <ClearIcon
                            name="cancelButton"
                            onClick={() => {
                                navigate(`/post/${id}`);
                            }}
                        />
                    </ClearButton>
                </ButtonBox>
                <CardLayout className="card-body">
                    <CardDiv>
                        <WriteText className="card-text">
                            제목: &nbsp;
                        </WriteText>
                        <TitleInput
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="제목"
                            onChange={onChangeTitle}
                            value={editTitle}
                            ref={ref}
                        />
                    </CardDiv>
                    <CardDiv>
                        <WholeBox>
                            <StockInputLayout>
                                <WriteText className="card-text">
                                    종목: &nbsp;
                                </WriteText>

                                <div />
                                <InputBox isHaveInputValue={isHaveInputValue}>
                                    <StockInput
                                        type="text"
                                        placeholder="검색"
                                        value={inputValue}
                                        ref={ref}
                                        onChange={changeInputValue}
                                        onKeyUp={handleDropDownKey}
                                    />
                                    <DeleteButton
                                        onClick={() => setInputValue('')}
                                    >
                                        &times;
                                    </DeleteButton>
                                </InputBox>
                            </StockInputLayout>
                            <StockDropInputLayout>
                                {isHaveInputValue && (
                                    <DropDownBox>
                                        {dropDownList.length === 0 && (
                                            <DropDownItem>
                                                해당하는 단어가 없습니다
                                            </DropDownItem>
                                        )}
                                        {dropDownList.map(
                                            (dropDownItem, dropDownIndex) => {
                                                return (
                                                    <DropDownItem
                                                        key={dropDownItem}
                                                        dropDownList={
                                                            dropDownIndex
                                                        }
                                                        onClick={() =>
                                                            clickDropDownItem(
                                                                dropDownItem,
                                                            )
                                                        }
                                                        onMouseOver={() =>
                                                            setDropDownItemIndex(
                                                                dropDownIndex,
                                                            )
                                                        }
                                                        className={
                                                            dropDownItemIndex ===
                                                            dropDownIndex
                                                                ? 'selected'
                                                                : ''
                                                        }
                                                    >
                                                        {dropDownItem}
                                                    </DropDownItem>
                                                );
                                            },
                                        )}
                                    </DropDownBox>
                                )}
                            </StockDropInputLayout>
                        </WholeBox>
                    </CardDiv>
                    <ContentDiv>
                        <WriteText className="card-text">내용:&nbsp;</WriteText>
                        <TextareaContent
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="내용"
                            onChange={onChangeContent}
                            ref={ref}
                            value={editContent}
                        />
                    </ContentDiv>
                </CardLayout>
                <ButtonLayout>
                    <Button size="md" _onClick={onClickEdit}>
                        수정
                    </Button>
                </ButtonLayout>
            </Card>
        </Layout>
    );
}

export default BoardEdit;

const WriteTitle = styled.div`
    display: flex;
    margin-bottom: 10px;
    height: 20px;
    align-items: center;
`;
const Text = styled.p`
    font-size: 20px;
    font-weight: bold;
    border-bottom-style: solid;
    border-width: 1.5px;
    border-color: #5eb9ff;
`;

const Icon = styled.div`
    margin: 15px;
    height: 20px;
`;

const CardLayout = styled.div`
    margin: 15px;
`;
const CardDiv = styled.div`
    display: flex;
    align-items: center; //수직정렬
    margin: 50px;
`;
const Card = styled.div`
    overflow: scroll;
    margin: 10px;
    height: 80vh;
    width: 95%;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.borderColor};
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const WriteText = styled.div`
    margin-top: 10px;
`;

const TextareaContent = styled.textarea`
    width: 95%;
    padding: 9px;
    height: 300px;
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.inputColor};
    border-radius: 5px;
    &:focus {
        outline: 1px solid ${props => props.theme.hoverColor};
    }
`;
const ContentDiv = styled.div`
    display: flex;
    margin: 50px;
`;

const ButtonLayout = styled.div`
    display: flex;
    justify-content: center;

    align-items: center;
`;
const ClearButton = styled.div`
    color: #c7c7c7;
    margin: 10px;
    &:hover {
        color: #a3a1a1;
    }
`;
const ButtonBox = styled.div`
    float: right;

    display: flex;
`;
const activeBorderRadius = '16px 16px 0 0';
const inactiveBorderRadius = '16px 16px 16px 16px';

const WholeBox = styled.div`
    width: 100%;
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 100%;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.inputColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: ${props =>
        props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
    z-index: 3;

    &:focus-within {
        box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
        outline: 1px solid ${props => props.theme.hoverColor};
    }
`;

const TitleInput = styled.input`
    padding: 10px;
    width: 95%;
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    background-color: ${props => props.theme.inputColor};
    &:focus {
        outline: 1px solid ${props => props.theme.hoverColor};
    }
`;
const StockInputLayout = styled.div`
    width: 100%;
    display: flex;
`;
const StockDropInputLayout = styled.div`
    width: 100%;
    justify-content: center;
`;

const StockInput = styled.input`
    flex: 1 0 0;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: transparent;
    color: ${props => props.theme.textColor};
    border: none;
    outline: none;
`;

const DeleteButton = styled.div`
    cursor: pointer;
`;

const DropDownBox = styled.ul`
    display: block;
    margin: 0 auto;
    padding: 10px;
    margin-left: 38px;
    background-color: ${props => props.theme.inputColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-top: none;
    border-radius: 0 0 16px 16px;
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
    list-style-type: none;
    z-index: 3;
`;

const DropDownItem = styled.li`
    &.selected {
        color: #10a3ff;
    }
`;
