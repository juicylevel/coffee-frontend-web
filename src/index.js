import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from '@material-ui/core/styles';
import { GlobalStyle, theme } from 'styles';
import { DataProvider } from 'provider';
import App from 'views/App';

const Root = () => (
    <Fragment>
        <Normalize />
        <GlobalStyle />
        <DataProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </DataProvider>
    </Fragment>
);

ReactDOM.render(
    <Root />, 
    document.getElementById('root')
);

serviceWorker.unregister();