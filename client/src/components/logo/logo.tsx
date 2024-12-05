import React, { FC } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Link href="/" >
      <Box component="a" onClick={onClick} sx={{ cursor: 'pointer', textDecoration: 'none' }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 700, 
          '& span': { color: 'primary.main'} 
          }}
        >
          Big<span>Ohhh</span>
        </Typography>
      </Box>
    </Link>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
