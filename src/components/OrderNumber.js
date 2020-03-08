import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    font-size: ${props => props.size};
    line-height: ${props => props.size};

    border-radius: 50%;
    border: 6px solid #ad2a2f;
    border-width: calc(${props => props.size} * 6 / 70);
    background-color: ${
        props => props.isFree 
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
        props => props.isFree 
            ? '#e7e7e7' 
            : '#888888'
    };
`;

const OrderNumber = ({ 
    value, 
    size, 
    isFree 
}) => {
    return (
        <Wrapper 
            size={size}
            isFree={isFree}
        >
            <Num isFree={isFree}>
                {value}
            </Num>
        </Wrapper>
    );
};

OrderNumber.propTypes = {
    value: PropTypes.number,
    size: PropTypes.string,
    isFree: PropTypes.bool,
};

OrderNumber.defaultProps = {
    size: '80px',
    isFree: false,
};

export default OrderNumber;