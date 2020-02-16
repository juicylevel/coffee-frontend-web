import { createGlobalStyle } from 'styled-components';
import backgroundImg from 'images/background.jpg';

export default createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        background-image: url(${backgroundImg});
    }
`;