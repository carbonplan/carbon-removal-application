import { default as NextLink } from 'next/link'
import { Box, Themed, Link } from 'theme-ui'

const Index = () => {
  return <Box sx={{width: '800px', mt: [5], mx: 'auto', fontSize: [5]}}>
    <Themed.h1>Carbon removal application</Themed.h1>
    <Box sx={{fontStyle: 'italic', fontSize: [2]}}>(All content made available under a CC0 license)</Box>
    <br/>
    <NextLink href='/general-application' passHref><Link>General Application</Link></NextLink>
    <br/>
    <NextLink href='/dac-supplement' passHref><Link>DAC Supplement</Link></NextLink>
    <br/>
    <NextLink href='/geologic-injection-supplement' passHref><Link>Geologic Injection Supplement</Link></NextLink>
    <br/>
    <NextLink href='/biomass-supplement' passHref><Link>Biomass Supplement</Link></NextLink>
    <br/>
    <NextLink href='/ocean-supplement' passHref><Link>Ocean Supplement</Link></NextLink>
    <br/>
    <NextLink href='/surface-mineralization-supplement' passHref><Link>Surface Mineralization Supplement</Link></NextLink>
    <br/>
    <NextLink href='/co2-utilization-supplement' passHref><Link>CO₂ Utilization Supplement</Link></NextLink>

  </Box>
}

export default Index