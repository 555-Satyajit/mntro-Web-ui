import React from 'react';
import { Container, Grid, Box, Typography, Stack, Button } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 }, mb: 12 }}>
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} md={7}>
          <Box className="animate-fade-in">
            <Typography variant="h1" sx={{ 
              fontSize: { xs: '3rem', md: '4.5rem' }, 
              lineHeight: 1.1,
              mb: 3,
              background: 'linear-gradient(to right, #fff, #6366f1, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Master the Civil Services.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary', mb: 5, maxWidth: 600 }}>
              Elevate your preparation with AI-powered analytics, curated resources, and a community of high-achievers.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Button variant="contained" size="large" endIcon={<ChevronRight />}>
                Start Learning
              </Button>
              <Button variant="outlined" size="large" sx={{ 
                borderColor: 'rgba(255, 255, 255, 0.1)', 
                color: 'white',
                '&:hover': { borderColor: 'rgba(255, 255, 255, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }
              }}>
                View Syllabus
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative' }}>
            <Box component="img" src="/hero.png" alt="UPSC Prep" sx={{ 
              width: '100%', 
              borderRadius: '32px', 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
