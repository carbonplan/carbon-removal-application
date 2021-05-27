import { default as NextLink } from 'next/link'
import { Box, Link } from 'theme-ui'
import { Meta } from '@carbonplan/components'

const Layout = ({ children, showBack = true }) => {
  return (
    <>
    <Meta description={'General-purpose application for soliciting carbon removal procurement'} title={'carbon removal application / research / carbonplan'} />
    <Box sx={{ width: 'calc(100% - 32px)', maxWidth: '800px', my: [5], mx: 'auto' }}>
      {showBack && <NextLink href='/research/carbon-removal-application' passHref><Link sx={{textDecoration: 'none'}}>Back</Link></NextLink>}
      { children }
    </Box>
    </>
  )
}

export default Layout