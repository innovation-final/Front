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
    }
`;

export default GlobalStyle;
