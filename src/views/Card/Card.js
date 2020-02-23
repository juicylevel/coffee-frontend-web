import React from 'react';
import styled from 'styled-components';
import { Fab } from '@material-ui/core';
import { FrameLayout as Layout } from 'views/common';

const CenterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Card = () => {
    return (
        <Layout>
            <Layout.Header>
                6-й кофе в подарок
            </Layout.Header>
            <Layout.Content>
                <CenterWrapper>
                    <Fab 
                        color="primary" 
                        aria-label="create"
                    >
                        1
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

export default Card;