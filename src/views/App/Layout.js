import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useCenteringFrameContent from './useCenteringFrameContent';
import backgroundImg from 'images/background.jpg';

// TODO: use material-ui Grid

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 425px;
    min-height: 825px;
    margin: 0 auto;
    background-image: url(${backgroundImg});
    background-attachment: fixed;
    position: relative;

    @media (max-height: 825px) {
        min-height: 100vh;
    }
`;

const Header = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    z-index: 1000;
    background-image: url(${backgroundImg});
`;

const Content = styled.main`
    flex-grow: 1;
`;

const Layout = ({ children }) => {
    useCenteringFrameContent();
    return (
        <Wrapper className="app-layout-wrapper">
            {children}
        </Wrapper>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
    ])
};

Layout.Header = Header;
Layout.Content = Content;

export default Layout;