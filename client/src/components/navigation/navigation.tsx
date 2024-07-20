import React, { FC,useState,useEffect } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'
import IconButton from '@mui/material/IconButton'
import { Sun, Moon } from 'react-feather'

interface NavigationToggle {
  toggleMenu: () => void; // Function to toggle the visibility of the navigation box
}
const Navigation: FC<NavigationToggle> = ({toggleMenu}) => {

  const [isDayMode, setIsDayMode] = useState(true);

  const handleToggleMode = () => {
    setIsDayMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDayMode) {
      document.body.classList.remove('night-mode');
    } else {
      document.body.classList.add('night-mode');
    }
  }, [isDayMode]);

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' } ,
      alignItems: 'center',
      backgroundColor:'var(--color-background)',
      color: 'var(--color-text)',
      transition: 'background-color 0.3s, color 0.3s',
    }}>
    
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            color: 'inherit',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === '/' && {
              color: isDayMode ? 'primary.main' : 'primary.light', // Adjust color for active link based on mode,
            }),

            '& > div': { display: 'none' },

            '&.current>div': { display: 'block' },

            '&:hover': {
              color: 'primary.main',
              '&>div': {
                display: 'block',
              },
            },
          }}
          onClick={toggleMenu}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              transform: 'rotate(3deg)',
              '& img': { width: 44, height: 'auto' },
            }}
          >
            {/* eslint-disable-next-line */}
            <img src="/images/headline-curve.svg" alt="Headline curve" />
          </Box>
          {label}
        </Box>
      ))}
      <IconButton onClick={handleToggleMode} sx={{ ml: { xs: 0, md: 3 }, mt: { xs: 3, md: 0 } }}>
        {isDayMode ? <Sun color="var(--color-icon)" /> : <Moon color="var(--color-icon)" />}
      </IconButton>
    </Box>
  )
}

export default Navigation
