import { createMuiTheme } from '@material-ui/core/styles';

// TODO: load fonts
// TODO: html, body, #root - 100% height

export default createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ad2a2f',
        },
        action: {
            focus: '#00FF00',
        },
        background: {
            paper: '#424242',
            default: '#e5e5e5',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    },
    shape: {
        borderRadius: '6px',
    },
    overrides: {

        MuiButton: {
            containedSizeLarge: {
                padding: '15px 14px',
            },
        },
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: 'white',
                },
            },
        },
    },
});