import React, { FC, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Logo } from '@/components/logo'
import { Navigation, AuthNavigation } from '@/components/navigation'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Signup from '../sign-up/SignUp'
import Avatar from 'react-avatar';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import {app, signOutUser} from '../../firebase/firebaseConf';

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))
  const toggleMenu: () => void = () => {
    setVisibleMenu((visibleMenu) => !visibleMenu)
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState<boolean>(false)
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
  })
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {

        const {displayName, email} = result;
        const userEmail = email ?? '';
        const userName = displayName ?? 'Anonymous';
        
        setUserData({ displayName: userName, email: userEmail });

        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

    })

    return () => unsubscribe();
  },[])

  const handleUserLogin = (): void => {
    setShowSignUp(!showSignUp)
  }

  return (
    <Box sx={{ backgroundColor: 'background.paper', position: 'sticky', top: 0, zIndex: 1000 }}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },

              transition: (theme) => theme.transitions.create(['top']),
              ...(matchMobileView && {
                py: 6,
                backgroundColor: 'background.paper',
                zIndex: 'appBar',
                position: 'fixed',
                height: { xs: '100vh', md: 'auto' },
                top: visibleMenu ? 0 : '-120vh',
                left: 0,
              }),
            }}
          >
            <Box /> {/* Magic space */}
            <Navigation toggleMenu={toggleMenu} />
            <AuthNavigation />
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
          {!isLoggedIn && (
            <Button variant="contained" href="#contained-buttons" onClick={handleUserLogin}>
              Login
            </Button>
          )}
          {isLoggedIn && userData.displayName && (
      
              <Avatar name={userData.displayName}  size="40" round="50%" />
          ) }
          <Signup
            isShow={showSignUp}
            returnShow={setShowSignUp}
            returnLoggedIn={setIsLoggedIn}
            returnUserData={setUserData}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Header
