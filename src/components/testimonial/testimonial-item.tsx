import React, { FC, useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Testimonial } from '@/interfaces/testimonial'
import gsap from 'gsap'

interface Props {
  item: Testimonial
}

const TestimonialItem: FC<Props> = ({ item }) => {
  const testimonialRef = useRef<HTMLDivElement>(null)
  const imageTestimonial = useRef<HTMLDivElement>(null)
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(false)
  const [isImageVisible, setIsImageVisible] = useState(false)

  useEffect(() => {
    const testimonialObserver = new IntersectionObserver(
      ([entry]) => {
        setIsTestimonialVisible(entry.isIntersecting)
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    )

    if (testimonialRef.current) {
      testimonialObserver.observe(testimonialRef.current)
    }

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        setIsImageVisible(entry.isIntersecting)
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    )

    if (imageTestimonial.current) {
      imageObserver.observe(imageTestimonial.current)
    }

    return () => {
      if (testimonialRef.current) {
        testimonialObserver.unobserve(testimonialRef.current)
      }
      if (imageTestimonial.current) {
        imageObserver.unobserve(imageTestimonial.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isTestimonialVisible) {
      gsap.from(testimonialRef.current, {
        opacity: 0,
        delay: 1.5,
        y: 200,
        duration: 1,
      })
    }
  }, [isTestimonialVisible])

  useEffect(() => {
    if (isImageVisible) {
      gsap.from(imageTestimonial.current, {
        scale: 0,
        delay: 1,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
    }
  }, [isImageVisible])

  return (
    <Box sx={{ padding: '30px' }}>
      <Box sx={{ mb: 2 }}>
        <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
          {item.title}
        </Typography>
        <Typography ref={testimonialRef} sx={{ mb: 2, color: 'text.secondary' }}>
          {item.content}
        </Typography>
      </Box>
      <Box
        ref={imageTestimonial}
        sx={{
          boxShadow: 1,
          borderRadius: 1,
          px: 2,
          py: 2,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          width: 270,
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          sx={{
            borderRadius: '50%',
            height: 52,
            width: 52,
            overflow: 'hidden',
            mr: 2,
            '& img': {
              width: '100%',
            },
          }}
        >
          <Image
            src={`/images/avatars/${item.user.photo}`}
            width={100}
            height={100}
            quality={97}
            alt={item.user.name}
            // ref={imageTestimonial}
          />
        </Box>
        <Box>
          <Typography variant="h6">{item.user.name}</Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {item.user.professional}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default TestimonialItem
