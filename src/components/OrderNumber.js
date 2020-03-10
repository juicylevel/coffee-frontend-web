import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    font-size: ${props => props.size};
    line-height: ${props => props.size};

    border-radius: 50%;
    border-width: calc(${props => props.size} * 6 / 70);
    border: ${
        props => props.displayBorder 
            ? '6px solid #ad2a2f' 
            : 'none'
    };
    
    background-color: ${
        props => props.isPreFree
            ? '#7b3333'
            : props.isFree 
                ? '#ad2a2f' 
                : '#e7e7e7'
    };

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Num = styled.div`
    font-size: 50%;
    font-weight: 600;
    color: ${
        props => props.isPreFree || props.isFree
            ? '#e7e7e7' 
            : '#888888'
    };
`;

const OrderNumber = ({ 
    value, 
    onClick,
    ...rest
}) => (
    <Wrapper 
        {...rest} 
        onClick={onClick}
    >
        <Num {...rest}>
            {value}
        </Num>
    </Wrapper>
);

OrderNumber.propTypes = {
    value: PropTypes.number,
    size: PropTypes.string,
    isPreFree: PropTypes.bool,
    isFree: PropTypes.bool,
};

OrderNumber.defaultProps = {
    value: 0,
    size: '80px',
    isPreFree: false,
    isFree: false,
    displayBorder: true,
};

export default OrderNumber;