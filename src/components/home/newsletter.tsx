import { FC } from 'react'
import React, { useState } from 'react';
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (): void => {
    // Show popup
    setShowPopup(true);

    // Hide popup after 4 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Subscribe to Our News Letter
          </Typography>
          <Typography sx={{ mb: 6 }}>Stay ahead of the coding game with industry news.</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Address"
            />
            <Box>
              <StyledButton disableHoverEffect size="large" onClick={handleClick}>
                Subscribe
              </StyledButton>
            </Box>
            {showPopup && (
              <div
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#f0f0f0',
                  padding: '20px',
                  borderRadius: '5px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                  zIndex: 9999,
                  
                }}
              >
                Subscribed to Newsletter
              </div>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
