import { Box } from 'theme-ui'
import { Meta } from '@carbonplan/components'

const Layout = ({ children }) => {
  return (
    <>
    <Meta description={'General-purpose application for soliciting carbon removal procurement'} title={'carbon removal application / research / carbonplan'} />
    <Box sx={{ width: '800px', my: [5], mx: 'auto' }}>
      { children }
    </Box>
    </>
  )
}