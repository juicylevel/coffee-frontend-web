import React from 'react';
import PropTypes from 'prop-types';
import { OrderNumber } from 'components';

const OrderButton = ({
    value,
    isPreFree,
    disabled,
    onClick,
}) => {
    return (
        <OrderNumber value={value} />
    );
};

OrderButton.propTypes = {
    value: PropTypes.number,
    isPreFree: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default OrderButton;