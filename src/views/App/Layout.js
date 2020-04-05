import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useCenteringFrameContent from './useCenteringFrameContent';
import backgroundImg from 'images/background.jpg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 425px;
    min-height: 825px;
    margin: 0 auto;
    position: relative;
    background-image: url(${backgroundImg});

    @media (max-height: 825px) {
        min-height: 100vh;
    }
`;

const Header = styled.header`
    position: sticky;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    margin-bottom: 30px;
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