import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { OrderNumber } from 'components';
import { CircularProgress } from '@material-ui/core';
import { MAX_PAID_ORDERS } from 'constants/orders';

// TODO ?
const SIZE = 75;
const LOADING_SIZE = SIZE + 2;
const LOADING_OFFSET = Math.round((SIZE - LOADING_SIZE) / 2);

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

const absoluteFullSize = css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

const Pulse = styled.div`
    ${absoluteFullSize}
    z-index: 1;
    border: 10px solid rgba(173, 42, 47, .87);
    background: transparent;
    border-radius: 50%;
    opacity: 0;
    animation: ${pulse} 3s ease-out infinite;
`;

const InteractiveOrderNumber = styled(OrderNumber)`
    position: absolute;
    z-index: 2;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`;

const Overlay = styled.div`
    ${absoluteFullSize}
    z-index: 3;
    background-color: rgba(90, 90, 90, 0.4);
    border-radius: 50%;
`;

const Loading = styled(CircularProgress)`
    position: absolute;
    top: ${LOADING_OFFSET}px;
    left: ${LOADING_OFFSET}px;
    z-index: 4;
`;

const Wrapper = styled.div`
    position: relative;
    width: ${SIZE}px;
    height: ${SIZE}px;
    transition: transform .3s ease-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const OrderButton = ({
    count,
    disabled,
    busy,
    onClick,
    ...rest
}) => {
    const locked = disabled || busy;
    const preFree = count === MAX_PAID_ORDERS;
    const highlighted = preFree;
    const displayPulse = !locked && preFree;
    const displayBorder = !busy;
    const displayOverlay = locked;
    const displayLoading = busy;
    
    return (
        <Wrapper {...rest}>
            {displayPulse && (
                <Pulse />
            )}
            <InteractiveOrderNumber 
                size={`${SIZE}px`}
                value={count} 
                displayBorder={displayBorder}
                highlighted={highlighted} 
                onClick={onClick}
            />
            {displayOverlay && (
                <Overlay />
            )}
            {displayLoading && (
                <Loading size={`${LOADING_SIZE}px`} />
            )}
        </Wrapper>
    );
};

OrderButton.propTypes = {
    count: PropTypes.number,
    disabled: PropTypes.bool,
    busy: PropTypes.bool,
    onClick: PropTypes.func,
};

export default OrderButton;