import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from 'views/NavBar';
import PrivateRoute from 'views/PrivateRoute';
import Login from 'views/Login';
import UpdatePhone from 'views/UpdatePhone';
import Card from 'views/Card';
import History from 'views/History';
import Layout from './Layout';

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
                <PrivateRoute 
                    path="/update-phone" 
                    component={UpdatePhone} 
                />
                <PrivateRoute 
                    path="/history" 
                    component={History} 
                />
                <PrivateRoute 
                    path="/" 
                    component={Card} 
                />
            </Switch>
        </Layout.Content>
    </Layout>
);