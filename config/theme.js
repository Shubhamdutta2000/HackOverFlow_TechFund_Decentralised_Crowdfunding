import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: { main: "#333CFF" }, // deep blue
    // secondary: { main: "#141414" }, // black
    alternate: { main: "#fff" },
    error: { main: "#F8485E" }, // red
    background: {
      primary: "#fff",
      secondary: "#141414",
    },
  },
  typography: {
    heading: {
      fontFamily: "'Circular Std','Shizuru', sans-serif",
    },
    description: {
      fontFamily: "'Euclid Circular A','Shizuru', sans-serif",
    },
    h2: {
      fontFamily: "Circular Std",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "72px",
      lineHeight: "107%",
    },
    body2: {
      fontFamily: "Euclid Circular A",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "27px",
      lineHeight: "107%",
      color: "#252525",
    },
  },
});

export default theme;
