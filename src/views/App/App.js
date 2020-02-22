import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from 'views/Registration';
import ChangePhone from 'views/ChangePhone';
import Layout from './Layout';

export default () => (
    <Router>
        <Layout>
            <Layout.Header>
                Header
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
                </Switch>
            </Layout.Content>
        </Layout>
    </Router>
);