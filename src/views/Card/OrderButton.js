import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { OrderNumber } from 'components';

const pulse = keyframes`
    0% {
        transform: scale(1);
        opacity: 0;
    }
    25% {
        transform: scale(1);
        opacity: .1;
    }
    50% {
        transform: scale(1.1);
        opacity: .3;
    }
    75% {
        transform: scale(1.5);
        opacity: .5;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
`;

const Pulse = styled.div`
    border: 10px solid rgba(173, 42, 47, .87);
    background: transparent;
    border-radius: 50%;
    height: 80px;
    width: 80px;

    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;

    animation: ${pulse} 3s ease-out infinite;
`;

const Wrapper = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    cursor: pointer;
    
    transition: transform .3s ease-out;

    &:hover {
        transform: scale(1.1);
    }
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
            {isPreFree && (
                <Pulse />
            )}
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