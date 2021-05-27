import { default as NextLink } from 'next/link'
import { Box, Themed, Link } from 'theme-ui'
import Layout from '../../../components/layout'

const Index = () => {
  return (
    <Layout showBack={false}>
      <Themed.h1>Carbon Removal Application</Themed.h1>
      <Themed.p>
        <i>(Made available under a CC0 license)</i>
      </Themed.p>
      <Themed.p>
        This website renders the contents of a{' '}
        <Link href='https://github.com/carbonplan/carbon-removal-application'>
          general-purpose unbranded open source application
        </Link>{' '}
        for soliciting carbon removal procurement. The application was developed
        as part of a collaboration between Stripe and CarbonPlan for Stripe’s{' '}
        <Link href='https://stripe.com/newsroom/news/spring-21-carbon-removal-purchases'>
          Spring 2021 carbon removal purchase
        </Link>
        . You can read more about the application design in CarbonPlan's{' '}
        <Link href='https://carbonplan.org/research/stripe-2021-insights'>
          article
        </Link>{' '}
         and get the raw materials in Markdown format from the <Link href='https://github.com/carbonplan/carbon-removal-application'>
          GitHub repository
        </Link>. We received valuable input and feedback from many organizations and
        people in the process of developing it, and are grateful for their
        contributions.
      </Themed.p>
      <Box sx={{ fontSize: [4] }}>
        <NextLink
          href='/research/carbon-removal-application/instructions'
          passHref
        >
          <Link>Instructions</Link>
        </NextLink>
        <br />
        <NextLink
          href='/research/carbon-removal-application/general-application'
          passHref
        >
          <Link>General Application</Link>
        </NextLink>
        <br />
        <NextLink
          href='/research/carbon-removal-application/dac-supplement'
          passHref
        >
          <Link>DAC Supplement</Link>
        </NextLink>
        <br />
        <NextLink
          href='/research/carbon-removal-application/geologic-injection-supplement'
          passHref
        >
          <Link>Geologic Injection Supplement</Link>
        </NextLink>
        <br />
        <NextLink
          href='/research/carbon-removal-application/biomass-supplement'
          passHref
        >
          <Link>Biomass Supplement</Link>
        </NextLink>
        <br />
        <NextLink
          href='/research/carbon-removal-application/ocean-supplement'
          passHref
        >
          <Link>Ocean Supplement</Link>
        </NextLink>
        <br />
        <NextLink
          href='/research/carbon-removal-application/surface-mineralization-supplement'
          passHref
        >
          <Link>Surface Mineralization Supplement</Link>
        </NextLink>
        <br />
        <NextLink
          href='/research/carbon-removal-application/co2-utilization-supplement'
          passHref
        >
          <Link>CO₂ Utilization Supplement</Link>
        </NextLink>
      </Box>
    </Layout>
  )
}

export default Index
