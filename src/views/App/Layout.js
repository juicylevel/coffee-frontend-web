import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useCenteringFrameContent from './useCenteringFrameContent';
import backgroundImg from 'images/background.jpg';

// TODO: use material-ui Grid

const CenterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 425px;
    max-height: 825px;
    // background-image: url(${backgroundImg});
    overflow-y: auto;
    position: relative;
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
        <CenterWrapper>
            <LayoutWrapper className="app-layout-wrapper">
                {children}
            </LayoutWrapper>
        </CenterWrapper>
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