import styled from 'styled-components';
import React from 'react';
import Slider from 'react-slick';
import { Kospi } from '../chart';

function ChartSlider({ width }) {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <Container>
            <Slider {...settings}>
                <Kospi width={width} />
                <Kospi width={width} />
            </Slider>
        </Container>
    );
}

export default React.memo(ChartSlider);

const Container = styled.div`
    @import '~slick-carousel/slick/slick.css';
    @import '~slick-carousel/slick/slick-theme.css';

    width: 364px;
    height: 278px;
    .slick-dots {
        .slick-active {
            button::before {
                color: #c1c1c1;
            }
        }
        button::before {
            color: #e9e9e9;
        }
    }
`;
