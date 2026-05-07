import React from 'react';
import { Box, Typography, AvatarGroup, Avatar, Button, Stack, Paper, ButtonBase } from '@mui/material';

const MentorBanner = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        maxWidth: '1243px',
        height: '143px',
        mt: '33px',
        borderRadius: '12px',
        border: '1px solid #C6DBE3',
        background: 'linear-gradient(90deg, #BDD9E4 0%, #DFF0F7 100%)',
        display: 'flex',
        alignItems: 'center',
        px: '30px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration - Left Circle */}
      <Box 
        component="img"
        src="/dashboard/circule-left.svg"
        sx={{ 
          position: 'absolute', 
          left: '-109.53px', 
          width: '242.98px', 
          height: '242.98px', 
          zIndex: 0,
          pointerEvents: 'none'
        }} 
      />

      {/* Background decoration - Right Circle */}
      <Box 
        component="img"
        src="/dashboard/circule-right.svg"
        sx={{ 
          position: 'absolute', 
          left: '1069px', 
          width: '199.67px', 
          height: '199.67px', 
          zIndex: 0,
          pointerEvents: 'none'
        }} 
      />

      <Stack direction="row" spacing={3} alignItems="center" sx={{ zIndex: 1, width: '100%' }}>
        {/* Mentor Image & Speech Bubble */}
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Box 
            component="img" 
            src="/dashboard/man-in-black.png" 
            sx={{ 
              width: '133.45px', 
              height: '130.83px', 
              mt: '12px', 
              filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.1))'
            }} 
          />
          {/* Speech Bubble (Union SVG) */}
          <Box 
            sx={{ 
              position: 'absolute',
              top: '22.44px', 
              left: '143.42px', 
              width: '150px', // Adjusted to fit the Union + Text
              height: '45px',
              backgroundImage: 'url("/dashboard/Union.svg")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              zIndex: 2,
              pl: '10px' // Offset text slightly because of the tail
            }}
          >
            <Typography 
              sx={{ 
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '14px', 
                color: '#373737', 
                fontWeight: 500,
                lineHeight: '100%',
                position: 'absolute',
                top: '10px', // 28.99 - 22.44
                left: '19.38px' // 162.8 - 143.42
              }}
            >
              Stuck at a topic?
            </Typography>
          </Box>

          {/* Main Heading */}
          <Typography 
            sx={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '20px', 
              fontWeight: 600, 
              color: '#222222', 
              lineHeight: '120%',
              letterSpacing: '-0.04em',
              position: 'absolute',
              top: '61.55px',
              left: '147.95px',
              width: '368px',
              height: '48px',
              textAlign: 'left',
              zIndex: 1
            }}
          >
            Connect with a mentor for quick guidance.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Right side info - Profile Group SVG */}
        <Box 
          component="img" 
          src="/dashboard/profice-group.svg" 
          sx={{ 
            position: 'absolute', 
            width: '79.86px', 
            height: '26.57px', 
            top: '28.21px', 
            left: '820.22px', 
            zIndex: 1
          }} 
        />
        {/* Social Proof Text */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: '32px', 
            left: '915.08px', 
            display: 'flex', 
            alignItems: 'baseline', 
            gap: '6px',
            zIndex: 1
          }}
        >
          <Typography 
            sx={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px', 
              fontWeight: 700, 
              color: '#2A2A2A', 
              lineHeight: '120%',
              letterSpacing: '-0.03em'
            }}
          >
            5K+
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px', 
              fontWeight: 500, 
              color: '#696E75', 
              lineHeight: '120%',
              letterSpacing: '-0.03em'
            }}
          >
            Experienced Mentors
          </Typography>
        </Box>

        {/* Store Buttons - Ripple contained to visible button area */}
        <ButtonBase 
          sx={{ 
            position: 'absolute', 
            top: '70.79px', 
            left: '820px', 
            width: '136px', 
            height: '44px', 
            borderRadius: '8px',
            overflow: 'hidden',
            zIndex: 1,
            boxShadow: '0px 4px 34px rgba(0, 0, 0, 0.07)',
            transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
              filter: 'brightness(1.1)'
            }
          }} 
        >
          <Box 
            component="img" 
            src="/dashboard/playstore-button.svg" 
            sx={{ 
              width: '204px', 
              height: '103px', 
              position: 'absolute',
              top: '-30px',
              left: '-34px'
            }} 
          />
        </ButtonBase>
        <ButtonBase 
          sx={{ 
            position: 'absolute', 
            top: '70.79px', 
            left: '964px', // 820 + 136 + 8
            width: '136px', 
            height: '44px', 
            borderRadius: '8px',
            overflow: 'hidden',
            zIndex: 1,
            boxShadow: '0px 4px 34px rgba(0, 0, 0, 0.07)',
            transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
              filter: 'brightness(1.1)'
            }
          }} 
        >
          <Box 
            component="img" 
            src="/dashboard/applestor-bytton.svg" 
            sx={{ 
              width: '204px', 
              height: '103px', 
              position: 'absolute',
              top: '-30px',
              left: '-34px'
            }} 
          />
        </ButtonBase>
      </Stack>
    </Paper>
  );
};

export default MentorBanner;
