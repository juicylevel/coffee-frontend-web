import React, { useCallback, useState } from 'react';
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
    count, 
    orderState,
    creating, 
    onCreate 
}) => {
    const [showNotification, setShowNotification] = useState(false);
    const handleCreate = useCallback(() => {
        onCreate().then(() => {
            setShowNotification(true);
        });
    }, [
        onCreate
    ]);
    const handleCloseNotification = useCallback(() => {
        setShowNotification(false);
    }, []);
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
                        orderState={orderState}
                        busy={loading || creating}
                        onClick={handleCreate}
                    />
                </CoffeeWrapper>
                <Notification
                    orderState={orderState}
                    show={showNotification}
                    onClose={handleCloseNotification}
                />
                <div style={{ 
                    textAlign: 'center',
                    marginTop: '2.3rem',
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