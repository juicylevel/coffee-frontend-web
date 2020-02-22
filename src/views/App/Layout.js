import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HEADER_HEIGHT = 80;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: red;
`;

const Header = styled.header`
    position: fixed;
    height: ${HEADER_HEIGHT}px;
    width: 100%;

    background-color: aliceblue;
`;

const Content = styled.main`
    flex-grow: 1;
    margin-top: ${HEADER_HEIGHT}px;

    background-color: aqua;
`;

const Layout = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
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