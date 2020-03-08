import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MAX_PAID_ORDERS } from 'constants/orders';
import { FrameLayout as Layout } from 'views/common';
import OrderButton from './OrderButton';

const CenterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
                6-й кофе в подарок
            </Layout.Header>
            <Layout.Content>
                {loading && (
                    <p style={{ textAlign: 'center' }}>
                        loading..
                    </p>
                )}
                <CenterWrapper>
                    <OrderButton
                        value={count} 
                        isPreFree={isPreFree}
                        disabled={loading || creating}
                        onClick={onCreate}
                    />
                </CenterWrapper>
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