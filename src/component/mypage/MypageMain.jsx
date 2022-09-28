import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import CardContent from '@mui/material/CardContent';
import PaidIcon from '@mui/icons-material/Paid';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Typography from '@mui/material/Typography';
import editcog from '../../static/edit.png';
import { mypageAPI } from '../../shared/api';
import ant from '../../static/ant.jpg';

function MypageMain() {
    const ref = useRef(null);
    const { data } = useQuery(['mypage'], () => mypageAPI.getMypage());

    const nickname = data?.data.data.nickname;
    const email = data?.data.data.email;
    const profileImg = data?.data.data.profileImg;
    // console.log(profileImg);
    const queryClient = useQueryClient();
    const imageInput = useRef();
    // const dispatch = useDispatch();
    const [isEdit, setIsEdit] = React.useState(false);

    const [img, setImg] = useState('');
    const onChangeImg = async e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {};
        if (e.target.files) {
            const uploadFile = e.target.files[0];
            setImg(uploadFile);
        }
    };

    // 닉네임 수정
    const [editNickName, setEditNickName] = React.useState(nickname);
    const onChangeNickName = event => {
        setEditNickName(event.target.value);
    };
    // 사진 수정
    // const [setEditProfileImg] = React.useState(profileImg);
    // const onChangeProfileImg = async e => {
    //     imageInput.current.click();

    //     e.preventDefault();
    //     const reader = new FileReader();
    //     const file = e.target.files[0];
    //     console.log(file);
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {};
    //     if (e.target.files) {
    //         const uploadFile = e.target.files[0];
    //         setEditProfileImg(uploadFile);
    //     }
    // };
    // 사진 미리보기
    const [imageSrc] = useState('');

    // const encodeFileToBase64 = fileBlob => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(fileBlob);
    //     return new Promise(resolve => {
    //         reader.onload = () => {
    //             setImageSrc(reader.result);
    //             resolve();
    //         };
    //     });
    // };
    const patchMypage = async req => {
        const response = await mypageAPI.patchMypage(req);
        return response;
    };

    const editMutation = useMutation(req => patchMypage(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('mypage');
        },
    });

    // const addPost = {
    //     img: editProfileImg,
    //     nick: editNickName,
    // };

    const onClickEdit = event => {
        event.preventDefault();
        if (window.confirm('수정하겠습니까?')) {
            setIsEdit(false);
            const formData = new FormData();
            formData.append(
                'mypage',
                new Blob([JSON.stringify()], {
                    type: 'application/json',
                }),
            );

            formData.append('img', img);
            formData.append('nickname', editNickName);

            editMutation.mutate(formData);
            alert('수정되었습니다');
        } else {
            return false;
        }
        return 0;
    };

    return (
        <CardLayout>
            <ProfileLayout>
                {!isEdit ? (
                    <ProfileCard>
                        <EditLayout>
                            <Button onClick={() => setIsEdit(true)}>
                                <EditCogBtn src={editcog} />
                            </Button>
                        </EditLayout>
                        <ImgCard>
                            <CardMedia src={profileImg || ant} />
                        </ImgCard>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {nickname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {email}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                주식~~~~~~~~
                            </Typography>
                        </CardContent>
                    </ProfileCard>
                ) : (
                    <ProfileCard>
                        <EditLayout>
                            <Button onClick={onClickEdit}>수정완료</Button>
                        </EditLayout>
                        <ImgCard>
                            <CogLayout>
                                <input
                                    type="file"
                                    id="profile-upload"
                                    accept="image/*"
                                    ref={imageInput}
                                    // style={{ display: 'none' }}
                                    onChange={onChangeImg}
                                />

                                <Button onClick={onChangeImg}>
                                    <CogBtn src={editcog} />
                                </Button>
                            </CogLayout>
                            {imageSrc && (
                                <CardMedia src={imageSrc} alt="preview-img" />
                            )}
                        </ImgCard>
                        <CardContent>
                            <InputBox>
                                <Input
                                    onChange={onChangeNickName}
                                    value={editNickName}
                                    ref={ref}
                                />
                            </InputBox>
                            <Typography variant="body2" color="text.secondary">
                                주식~~~~~~~~
                            </Typography>
                        </CardContent>
                    </ProfileCard>
                )}
            </ProfileLayout>
            <CardsLayout>
                <Card>
                    <IconLayout>
                        <PaidIcon />
                        <Text>모의투자 수익률</Text>
                    </IconLayout>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            숭어
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <IconLayout>
                        <EmojiEventsIcon />
                        <Text>뱃지/업적</Text>
                    </IconLayout>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            숭어
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                        </Typography>
                    </CardContent>
                </Card>
            </CardsLayout>
        </CardLayout>
    );
}

export default MypageMain;
const CardLayout = styled.div`
    display: flex;
    margin: 30px;
    width: 92%;
    height: 750px;
`;
const ImgCard = styled.div`
    border-radius: 500px;
    position: relative;
    width: 100%;
`;

const CardMedia = styled.img`
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    margin: 5% 30% 1% 20%;
    width: 60%;
`;

const ProfileLayout = styled.div`
    width: 100%;
    height: 100%;
    height: 750px;
`;

const ProfileCard = styled.div`
    border: 2px solid skyblue;
    margin: 20px;
    border-radius: 15px;
    overflow: scroll;
    height: 750px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const Card = styled.div`
    border: 2px solid skyblue;
    margin: 20px;
    height: 363px;
    border-radius: 15px;
    overflow: scroll;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const CardsLayout = styled.div`
    width: 40%;
    object-fit: cover;
`;

const Text = styled.p`
    font-weight: bold;
    margin: 5px;
`;
const CogLayout = styled.div`
    margin-top: 5px;
    float: right;
    position: absolute;

    top: 87%;
    right: 33%;
`;

const IconLayout = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`;
const Button = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
`;
const CogBtn = styled.img`
    width: 40px;
    border: 0;
`;
const EditCogBtn = styled.img`
    width: 22px;
    border: 0;
`;
const EditLayout = styled.div`
    margin: 5px;
    float: right;
`;
const InputBox = styled.div`
    width: 95%;
`;
const Input = styled.input`
    font-family: 'Pretendard-Regular';
    padding: 10px;
    border: 1px solid #48dbfb;
    border-radius: 10px;
    width: 100%;

    &:active,
    &:focus,
    &:hover {
        outline: 2px solid #0abde3;
    }
`;
