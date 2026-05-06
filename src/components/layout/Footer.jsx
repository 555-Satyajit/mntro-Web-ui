import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 8, textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <Typography variant="body2" color="text.secondary">
        © 2026 UPSC Elite. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
