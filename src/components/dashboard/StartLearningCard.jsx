import React from 'react';
import { Box, Paper, Stack, Typography, Button } from '@mui/material';

const StartLearningCard = () => {
  return (
    <Paper
      sx={{
        width: '395px',
        height: '331px',
        borderRadius: '10px',
        border: '1.07px solid #E1E7EA',
        backgroundColor: '#FBFBFB',
        boxShadow: 'none',
        p: '22px',
        boxSizing: 'border-box',
        position: 'relative',
        top :'10px',
       
      }}
    >
      <Typography sx={{ 
        color: '#2A2A2A', 
        fontSize: '16px', 
        fontWeight: 600, 
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: '100%',
        letterSpacing: '0%',
        width: '147px',
        height: '21px',
        mb: '22px'
      }}>
        Start Learning with
      </Typography>

      {/* Intro Section with AI Icon */}
      <Stack direction="row" spacing={3} sx={{ mt: '12px', mb: '30px', alignItems: 'flex-start' }}>
        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.34305 13.6762L9.79074 6.33318H11.2928L13.7405 13.6762L21.0835 16.1239V17.626L13.7405 20.0737L11.2928 27.4167H9.79074L7.34305 20.0737L0 17.626V16.1239L7.34305 13.6762Z" fill="#37A7D5"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M21.1969 3.78064L22.4571 0H23.9591L25.2194 3.78064L29 5.04085V6.5429L25.2194 7.80311L23.9591 11.5838H22.4571L21.1969 7.80311L17.4162 6.5429V5.04085L21.1969 3.78064Z" fill="#37A7D5"/>
        </svg>
        <Typography sx={{ 
          color: '#2A2A2A', 
          fontSize: '14px', 
          fontWeight: 400, 
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '-2%',
          lineHeight: '130%',
          width: '298px',
          height: '54px',
          position:'relative',
          right:'12px'
        }}>
          Starting with Polity is a well-rounded strategy because it provides foundational understanding of the nation's administration,
        </Typography>
      </Stack>

      {/* Learning Row 1: Budget 2025 */}
      <Box sx={{ position: 'absolute', top: '139px', left: '24.7px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 'calc(100% - 49.4px)' }}>
        <Box>
          <Typography sx={{ 
            color: '#2A2A2A', 
            fontSize: '16px', 
            fontWeight: 600, 
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '22px',
            letterSpacing: '-2%',
            width: '96px',
            height: '22px',
            mb: '4px'
          }}>
            Budget 2025
          </Typography>
          <Typography sx={{ 
            color: '#696E75', 
            fontSize: '14px', 
            fontWeight: 400, 
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '120%',
            letterSpacing: '-3%',
            width: '179px',
            height: '34px',
            mt: '5px'
          }}>
            Tax Reforms in Budget 2025: What It Means for Individual...
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            width: '114px',
            height: '35px',
            borderRadius: '8px',
            border: '1px solid #37A7D5',
            backgroundColor: '#FFFFFF',
            color: '#37A7D5',
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: "'DM Sans', sans-serif",
            padding: '10px',
            boxShadow: 'none',
            '&:hover': {
              borderColor: '#2E8CAD',
              backgroundColor: 'rgba(55, 167, 213, 0.04)',
              boxShadow: 'none'
            }
          }}
        >
          Start Learning
        </Button>
      </Box>

      <Box sx={{ position: 'absolute', top: '215px', left: '24.7px', height: '1px', backgroundColor: '#E1E7EA', width: 'calc(100% - 49.4px)' }} />

      {/* Learning Row 2: Foreign Policies 2025 */}
      <Box sx={{ position: 'absolute', top: '235px', left: '24.7px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 'calc(100% - 49.4px)' }}>
        <Box>
          <Typography sx={{ 
            color: '#2A2A2A', 
            fontSize: '16px', 
            fontWeight: 600, 
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '22px',
            letterSpacing: '-2%',
            width: '180px',
            height: '22px',
            mb: '4px'
          }}>
            Foreign Policies 2025
          </Typography>
          <Typography sx={{ 
            color: '#696E75', 
            fontSize: '14px', 
            fontWeight: 400, 
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '120%',
            letterSpacing: '-3%',
            width: '179px',
            height: '34px',
            mt: '5px'
          }}>
            Tax Reforms in Budget 2025: What It Means for Individual...
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            width: '114px',
            height: '35px',
            borderRadius: '8px',
            border: '1px solid #37A7D5',
            backgroundColor: '#FFFFFF',
            color: '#37A7D5',
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: "'DM Sans', sans-serif",
            padding: '10px',
            boxShadow: 'none',
            '&:hover': {
              borderColor: '#2E8CAD',
              backgroundColor: 'rgba(55, 167, 213, 0.04)',
              boxShadow: 'none'
            }
          }}
        >
          Start Learning
        </Button>
      </Box>
    </Paper>
  );
};

export default StartLearningCard;
