import { ThemeProvider } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import { tailwind } from '@theme-ui/presets'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={tailwind}>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
