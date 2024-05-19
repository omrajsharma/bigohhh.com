/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use client"
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"
import {StyledButton } from "../styled-button"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // If the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // Clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Handles the animation when scrolling to the top
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const scrollToTop = () => {
    if (isVisible) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    
    <StyledButton
      onClick={scrollToTop}
      color="dark"
      variant="outlined"
      size="medium"
      sx={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
        
      }}
      startIcon={<ChevronUp />}
    >

    </StyledButton>
     
    
  );
};

export default ScrollToTopButton;
