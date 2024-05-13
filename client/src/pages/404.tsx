import { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import error404 from '../../public/images/error404.png';

// Define a styled Box component for positioning the image
const ImageContainer = styled(Box)({
  position: 'fixed',
  bottom: 0,
  right: 0,
});

// Define a styled component for Image with responsive dimensions
const StyledImage = styled(Image)({
  width: '100%',
  height: 'auto',
});

const Custom404: NextPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingTop={{ xs: '25%', md: '8%' }}
      marginLeft={{ xs: '2%', md: '10%' }}
      alignItems="left"
      textOverflow="hidden"
      minHeight="100vh"
      textAlign="left"
      zIndex={1}
      px={4}
      overflow="hidden"
    >
      <Box marginBottom={4}>
        <Typography variant="h1" sx={{ fontSize: { xs: '96px', md: '126px' }, color: '#414143' }}>
          OOPS!
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { xs: '28px', md: '36px' }, color: '#414143', lineHeight: '1.1' }}>
          We can&apos;t seem to find the <br/>page you&apos;re looking for.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { xs: '24px', md: '28px' }, marginTop: '20px', fontWeight: 300 }}>
          Error Code: 404
        </Typography>
      </Box>
      <ImageContainer>
        {/* Use StyledImage component to display the image */}
        <StyledImage
          src={error404}
          alt="Error 404 Image"
          width={1000} // Set the width (adjust as needed)
          height={600} // Set the height (adjust as needed)
          // Use responsive layout for next/image
        />
      </ImageContainer>
    </Box>
  );
};

export default Custom404;
