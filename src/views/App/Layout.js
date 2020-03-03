import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

const Header = styled.header`
    height: 70px;

    border: 1px solid #c7c7c7;
    border-bottom: none;
`;

const Content = styled.main`
    flex-grow: 1;
    overflow-y: auto;

    border: 1px solid #c7c7c7;
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