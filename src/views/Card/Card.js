import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import coffeeSvg from 'images/coffee.svg';
import { MAX_PAID_ORDERS } from 'constants/orders';
import { MarkedText } from 'components';
import { FrameLayout as Layout } from 'views/common';
import OrderButton from './OrderButton';

const FreeNum = styled.span`
    font-family: 'Raleway';
    font-size: 4rem;
`;

const Coffee = styled.div`
    position: absolute;
    z-index: 1;
    background-image: url(${coffeeSvg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
`;

const CoffeeButton = styled(OrderButton)`
    position: absolute;
    z-index: 2;
    top: 139px;
    left: calc((232px - 80px) / 2);
`;

const CoffeeWrapper = styled.div`
    position: relative;
    width: 232px;
    height: 305px;
    margin: 0 auto;
`;

const Card = ({ 
    loading,
    count, 
    creating, 
    onCreate 
}) => {
    const isPreFree = count === MAX_PAID_ORDERS;
    return (
        <Layout>
            <Layout.Header>
                <FreeNum>6</FreeNum>-й кофе <MarkedText>в подарок</MarkedText>
            </Layout.Header>
            <Layout.Content>
                <CoffeeWrapper>
                    <Coffee />
                    <CoffeeButton
                        value={count} 
                        isPreFree={isPreFree}
                        busy={loading || creating}
                        onClick={onCreate}
                    />
                </CoffeeWrapper>
                <div style={{ 
                    textAlign: 'center',
                    marginTop: '3rem',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                }}>
                    постоянная акция
                </div>
            </Layout.Content>
        </Layout>
    );
};

Card.propTypes = {
    loading: PropTypes.bool,
    count: PropTypes.number,
    creating: PropTypes.bool,
    onCreate: PropTypes.func,
};

export default Card;