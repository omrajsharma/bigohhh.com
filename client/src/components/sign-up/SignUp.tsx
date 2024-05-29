import React, { FC, Dispatch, SetStateAction, useEffect, useState  } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import GoogleButton from "react-google-button";
import { database, storage, signInWithGooglePopup } from "../../firebase/firebaseConf";

import { Zoom, toast } from "react-toastify";

interface SignupProps {
  isShow: boolean;
  returnShow: (show: boolean) => void;
  returnLoggedIn: (show:boolean) => void;
  returnUserData: Dispatch<SetStateAction<{ displayName: string; email: string; }>>;
}

const Signup: React.FC<SignupProps> = ({ isShow, returnShow, returnLoggedIn,returnUserData }) => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({})

  const handleClose = (): void => {
    setShow(false);
    returnShow(false);
  };

  useEffect(() => {
    setShow(isShow);
  }, [isShow]);

  const logGoogleUser = async (): Promise<void> => {
    try {
      const response = await signInWithGooglePopup();
      const {
        email,
        displayName,
      } = response.user;
       // Provide default values if null
       const userEmail = email ?? '';
       const userName = displayName ?? 'Anonymous';
       
       returnUserData({ displayName: userName, email: userEmail });
      
      returnLoggedIn(true);
      
    } catch (error) {
      console.error(error);

      if (error instanceof Error && error.message.includes("popup")) {
        // Handle pop-up closed by user
      } else {
        toast.error("Failed to sign up. Please try again.", {
          transition: Zoom,
        });
      }
    }
  };

  return (
    <Dialog open={show} onClose={handleClose}>
      <DialogTitle>
        Sign Up
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box display="flex" justifyContent="center" alignItems="center" m={2}>
          <GoogleButton
            type="light"
            onClick={logGoogleUser}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Signup;
