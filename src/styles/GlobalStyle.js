import { createGlobalStyle } from 'styled-components';
import backgroundImg from 'images/background.jpg';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    body {
        font-family: 'Roboto', sans-serif;
        background-image: url(${backgroundImg});
    }
`;