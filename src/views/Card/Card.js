import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Fab } from '@material-ui/core';
import { FrameLayout as Layout } from 'views/common';
import { MAX_PAID_ORDERS } from 'constants/orders';

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
    const fabColor = count < MAX_PAID_ORDERS 
        ? 'primary' 
        : 'secondary';
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
                    <Fab 
                        color={fabColor} 
                        aria-label="create"
                        disabled={loading || creating}
                        onClick={onCreate}
                    >
                        {count}
                    </Fab>
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