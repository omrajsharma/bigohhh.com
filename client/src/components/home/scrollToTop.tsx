/* eslint-disable @typescript-eslint/explicit-function-return-type */

'use client'
import { useEffect, useState, CSSProperties } from 'react'
import { ChevronUp } from 'lucide-react'
import { StyledButton } from '../styled-button'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    if (isVisible) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  //scroll to top button style
  const buttonStyles: CSSProperties = {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    zIndex: 1000,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.2s ease-in-out',
  }

  return (
    <div style={buttonStyles}>
      <StyledButton onClick={scrollToTop} color="dark" variant="outlined" size="medium" startIcon={<ChevronUp />}>
        Scroll to Top
      </StyledButton>
    </div>
  )
}

export default ScrollToTopButton
