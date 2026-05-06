import React from 'react';
import { Container, Grid, Paper, Box, Typography } from '@mui/material';
import { School, TrendingUp, Groups } from '@mui/icons-material';

const features = [
  {
    icon: <School sx={{ fontSize: 40 }} />,
    title: 'Smart Resources',
    description: 'Dynamic study materials updated daily with current affairs and historical context.'
  },
  {
    icon: <TrendingUp sx={{ fontSize: 40 }} />,
    title: 'Progress Tracking',
    description: 'Advanced analytics to identify your weak areas and optimize your study schedule.'
  },
  {
    icon: <Groups sx={{ fontSize: 40 }} />,
    title: 'Expert Mentorship',
    description: 'Direct access to retired officers and subject matter experts for personalized guidance.'
  }
];

const Features = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 12 }}>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={0} sx={{ p: 5, height: '100%' }}>
              <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>{feature.title}</Typography>
              <Typography variant="body1" color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
