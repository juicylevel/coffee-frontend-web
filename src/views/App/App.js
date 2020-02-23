import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'views/Login';
import ChangePhone from 'views/ChangePhone';
import Card from 'views/Card';
import Layout from './Layout';
import NavBar from './NavBar';

export default () => (
    <Layout>
        <Layout.Header>
            <NavBar />
        </Layout.Header>
        <Layout.Content>
            <Switch>
                <Route 
                    path="/login" 
                    component={Login} 
                />
                <Route 
                    path="/change-phone" 
                    component={ChangePhone} 
                />
                <Route 
                    path="/" 
                    component={Card} 
                />
            </Switch>
        </Layout.Content>
    </Layout>
);