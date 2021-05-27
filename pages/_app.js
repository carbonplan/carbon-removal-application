import { ThemeProvider } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import { theme } from '../theme'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
