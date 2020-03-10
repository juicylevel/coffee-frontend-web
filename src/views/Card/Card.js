import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import { MAX_PAID_ORDERS } from 'constants/orders';
import { MarkedText } from 'components';
import { FrameLayout as Layout } from 'views/common';
import OrderButton from './OrderButton';

const CenterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const FreeNum = styled.span`
    font-family: 'Raleway';
    font-size: 4rem;
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
                <CenterWrapper>
                    {loading ? (
                        <CircularProgress size="80px" />
                    ) : (
                        <OrderButton
                            value={count} 
                            isPreFree={isPreFree}
                            busy={creating}
                            onClick={onCreate}
                        />
                    )}
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