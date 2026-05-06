import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#37A7D5',
      dark: '#1A7194',
      contrastText: '#fff',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#2A2A2A',
      secondary: '#49546C',
    },
  },
  typography: {
    fontFamily: "'Source Sans 3', 'Inter', sans-serif",
    h1: {
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: "'Rubik', sans-serif",
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
        containedPrimary: {
          background: '#37A7D5',
          '&:hover': {
            background: '#1A7194',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #E1E7EA',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
