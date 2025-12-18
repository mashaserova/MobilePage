import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#F2F3F5',
            paper: '#FFFFFF'
        },
        primary: {
            main: '#2979FF'
        },
        text: {
            primary: '#1D1D1F',
            secondary: '#8E8E93'
        },
        action: {
            active: '#FFD600',
        }
    },

    typography: {
        fontFamily: [
            '"SF Pro Text"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'sans-serif',
        ].join(','),
        h6: {
            fontWeight: 700,
            fontSize: '20px',
        },
        body1: {
            fontSize: '15px',
        },
        caption: {
            fontSize: '13px',
            color: '#8E8E93'
        },
    },

    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '16px',
                    paddingRight: '16px',
                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    textTransform: 'none',
                    boxShadow: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '8px 16px',
                    backgroundColor: '#FFFFFF',
                    color: '#1D1D1F',
                    '&:hover': {
                        backgroundColor: '#F5F5F5',
                        boxShadow: 'none',
                    },
                },
                containedPrimary: {
                    backgroundColor: '#1D1D1F',
                    color: '#FFF',
                    '&:hover': {
                        backgroundColor: '#333',
                    },
                },
            },
        },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: '16px',
                        boxShadow: 'none',
                        backgroundImage: 'none',
                    },
                    elevation1: {
                        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.03)',
                    }
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: '16px',
                        backgroundColor: '#FFF',
                        '& fieldset': {
                            border: 'none',
                        },
                    },
                 },
            },
    },
});

export default theme;