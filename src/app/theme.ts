import {
  createTheme
} from "@mui/material/styles";

export const theme = createTheme({

  palette: {

    mode: "light",

    primary: {
      main: "#1565C0"
    },

    secondary: {
      main: "#00ACC1"
    },

    background: {
      default: "#F5F7FA",
      paper: "#FFFFFF"
    }

  },

  shape: {
    borderRadius: 16
  },

  typography: {

    fontFamily:
      `"Roboto","Helvetica","Arial",sans-serif`,

    h1: {
      fontWeight: 700
    },

    h2: {
      fontWeight: 700
    },

    h3: {
      fontWeight: 600
    },

    h4: {
      fontWeight: 600
    },

    h5: {
      fontWeight: 600
    },

    h6: {
      fontWeight: 600
    }

  },

  components: {

    MuiButton: {

      styleOverrides: {

        root: {
          borderRadius: 14,
          textTransform: "none",
          minHeight: 44
        }

      }

    },

    MuiCard: {

      styleOverrides: {

        root: {
          borderRadius: 20
        }

      }

    },

    MuiPaper: {

      styleOverrides: {

        root: {
          borderRadius: 18
        }

      }

    }

  }

});