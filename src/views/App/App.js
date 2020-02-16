import React from 'react';
import { GlobalStyle } from 'styles';
import { DataProvider } from 'provider';

export default () => (
    <DataProvider>
        <GlobalStyle />
        <h1 style={{ color: 'white' }}>Coffee!</h1>
    </DataProvider>
);