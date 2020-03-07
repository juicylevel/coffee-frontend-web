import { createMuiTheme } from '@material-ui/core/styles';

// TODO: load fonts
// TODO: html, body, #root - 100% height

export default createMuiTheme({
    palette: {
        type: 'dark',
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    },
});