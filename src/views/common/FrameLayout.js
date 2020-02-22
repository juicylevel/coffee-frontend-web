import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.h2`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.28rem;
    line-height: 1.7rem;
    letter-spacing: 0.05rem;
`;

const Content = styled.div``;

const FrameLayout = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
);

FrameLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
    ])
};

FrameLayout.Header = Header;
FrameLayout.Content = Content;

export default FrameLayout;