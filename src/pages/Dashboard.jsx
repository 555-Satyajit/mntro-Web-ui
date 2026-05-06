import React, { useState } from 'react';
import { Box, Typography, Container, Stack, Button, Grid, Paper, IconButton, Drawer } from '@mui/material';
import SideMenu from '../components/layout/SideMenu';
import TopNavBar from '../components/layout/TopNavBar';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RedeemIcon from '@mui/icons-material/Redeem';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#FEFEFE', minHeight: '100vh' }}>
      {/* Sidebar for Desktop */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <SideMenu />
      </Box>

      {/* Sidebar Drawer for Mobile/Tablet */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '72px', border: 'none' },
        }}
      >
        <SideMenu />
      </Drawer>

      <Box sx={{ flexGrow: 1, ml: { xs: 0, md: '72px' }, width: '100%' }}>
        <TopNavBar onMenuToggle={handleDrawerToggle} />
        <Box sx={{ p: { xs: 2, md: 4 }, pt: { xs: 10, md: 12 } }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            {/* Greeting and Header Stats */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mb: 4, 
              width: '100%',
              flexWrap: 'wrap',
              gap: 2
            }}>
              <Typography variant="h5" sx={{ 
                fontWeight: 600, 
                color: '#2A2A2A', 
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '23.08px',
                lineHeight: '100%',
                letterSpacing: '-3%'
              }}>
                👋 Good Morning, Anita !
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Readiness Level */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Typography sx={{ 
                    color: '#7A7A7A', 
                    fontSize: '16px', 
                    fontWeight: 500, 
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: '110%'
                  }}>
                    Readiness Level
                  </Typography>
                  <Typography sx={{ 
                    color: '#F89824', 
                    fontSize: '20px', 
                    fontWeight: 700, 
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: '110%',
                    letterSpacing: '-3%'
                  }}>
                    Starter
                  </Typography>
                </Box>

                {/* Divider */}
                <Box sx={{ width: '1px', height: '14px', backgroundColor: '#E1E1E1', mx: 1 }} />

                {/* Days Till Prelims */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Typography sx={{ 
                    color: '#2A2A2A', 
                    fontSize: '20px', 
                    fontWeight: 700, 
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: '110%',
                    letterSpacing: '-3%'
                  }}>
                    100
                  </Typography>
                  <Typography sx={{ 
                    color: '#7A7A7A', 
                    fontSize: '16px', 
                    fontWeight: 500, 
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: '110%'
                  }}>
                    Days Till Prelims
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Banner Row */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              gap: 2, 
              mb: 4,
              flexWrap: 'wrap'
            }}>
              {/* Readiness Score Banner */}
              <Paper
                sx={{
                  width: '100%',
                  maxWidth: '780px',
                  height: '73px',
                  backgroundColor: '#F0F5F1',
                  borderRadius: '16px',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  px: 3,
                  boxShadow: 'none'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                  <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.0006 1V9C28.0007 9.1979 27.9421 9.39139 27.8323 9.55598C27.7224 9.72058 27.5662 9.84887 27.3833 9.92462C27.2005 10.0004 26.9993 10.0202 26.8053 9.98153C26.6112 9.94288 26.4329 9.84751 26.2931 9.7075L23.0006 6.41375L15.7081 13.7075C15.6152 13.8005 15.5049 13.8742 15.3835 13.9246C15.2621 13.9749 15.132 14.0008 15.0006 14.0008C14.8691 14.0008 14.739 13.9749 14.6176 13.9246C14.4962 13.8742 14.3859 13.8005 14.2931 13.7075L10.0006 9.41375L1.70806 17.7075C1.52042 17.8951 1.26592 18.0006 1.00056 18.0006C0.735192 18.0006 0.480697 17.8951 0.293056 17.7075C0.105415 17.5199 0 17.2654 0 17C0 16.7346 0.105415 16.4801 0.293056 16.2925L9.29306 7.2925C9.38593 7.19952 9.49622 7.12577 9.61762 7.07544C9.73901 7.02512 9.86914 6.99921 10.0006 6.99921C10.132 6.99921 10.2621 7.02512 10.3835 7.07544C10.5049 7.12577 10.6152 7.19952 10.7081 7.2925L15.0006 11.5863L21.5868 5L18.2931 1.7075C18.153 1.56764 18.0577 1.38939 18.019 1.19531C17.9804 1.00122 18.0002 0.800033 18.0759 0.61721C18.1517 0.434387 18.28 0.278151 18.4446 0.16828C18.6092 0.0584092 18.8027 -0.000155428 19.0006 3.09801e-07H27.0006C27.2658 3.09801e-07 27.5201 0.105357 27.7077 0.292894C27.8952 0.48043 28.0006 0.734784 28.0006 1Z" fill="#489E59"/>
                  </svg>
                </Box>
                <Box>
                  <Typography sx={{ 
                    fontWeight: 400, 
                    color: '#2A2A2A', 
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '17px',
                    lineHeight: '124%',
                    letterSpacing: '-2%'
                  }}>
                    Your exam readiness score is <Box component="span" sx={{ fontWeight: 700 }}>40%.</Box>
                  </Typography>
                  <Typography sx={{ 
                    fontWeight: 400, 
                    color: 'rgba(0, 0, 0, 0.6)', 
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '15px',
                    lineHeight: '124%',
                    letterSpacing: '-2%'
                  }}>
                    Focus on your weak areas and practice tests to improve your readiness score.
                  </Typography>
                </Box>
              </Paper>

              {/* Special Offer Button */}
              <Button
                sx={{
                  width: '248px',
                  height: '40.09px',
                  borderRadius: '8.53px',
                  padding: '0.93px',
                  background: 'linear-gradient(to right, #CAE8F2, #F2DFC6) padding-box, linear-gradient(to right, #32B2DD, #F99710) border-box',
                  border: '0.93px solid transparent',
                  textTransform: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  top: -10,
                 
                  gap: '5.97px',
                  boxShadow: '0px 4px 12px rgba(50, 178, 221, 0.25)',
                  '&:hover': {
                    opacity: 0.9,
                    boxShadow: '0px 6px 16px rgba(50, 178, 221, 0.35)'
                  }
                }}
              >
                <Box 
                  component="img" 
                  src="/gift-box-3d-icon-png-download-3286985 1.png" 
                  alt="Special Offer"
                  sx={{ 
                    width: '26px', 
                    height: 'auto',
                    display: 'flex', 
                    alignItems: 'center' 
                  }} 
                />
                <Typography sx={{ 
                  color: '#47626A', 
                  fontSize: '14.92px', 
                  fontWeight: 600, 
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: '100%'
                }}>
                  Special Offer on Yooki PRO
                </Typography>
              </Button>
            </Box>

            {/* Tabs */}
            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#2A2A2A',
                  borderRadius: '12px',
                  boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
                  px: 4,
                  py: 1,
                  '&:hover': { backgroundColor: '#FBFBFB' }
                }}
              >
                Learn & Track
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#E1E7EA',
                  color: '#2A2A2A',
                  borderRadius: '12px',
                  px: 4,
                  py: 1
                }}
              >
                Practice
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#E1E7EA',
                  color: '#2A2A2A',
                  borderRadius: '12px',
                  px: 4,
                  py: 1
                }}
              >
                Revise
              </Button>
            </Stack>

            <Grid container spacing={3}>
              {/* Planner Card */}
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    p: 3,
                    backgroundColor: '#FFF4FB',
                    borderColor: '#FFE5F6',
                    borderRadius: '12px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                    <AutoAwesomeIcon sx={{ color: '#9F355A' }} />
                    <Typography variant="h6" sx={{ color: '#312F2F', fontWeight: 600, fontSize: '16px' }}>
                      Plan My study
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                    <PlayArrowIcon sx={{ color: '#9F355A' }} />
                    <Typography variant="subtitle1" sx={{ color: '#9F355A', fontWeight: 600 }}>
                      Trial Attempt Planner
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'rgba(26, 26, 26, 0.65)', mb: 'auto' }}>
                    Helps you get started on how to organize your prep schedule.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 4,
                      backgroundColor: '#FFFFFF',
                      borderColor: 'rgba(0, 0, 0, 0.1)',
                      color: '#2A2A2A',
                      borderRadius: '8px',
                      textTransform: 'none'
                    }}
                  >
                    Try study Planner
                  </Button>
                </Paper>
              </Grid>

              {/* Special Offer Card */}
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    p: 3,
                    backgroundColor: '#FBFBFB',
                    borderRadius: '12px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<RedeemIcon />}
                    sx={{
                      p: 2,
                      background: 'linear-gradient(119deg, #E2F8FF 0%, #FFF2E0 100%)',
                      border: '1px solid transparent',
                      borderRadius: '9px',
                      color: '#47626A',
                      fontWeight: 600,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -1, left: -1, right: -1, bottom: -1,
                        background: 'linear-gradient(90deg, #32B2DD 0%, #F99710 100%)',
                        borderRadius: '10px',
                        zIndex: -1,
                      }
                    }}
                  >
                    Special Offer on Yooki PRO
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={<FlashOnIcon />}
                    sx={{
                      p: 1.5,
                      background: 'linear-gradient(119deg, #CAE8F2 0%, #F2DFC6 100%)',
                      color: '#47626A',
                      borderRadius: '9px',
                      boxShadow: 'none',
                      '&:hover': { boxShadow: 'none', opacity: 0.9 }
                    }}
                  >
                    Special Offer for you
                  </Button>
                </Paper>
              </Grid>

              {/* Start Learning Widget */}
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    p: 3,
                    backgroundColor: '#FBFBFB',
                    borderRadius: '12px',
                    height: '100%'
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#2A2A2A', fontWeight: 600, fontSize: '18px', mb: 2 }}>
                    Start Learning with
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ p: 2, backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid #E1E7EA' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>GS Foundation 2025</Typography>
                      <Typography variant="caption" sx={{ color: '#7A7A7A' }}>Daily Classes & Mentorship</Typography>
                    </Box>
                    <Box sx={{ p: 2, backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid #E1E7EA' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Current Affairs Program</Typography>
                      <Typography variant="caption" sx={{ color: '#7A7A7A' }}>Monthly Roundup & Analysis</Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
