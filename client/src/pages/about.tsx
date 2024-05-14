
'use client'

import React from 'react'
import AboutSection1 from '@/components/about/AboutSection1'
import OurStory from '@/components/about/OurStory'
import { Container } from '@mui/material'
import StoryCards from '@/components/about/StoryCards'
import Instructor from '@/components/about/Instructor'
import { MainLayout } from '@/components/layout'
import BigohhNews from '@/components/about/BigohhNews'
import Investors from '@/components/about/Investors'
import DreamCompany from '@/components/about/DreamCompany'
import Questions from '@/components/about/Questions'

export default function about() {
  return (
    <MainLayout>
      <Container>
        <AboutSection1 />
        <OurStory />
        <StoryCards />
        <Instructor />
      </Container>
      <BigohhNews />
      <Investors />
      <DreamCompany />
      <Questions />
    </MainLayout>
  )
}

