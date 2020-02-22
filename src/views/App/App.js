import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from 'views/Registration';
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
                        path="/" 
                        component={Registration} 
                    />
                </Switch>
            </Layout.Content>
        </Layout>
    </Router>
);