import Markdown from '../markdown/instructions.md'
import { Box } from 'theme-ui'

const Index = () => {
  return (
    <Box sx={{ width: '800px', my: [5], mx: 'auto' }}>
      <Markdown />
    </Box>
  )
}

export default Index
