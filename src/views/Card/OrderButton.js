import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { OrderNumber } from 'components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const rotateAnimation = props => (
    css`${rotate} 1s linear infinite`
);

const Wrapper = styled.div`
    width: 80px;
    height: 80px;
    cursor: pointer;
    animation: ${props => props.busy 
            ? rotateAnimation
            : 'none' 
    };
`;


const OrderButton = ({
    value,
    isPreFree,
    disabled,
    busy,
    onClick,
}) => {
    return (
        <Wrapper 
            busy={busy}
            onClick={onClick}
        >
            <OrderNumber 
                value={value} 
                isPreFree={isPreFree} 
            />
        </Wrapper>
    );
};

OrderButton.propTypes = {
    value: PropTypes.number,
    isPreFree: PropTypes.bool,
    disabled: PropTypes.bool,
    busy: PropTypes.bool,
    onClick: PropTypes.func,
};

export default OrderButton;