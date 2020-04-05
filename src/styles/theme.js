import { createMuiTheme } from '@material-ui/core/styles';

// TODO: load fonts

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
        MuiCssBaseline: {
            '@global': {
                html: {
                    height: '100%',
                },
                body: {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    '& #root': {
                        height: '100%',
                    }
                },
            },
        },
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