import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FrameLayout as Layout } from 'views/common';

const Registration = () => {
    return (
        <Layout>
            <Layout.Header>
                Карточка резидента кофейни
            </Layout.Header>
            <Layout.Content>
                <TextField 
                    placeholder="+7 (___) ___-__-__" 
                    variant="outlined" 
                />
            </Layout.Content>
        </Layout>
    );
};

export default Registration;