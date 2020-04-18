import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import coffeeSvg from 'images/coffee.svg';
import { MarkedText } from 'components';
import { FrameLayout as Layout } from 'views/common';
import OrderButton from './OrderButton';
import Notification from './Notification';

const FreeNum = styled.span`
    font-family: 'Raleway';
    font-size: 3rem;
    line-height: 0.4rem;
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

// TODO 232px 75px
const CoffeeButton = styled(OrderButton)`
    position: absolute;
    z-index: 2;
    top: 142px;
    left: calc((232px - 75px) / 2); 
`;

const CoffeeWrapper = styled.div`
    position: relative;
    width: 232px;
    height: 305px;
    margin: 0 auto;
`;

const Card = ({ 
    loading,
    creating, 
    count, 
    showNotification,
    notification,
    onCreate,
    onCancelOrder,
    onCloseNotification,
}) => (
    <Layout>
        <Layout.Header>
            <FreeNum>6</FreeNum>-й кофе <MarkedText>в подарок!</MarkedText>
        </Layout.Header>
        <Layout.Content>
            <CoffeeWrapper>
                <Coffee />
                <CoffeeButton
                    count={count} 
                    busy={loading || creating}
                    onClick={onCreate}
                />
            </CoffeeWrapper>
            <Notification
                type={notification}
                show={showNotification}
                onCancelOrder={onCancelOrder}
                onClose={onCloseNotification}
            />
        </Layout.Content>
    </Layout>
);

Card.propTypes = {
    loading: PropTypes.bool,
    creating: PropTypes.bool,
    count: PropTypes.number,
    showNotification: PropTypes.bool,
    notification: PropTypes.string,
    onCreate: PropTypes.func,
    onCancelOrder: PropTypes.func,
    onCloseNotification: PropTypes.func,
};

export default Card;