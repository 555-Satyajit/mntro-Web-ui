import React from 'react';
import { Box, Typography, Paper, IconButton, Stack, Button } from '@mui/material';

const AskAnything = () => {
  const [placeholder, setPlaceholder] = React.useState('');
  const [placeholderIndex, setPlaceholderIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  const placeholders = React.useMemo(() => [
    "Ask me anything related to UPSC!",
    "What is the structure of Indian Parliament?",
    "Tell me about the Mughal Empire...",
    "Latest updates on Current Affairs?",
    "How to prepare for GS Paper 1?",
    "Explain the concept of Secularism in India..."
  ], []);

  React.useEffect(() => {
    const handleType = () => {
      const currentFullText = placeholders[placeholderIndex];
      
      if (!isDeleting) {
        setPlaceholder(currentFullText.substring(0, placeholder.length + 1));
        setTypingSpeed(100);
        
        if (placeholder === currentFullText) {
          setIsDeleting(true);
          setTypingSpeed(3000); // Pause at end for readability
        }
      } else {
        setPlaceholder(currentFullText.substring(0, placeholder.length - 1));
        setTypingSpeed(40);
        
        if (placeholder === '') {
          setIsDeleting(false);
          setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [placeholder, isDeleting, placeholderIndex, typingSpeed, placeholders]);

  return (
    <Box sx={{ mt: '34px', width: '100%' }}>
      <Typography sx={{ 
        color: '#1A1A1A', 
        fontSize: '20px', 
        fontWeight: 600, 
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: '100%',
        letterSpacing: '-3%',
        width: '459px',
        height: '26px',
        mb: '16px'
      }}>
        Ask Anything
      </Typography>

      {/* Chat Input Field */}
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '782px',
          height: '64px',
          borderRadius: '12px',
          backgroundColor: '#FFFFFF',
          px: '20px',
          mb: '16px',
          position: 'relative',
          boxShadow: '0px 9px 9.6px rgba(44, 125, 158, 0.19)',
          boxSizing: 'border-box',
          // Gradient border trick
          border: '1px solid transparent',
          backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, rgba(55, 167, 213, 0.4), rgba(249, 151, 16, 0.4))',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:focus-within': {
            boxShadow: '0px 0px 15px rgba(55, 167, 213, 0.4), 0px 9px 20px rgba(44, 125, 158, 0.25)',
            backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #37A7D5, #F99710)',
            transform: 'translateY(-1px)'
          }
        }}
      >
        <Box
          component="input"
          placeholder={placeholder}
          sx={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '15px',
            fontFamily: "'DM Sans', sans-serif",
            color: '#2A2A2A',
            '&::placeholder': {
              color: 'rgba(0, 0, 0, 0.3)'
            }
          }}
        />
        <IconButton 
          sx={{ 
            p: 0,
            '&:hover': { opacity: 0.8 }
          }}
        >
          <Box component="svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <rect width="32" height="32" rx="8" fill="#37A7D5"/>
              <path d="M16.5309 9.47L20.8209 13.76C21.1109 14.05 21.1109 14.53 20.8209 14.82C20.5309 15.11 20.0509 15.11 19.7609 14.82L16.7509 11.81V22C16.7509 22.41 16.4109 22.75 16.0009 22.75C15.5909 22.75 15.2509 22.41 15.2509 22V11.81L12.2409 14.82C11.9509 15.11 11.4709 15.11 11.1809 14.82C11.0309 14.67 10.9609 14.48 10.9609 14.29C10.9609 14.1 11.0409 13.9 11.1809 13.76L15.4709 9.47C15.6109 9.33 15.8009 9.25 16.0009 9.25C16.2009 9.25 16.3909 9.33 16.5309 9.47Z" fill="white"/>
            </g>
          </Box>
        </IconButton>
      </Paper>

      {/* Template Row */}
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <Typography sx={{ 
          color: '#696E75', 
          fontSize: '16px', 
          fontWeight: 400, 
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '120%',
          letterSpacing: '-3%',
          width: '118px',
          height: '19px'
        }}>
          Select templates
        </Typography>
        <Stack direction="row" spacing="8px">
          {['Model Answer', 'Case Study', 'Approach', 'Summary', 'More'].map((label) => (
            <Button
              key={label}
              variant="outlined"
              sx={{
                textTransform: 'none',
                borderRadius: '16px',
                border: '1px solid #E1E7EA',
                backgroundColor: '#FAFAFA',
                color: '#2A2A2A',
                fontSize: '13px',
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                height: '32px',
                px: '12px',
                py: '6px',
                lineHeight: '100%',
                letterSpacing: '0%',
                minWidth: 'auto',
                boxShadow: 'none',
                '&:hover': {
                  borderColor: '#37A7D5',
                  backgroundColor: '#F5F5F5'
                }
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AskAnything;
