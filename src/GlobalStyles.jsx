import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    @font-face {
        font-family:"Roboto";
        font-display:fallback;

        src:url("./static/fonts/Roboto-Regular.eot?iefix") format("embedded-opentype");
        font-weight:400;
        font-style:normal;
    };

    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    };
    * {
        scroll-behavior: smooth;
    }
    html {
        font-size: 14px;
    }
    body{
        font-size: 1.8vmin;
     -ms-overflow-style: none;
     background-color:${props => props.theme.bgColor};
     color:${props => props.theme.textColor};
    }
 
    ::-webkit-scrollbar {
    display: none;
    }

`;

export default GlobalStyle;
