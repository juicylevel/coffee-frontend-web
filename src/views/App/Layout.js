import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    width: 320px;
    height: 568px;

    // border: 1px solid white;
`;

const Header = styled.header`
    height: 80px;

    border: 1px solid white;
`;

const Content = styled.main`
    flex-grow: 1;
    overflow-y: auto;

    border: 1px solid white;
`;

const Layout = ({ children }) => (
    <CenterWrapper>
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    </CenterWrapper>
);

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