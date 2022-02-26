import { MoralisProvider } from "react-moralis";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@/config/StyledMaterialThemeProvider";
import Layout from "../layout/Layout"

import theme from "@/config/theme";

function MyApp({ pageProps, Component }) {

  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_SHUBHAM_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SHUBHAM_SERVER_URL}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </MoralisProvider>
  );
}

export default MyApp;
