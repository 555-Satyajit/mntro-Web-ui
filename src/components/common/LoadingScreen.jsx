import React from 'react';
import { useLottie } from 'lottie-react';
import { Box, Typography } from '@mui/material';
import homeAnimation from '../../assets/Home element.json';

const LoadingScreen = () => {
  const options = {
    animationData: homeAnimation,
    loop: true,
  };

  const { View: LottieView } = useLottie(options);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        gap: 2
      }}
    >
      <Box sx={{ width: '200px', height: '200px' }}>
        {LottieView}
      </Box>
      <Typography
        sx={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '18px',
          fontWeight: 500,
          color: '#696E75',
          letterSpacing: '0.05em',
          animation: 'pulse 1.5s infinite ease-in-out',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.5 }
          }
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
