import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navigation: FC = () => {
  const NavBox = useRef(null)

  useGSAP(()=>{
    gsap.to(NavBox.current, {
      duration: 0.5,
      y:-100,
      opacity: 1,
      stagger: 0.1,
      ease: 'power3.out'
    })
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }} >
      {navigations.map(({ path: destination, label }) => (
        <Box
       
          component={ScrollLink}
          key={destination}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === '/' && {
              color: 'primary.main',
            }),

            '& > div': { display: 'none' },

            '&.current>div': { display: 'block' },

            '&:hover': {
              color: 'primary.main',
              '&>div': {
                display: 'block',
              },
            },
          }}
        >
          <Box
            ref={NavBox}
            sx={{
              position: 'absolute',
              top: 12,
              transform: 'rotate(3deg)',
              '& img': { width: 44, height: 'auto' },
            }}

          >
            {/* eslint-disable-next-line */}
            <img src="/images/headline-curve.svg" alt="Headline curve" />
          </Box >
          {label}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
