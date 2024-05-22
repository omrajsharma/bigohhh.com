import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {

  const BoxRef = useRef(null)
  useGSAP(()=>{
    gsap.from(BoxRef.current, {
      duration: 1,
      y: 100,
      ease: 'power2.inOut'
    })
  })

  return (
    <Box onClick={onClick} ref={BoxRef} >
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
        Big<span>Ohhh</span>
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
