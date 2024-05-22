import React, { FC, useRef, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import { MentorCardItem } from '@/components/mentor'
import { data } from './mentors.data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const HomeOurMentors: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    // autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }
  const MentorContainer = useRef(null)
  const [isMentorVisible, setIsMentorVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMentorVisible(entry.isIntersecting)
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    )

    if (MentorContainer.current) {
      observer.observe(MentorContainer.current)
    }

    return () => {
      if (MentorContainer.current) {
        observer.unobserve(MentorContainer.current)
      }
    }
  }, [])

  useGSAP(() => {
    if (isMentorVisible) {
      const tl = gsap.timeline()
      tl.from(MentorContainer.current, {
        duration: 0.5,
        delay: 1,
        x: -200,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }
  })

  return (
    <Box
      id="mentors"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: '#ecf3f3',
      }}
    >
      <Container maxWidth="lg" ref={MentorContainer}>
        <Typography variant="h1" sx={{ fontSize: 40 }}>
          Our Expert Mentors
        </Typography>

        <Slider {...sliderConfig}>
          {data.map((item) => (
            <MentorCardItem key={String(item.id)} item={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  )
}

export default HomeOurMentors
