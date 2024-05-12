import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'
import { Typography } from '@mui/material'

const courseMenu: Array<Navigation> = [
  {label: 'Full Stack Web Development',path: '/full-stack-web-development'},
  {label: 'Full Stack Software Engineering',path: 'full-stack-software-engineering'},
  {label: 'DSA in java',path: 'dsa-in-java'},
  {label: 'Data Analytics',path: 'data-analysis'},
]

const pageMenu: Array<Navigation> = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/popular-courses' },
  { label: 'Testimonial', path: '/testimonial' },
  { label: 'Mentor', path: '/mentor' },
]

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Privacy & Policy', path: '/privacy-policy' },
  { label: 'Term & Condition', path: '/term-and-conditions' },
  { label: 'FAQ', path: '/faq' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Course" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography align='center' variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
          Made with 💚 by our students
        </Typography>
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
