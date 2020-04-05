import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from 'styles';
import { DataProvider } from 'provider';
import { ScrollToTop } from 'views/common';
import App from 'views/App';

const Root = () => (
    <Router>
        <ScrollToTop />
        <DataProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </DataProvider>
    </Router>
);

ReactDOM.render(
    <Root />, 
    document.getElementById('root')
);

serviceWorker.unregister();