import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavBar from 'views/NavBar';
import PrivateRoute from 'views/PrivateRoute';
import Login from 'views/Login';
import UpdatePhone from 'views/UpdatePhone';
import Card from 'views/Card';
import History from 'views/History';
import Layout from './Layout';

export default () => {
    // TODO
    const { pathname } = useLocation();
    const displayNavBar = pathname !== '/login';
    return (
        <Layout>
            <Layout.Header>
                {displayNavBar && (
                    <NavBar />
                )}
            </Layout.Header>
            <Layout.Content>
                <Switch>
                    <Route 
                        path="/login" 
                        component={Login} 
                    />
                    <PrivateRoute 
                        path="/" 
                        exact
                        component={Card} 
                    />
                    <PrivateRoute 
                        path="/history" 
                        component={History} 
                    />
                    <PrivateRoute 
                        path="/update-phone" 
                        component={UpdatePhone} 
                    />
                </Switch>
            </Layout.Content>
        </Layout>
    );
};