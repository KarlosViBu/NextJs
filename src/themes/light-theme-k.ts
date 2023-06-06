import { createTheme } from '@mui/material/styles';
import { blueGrey, red,  } from '@mui/material/colors';
import { Kite_One, Kotta_One, Nova_Square } from 'next/font/google';

export const novaSq = Nova_Square({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fff2'
    },
    secondary: {
      main: '#3A64D8'
    },
    info: {
      main: '#607d8b'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },

    // MuiTypography: {

    //   styleOverrides: {
    //     h1: {
    //       fontSize: 30,
    //       fontWeight: 600
    //     },
    //     h2: {
    //       fontSize: 20,
    //       fontWeight: 400
    //     },
    //     subtitle1: {
    //       fontSize: 18,
    //       fontWeight: 600
    //     }
    //   }
    // },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
        color: 'info'
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          ":hover": {
            backgroundColor: 'rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }
    
  },
  typography: {
    // fontFamily: novaSq.style.fontFamily,
     // fontFamily: kiteOne.style.fontFamily,
     // fontFamily: kiteOne.style.fontFamily,
    //  fontFamily: 'Farsan',
    //  fontFamily: 'Truculenta',
    //  fontSize: 20
}
});