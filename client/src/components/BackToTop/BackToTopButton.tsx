// components/BackToTop/BackToTopButton.tsx

import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach scroll event listener using useEffect
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: 'rgb(18, 124, 113)',
            color: 'white',
            border: 'none',
            padding: '1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
            fontSize:"15px"
          }}
          onClick={scrollToTop}
        >
          Back to Top <span style={{fontSize:"20px"}}  >⬆</span>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
