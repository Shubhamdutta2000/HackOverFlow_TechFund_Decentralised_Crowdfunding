import { MoralisProvider } from 'react-moralis'
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { CacheProvider } from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_AMITRAJIT_APP_ID}
        serverUrl={process.env.NEXT_PUBLIC_AMITRAJIT_SERVER_URL}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MoralisProvider>
    </CacheProvider>
  )
}

export default MyApp
