import React from 'react';
import { AppBar, Toolbar, Box, Button, TextField, IconButton, Badge, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const TopNavBar = ({ onMenuToggle }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E1E1E1',
        borderRadius: 0,
        width: { xs: '100%', md: 'calc(100% - 72px)' },
        ml: { xs: 0, md: '72px' },
        zIndex: 1100,
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between', 
          height: 48, 
          minHeight: 48,
          px: '16px !important',
          py: '4px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuToggle}
            sx={{ mr: 2, display: { md: 'none' }, color: '#2A2A2A' }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Custom Search Bar - Exact 334x36px */}
        <Box 
          sx={{ 
            width: 334, 
            height: 36, 
            backgroundColor: '#F1F1F1', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            px: '12px' // Padding for the icon
          }}
        >
          {/* Custom Search Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M9.58464 17.4993C13.9569 17.4993 17.5013 13.9549 17.5013 9.58268C17.5013 5.21043 13.9569 1.66602 9.58464 1.66602C5.21238 1.66602 1.66797 5.21043 1.66797 9.58268C1.66797 13.9549 5.21238 17.4993 9.58464 17.4993Z" fill="#49546C"/>
              <path d="M17.7482 18.3335C17.5982 18.3335 17.4482 18.2751 17.3398 18.1668L15.7898 16.6168C15.5648 16.3918 15.5648 16.0251 15.7898 15.7918C16.0148 15.5668 16.3815 15.5668 16.6148 15.7918L18.1648 17.3418C18.3898 17.5668 18.3898 17.9335 18.1648 18.1668C18.0482 18.2751 17.8982 18.3335 17.7482 18.3335Z" fill="#49546C"/>
            </svg>
          </Box>
          
          <Box
            component="input"
            placeholder="Search"
            sx={{
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              width: '100%',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              color: '#2A2A2A',
              '&::placeholder': {
                color: '#7B869B',
                opacity: 1
              }
            }}
          />
        </Box>

          </Box>

        {/* Right Action Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Notification Badge - Exact Figma Specs */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px', // Exact 4px gap
              backgroundColor: '#EFF8FF',
              px: '10px', // Exact 10px horizontal padding
              py: '6px',  // Exact 6px vertical padding
              borderRadius: '8px', // Exact 8px radius
              cursor: 'pointer',
              height: 'fit-content', // "Hug" behavior
              '&:hover': { backgroundColor: '#E1F0FF' }
            }}
          >
            <Box component="img" src="/noti.png" alt="notifications" sx={{ width: 18, height: 18 }} />
            <Box 
              component="span" 
              sx={{ 
                fontWeight: 700, // Exact 700 weight
                color: '#2A2A2A', 
                fontSize: '16px', // Exact 16px size
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0%'
              }}
            >
              1
            </Box>
          </Box>
          
          <Button
            variant="outlined"
            size="small"
            endIcon={
              <Box 
                sx={{ 
                  width: 12, 
                  height: 12, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.67779 1.32886C6.89495 1.39731 7.04262 1.5987 7.04262 1.82639V4.4347L9.12927 4.4347C9.32379 4.4347 9.50215 4.54292 9.59197 4.71545C9.6818 4.88798 9.66818 5.09616 9.55663 5.25552L5.905 10.4721C5.77442 10.6587 5.53796 10.739 5.3208 10.6705C5.10364 10.6021 4.95597 10.4007 4.95597 10.173L4.95597 7.56467H2.86932C2.67481 7.56467 2.49645 7.45645 2.40662 7.28392C2.31679 7.11139 2.33041 6.90321 2.44196 6.74386L6.0936 1.52723C6.22417 1.3407 6.46063 1.26041 6.67779 1.32886Z" fill="url(#paint0_linear_5719_30361)"/>
                  <defs>
                    <linearGradient id="paint0_linear_5719_30361" x1="9.47707" y1="16.1431" x2="5.99748" y2="1.36355" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#45BDE3"/>
                      <stop offset="1" stopColor="#FF9600"/>
                    </linearGradient>
                  </defs>
                </svg>
              </Box>
            }
            sx={{
              background: 'linear-gradient(119deg, #E2F8FF 0%, #FFF2E0 100%) padding-box, linear-gradient(90deg, #32B2DD 0%, #F99710 100%) border-box',
              border: '1px solid transparent',
              borderRadius: '6px',
              color: '#47626A',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textTransform: 'none',
              px: '12px',
              py: '6px',
              height: '30px',
              gap: '7px',
              fontFamily: "'DM Sans', sans-serif",
              '&:hover': {
                background: 'linear-gradient(119deg, #D4F1FF 0%, #FFE9CC 100%) padding-box, linear-gradient(90deg, #32B2DD 0%, #F99710 100%) border-box',
              },
              '& .MuiButton-endIcon': {
                ml: 0
              }
            }}
          >
            Upgrade
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
