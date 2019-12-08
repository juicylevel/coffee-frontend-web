import { createGlobalStyle } from 'styled-components';
import backgroundImg from 'images/background.jpg';

export default createGlobalStyle`
    body {
        background-image: url(${backgroundImg});
    }
`;