// theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#CE2829",
    },
    secondary: {
      main: "#fdc913",
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Extra-small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 960, // Medium devices (small laptops)
      lg: 1280, // Large devices (desktops)
      xl: 1920, // Extra-large devices
    },
  },
  typography: {
    h1: {
      fontFamily: "Barlow",
      fontSize: "5rem",
      "@media (min-width:0px)": { fontSize: "2.5rem" },
      "@media (min-width:600px)": { fontSize: "3rem" }, // sm
      "@media (min-width:960px)": { fontSize: "4rem" }, // md
    },
    h2: {
      fontFamily: "Barlow",
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: 0,
      "@media (min-width:0px)": { fontSize: "1rem" },
      "@media (min-width:600px)": { fontSize: "1rem" }, // sm
      "@media (min-width:960px)": { fontSize: "2rem" }, // md
    },
    button: {
      fontFamily: "Barlow",
      textTransform: "none",
      letterSpacing: "0.07em",
      fontWeight: 400,
    },
  },
  components: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;