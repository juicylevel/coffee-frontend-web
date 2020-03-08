import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OrderNumber } from 'components';

const Wrapper = styled.div`
    cursor: pointer;
`;

const OrderButton = ({
    value,
    isPreFree,
    disabled,
    onClick,
}) => {
    return (
        <Wrapper onClick={onClick}>
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
    onClick: PropTypes.func,
};

export default OrderButton;