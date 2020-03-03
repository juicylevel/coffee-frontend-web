import React from 'react';
import { FrameLayout as Layout } from 'views/common';
import Form from './Form';

const Login = ({ onLogin }) => {
    return (
        <Layout>
            <Layout.Header>
                Карточка резидента кофейни
            </Layout.Header>
            <Layout.Content>
                <Form onSubmit={onLogin} />
            </Layout.Content>
        </Layout>
    );
};

export default Login;