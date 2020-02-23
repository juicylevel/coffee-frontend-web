import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from 'views/Registration';
import ChangePhone from 'views/ChangePhone';
import Card from 'views/Card';
import Layout from './Layout';
import NavBar from './NavBar';

export default () => (
    <Router>
        <Layout>
            <Layout.Header>
                <NavBar />
            </Layout.Header>
            <Layout.Content>
                <Switch>
                    <Route 
                        path="/registration" 
                        component={Registration} 
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
    </Router>
);