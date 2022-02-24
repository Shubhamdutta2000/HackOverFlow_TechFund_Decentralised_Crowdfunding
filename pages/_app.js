import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_AMITRAJIT_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_AMITRAJIT_SERVER_URL}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </MoralisProvider>
  )
}

export default MyApp
