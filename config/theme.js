import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: { main: "#333CFF" }, // deep blue
    // secondary: { main: "#141414" }, // black
    alternate: { main: "#fff" },
    error: { main: "#F8485E" }, // red
    // background: {
    //   default: "#141414", // black bg
    // },
  },
  typography: {
    fontFamily: "'Shizuru', sans-serif",
  },
});

export default theme;
