import { default as NextLink } from 'next/link'
import { Box, Themed, Link } from 'theme-ui'

const Index = () => {
  return (
    <Box sx={{ width: '800px', my: [5], mx: 'auto' }}>
      <Themed.h1>Carbon Removal Application</Themed.h1>
      <Themed.p>
        <i>(Made available under a CC0 license)</i>
      </Themed.p>
      <Box sx={{ fontSize: [1], my: [2] }}>
        This website contains the contents of a{' '}
        <Link href='https://github.com/carbonplan/carbon-removal-application'>
          generic open source application
        </Link>{' '}
        for soliciting carbon removal procurement. The application was developed
        as a collaboration between Stripe and CarbonPlan for Stripe’s{' '}
        <Link>Spring 2021 carbon removal purchase</Link>. You can read more
        about it in CarbonPlan's <Link>article</Link>. We received valuable
        input and feedback from many organizations and people in the process of
        developing it, and are grateful for their contributions.
      </Box>
      <Box sx={{ fontSize: [4] }}>
        <NextLink href='/research/carbon-removal-application/instructions' passHref>
          <Link>Instructions</Link>
        </NextLink>
        <br />
        <NextLink href='/research/carbon-removal-application/general-application' passHref>
          <Link>General Application</Link>
        </NextLink>
        <br />
        <NextLink href='/research/carbon-removal-application/dac-supplement' passHref>
          <Link>DAC Supplement</Link>
        </NextLink>
        <br />
        <NextLink href='/research/carbon-removal-application/geologic-injection-supplement' passHref>
          <Link>Geologic Injection Supplement</Link>
        </NextLink>
        <br />
        <NextLink href='/research/carbon-removal-application/biomass-supplement' passHref>
          <Link>Biomass Supplement</Link>
        </NextLink>
        <br />
        <NextLink href='/research/carbon-removal-application/ocean-supplement' passHref>
          <Link>Ocean Supplement</Link>
        </NextLink>
        <br />
        <NextLink href='/research/carbon-removal-application/surface-mineralization-supplement' passHref>
          <Link>Surface Mineralization Supplement</Link>
        </NextLink>
        <br />
        <NextLink href='/research/carbon-removal-application/co2-utilization-supplement' passHref>
          <Link>CO₂ Utilization Supplement</Link>
        </NextLink>
      </Box>
    </Box>
  )
}

export default Index
