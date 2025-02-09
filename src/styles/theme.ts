import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#4791db',
      dark: '#115293',
    },
    secondary: {
      main: '#4caf50',
      light: '#6fbf73',
      dark: '#357a38',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Open Sans',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Roboto',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Roboto',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Roboto',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Open Sans',
    },
    body2: {
      fontFamily: 'Open Sans',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme; 