import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { SocialLink } from '@/interfaces/social-link'

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/bigohhh_official',
    icon: '/images/icons/instagram.svg',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/bigohhhofficial',
    icon: '/images/icons/facebook.svg',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/company/bigohhh',
    icon: '/images/icons/linkedin.svg',
  },
  {
    name: 'YouTube',
    link: '#',
    icon: '/images/icons/youtube.svg',
  },
  {
    name: 'Twitter',
    link: '#',
    icon: '/images/icons/twitter.svg',
  },
  {
    name: 'Dribbble',
    link: '#',
    icon: '/images/icons/dribbble.svg',
  },
  {
    name: 'Github',
    link: 'https://github.com/omrajsharma/bigohhh.com/',
    icon: '/images/icons/github.svg',
  },
]

interface SocialLinkItemProps {
  item: SocialLink
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component="li"
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'secondary.main',
        },
        '& img': {
          fill: 'currentColor',
          width: 22,
          height: 'auto',
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      <img src={item.icon} alt={item.name + 'icon'} />
    </Link>
  </Box>
)

// default
const SocialLinks: FC = () => {
  return (
    <Box sx={{ ml: -1 }}>
      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: 'none',
        }}
      >
        {socialLinks.map((item) => {
          return <SocialLinkItem key={item.name} item={item} />
        })}
      </Box>
    </Box>
  )
}

export default SocialLinks
