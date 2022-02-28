import { MoralisProvider } from 'react-moralis'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@/config/StyledMaterialThemeProvider'

import theme from '@/config/theme'

function MyApp({ pageProps, Component }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_PROD_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_PROD_SERVER_URL}
    >
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </MoralisProvider>
  )
}

export default MyApp
