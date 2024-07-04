import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import BackToTopButton from '../BackToTop/BackToTopButton'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Header />
      <BackToTopButton/>
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
