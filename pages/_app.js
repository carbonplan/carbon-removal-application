import { ThemeProvider } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import { base } from '@theme-ui/presets'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={base}>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
