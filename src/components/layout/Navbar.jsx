import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Link } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ py: 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 800, 
            fontSize: '1.5rem',
            background: 'linear-gradient(to right, #6366f1, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Outfit'
          }}>
            UPSC ELITE
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            <Link href="#" underline="none" color="inherit" sx={{ fontWeight: 500, '&:hover': { color: 'primary.main' } }}>Resources</Link>
            <Link href="#" underline="none" color="inherit" sx={{ fontWeight: 500, '&:hover': { color: 'primary.main' } }}>Success Stories</Link>
            <Button variant="contained" color="primary">Join Now</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
