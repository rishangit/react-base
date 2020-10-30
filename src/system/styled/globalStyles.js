import { createGlobalStyle } from 'styled-components';
import '../styled/fonts/font.scss';

export default createGlobalStyle`
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

body{
    font-family:'lato-light'
}

*{
    font-weight:100;
    letter-spacing:0.1rem;
}
`;
