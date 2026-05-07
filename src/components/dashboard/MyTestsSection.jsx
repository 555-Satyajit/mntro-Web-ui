import React from 'react';
import { Box, Typography, Button, Stack, Paper, Chip } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const TestItem = ({ name, tags, score }) => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    py: 2, 
    borderBottom: '1px solid #F1F1F1',
    '&:last-child': { borderBottom: 'none' }
  }}>
    <Box sx={{ flex: 1 }}>
      <Typography sx={{ 
        fontSize: '14px', 
        fontWeight: 600, 
        color: '#2A2A2A', 
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: '24px',
        mb: '4px' 
      }}>
        {name}
      </Typography>
      <Stack direction="row" spacing={1}>
        {tags.map((tag, idx) => (
          <Chip 
            key={idx} 
            label={tag.text} 
            sx={{ 
              height: '21px', 
              backgroundColor: tag.bg || 'rgba(174, 65, 242, 0.18)', 
              color: tag.color || '#8D11A8',
              fontSize: '12px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              borderRadius: '13px',
              '& .MuiChip-label': { px: '6px' }
            }} 
          />
        ))}
      </Stack>
    </Box>
    
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
      <Typography sx={{ 
        fontSize: '14px', 
        color: '#696E75', 
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500,
        lineHeight: '100%'
      }}>
        Score
      </Typography>
      <Typography sx={{ 
        fontSize: '16px', 
        fontWeight: 600, 
        color: '#37A7D5',
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: '100%'
      }}>
        {score}
      </Typography>
    </Box>
    
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <Button 
        variant="outlined" 
        sx={{ 
          textTransform: 'none', 
          width: '91px',
          height: '32px',
          borderRadius: '8px', 
          border: '1px solid #37A7D5', 
          color: '#37A7D5',
          backgroundColor: '#FFFFFF',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '26px',
          p: 0, // Using fixed dimensions from Figma
          '&:hover': { 
            borderColor: '#37A7D5', 
            backgroundColor: 'rgba(55, 167, 213, 0.04)' 
          }
        }}
      >
        Take Test
      </Button>
    </Box>
  </Box>
);

const MyTestsSection = () => {
  return (
    <Box sx={{ mt: '36px' }}>
      {/* Section Heading */}
      <Box sx={{ mb: '24px' }}>
        <Typography sx={{ 
          fontSize: '20px', 
          fontWeight: 600, 
          color: '#2A2A2A', 
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '100%',
          letterSpacing: '-3%',
          mb: 1
        }}>
          My Tests
        </Typography>
        <Typography sx={{ 
          fontSize: '16px', 
          fontWeight: 400,
          color: '#696E75', 
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '120%',
          letterSpacing: '-3%'
        }}>
          Take practice tests, review past attempts, and improve accuracy.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        {/* My Tests Main Content Area */}
        <Paper 
          elevation={0} 
          sx={{ 
            width: '841px',
            height: '360px',
            p: 3, 
            borderRadius: '12px', 
            border: '1px solid #F1F1F1',
            backgroundColor: '#FEFEFE',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Filter Tabs */}
          <Stack direction="row" sx={{ gap: '6px', mb: '16px' }}>
            {['Newly Added', 'Prelims Test', 'Mains Tests'].map((tab) => (
              <Button
                key={tab}
                sx={{
                  textTransform: 'none',
                  borderRadius: '7px',
                  px: '10px',
                  py: '5px',
                  height: '30px',
                  fontSize: '14px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  lineHeight: '100%',
                  backgroundColor: tab === 'Prelims Test' ? '#F7FBFD' : '#FFFFFF',
                  color: tab === 'Prelims Test' ? '#2A2A2A' : 'rgba(42, 42, 42, 0.5)',
                  border: tab === 'Prelims Test' ? '1px solid #37A7D5' : '1px solid #F8F8F8',
                  minWidth: 'auto',
                  '&:hover': { backgroundColor: tab === 'Prelims Test' ? '#ECF6FF' : '#F5F5F5' }
                }}
              >
                {tab}
              </Button>
            ))}
          </Stack>

          {/* Tests List */}
          <Box sx={{ pt: 0, borderTop: '1px solid #F1F1F1', mb: 2 }}>
            <TestItem 
              name="Test name - 2025" 
              tags={[
                { text: 'GS', bg: 'rgba(174, 65, 242, 0.18)', color: '#8D11A8' }, 
                { text: 'Beginner-Friendly', bg: 'rgba(114, 231, 55, 0.10)', color: '#487F2B' }
              ]} 
              score="--" 
            />
            <TestItem 
              name="Sectional Test - Polity - 2025" 
              tags={[
                { text: 'CSAT', bg: 'rgba(174, 65, 242, 0.18)', color: '#8D11A8' }, 
                { text: 'Intermediate', bg: '#FFF7ED', color: '#9A3412' }
              ]} 
              score="--" 
            />
            <TestItem 
              name="Test name - 2025" 
              tags={[
                { text: 'GS', bg: 'rgba(174, 65, 242, 0.18)', color: '#8D11A8' }, 
                { text: 'Beginner-Friendly', bg: 'rgba(114, 231, 55, 0.10)', color: '#487F2B' }
              ]} 
              score="--" 
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
            <Button 
              sx={{ 
                textTransform: 'none', 
                color: '#37A7D5', 
                fontWeight: 500,
                fontSize: '14px',
                fontFamily: "'Poppins', sans-serif",
                lineHeight: '100%',
                p: 0,
                minWidth: 'auto',
                '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' }
              }}
              endIcon={<Box component="span" sx={{ fontSize: '18px', ml: '-4px' }}>&gt;</Box>}
            >
              View all
            </Button>
          </Box>
        </Paper>

      {/* Evaluate Mains Answer Card */}
      <Paper 
        elevation={0} 
        sx={{ 
          width: '383px', 
          height: '334px',
          p: 3, 
          borderRadius: '12px', 
          border: '1px solid #F1F1F1',
          backgroundColor: '#FBFCFD',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          top: '26px',
          overflow: 'hidden'
        }}
      >
        <Typography sx={{ 
          fontSize: '16px', 
          fontWeight: 600, 
          color: '#2A2A2A', 
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '160%',
          textAlign: 'center',
          mb: '1px',
          zIndex: 2,
          position: 'relative'
        }}>
          Evaluate Mains Answer
        </Typography>
        <Typography sx={{ 
          fontSize: '14px', 
          color: '#696E75', 
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          lineHeight: '130%',
          textAlign: 'center',
          maxWidth: '214px',
          mb: '24px',
          zIndex: 2,
          position: 'relative'
        }}>
          Upload your handwritten answer and get instant evaluations.
        </Typography>

        <Box 
          sx={{ 
            width: '287px', 
            height: '287px', 
            borderRadius: '50%', 
            border: '1px solid #E0F6FF',
            position: 'absolute',
            top: '23.5px',
            left: '48px',
            backgroundImage: 'url("/dashboard/circular.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 0
          }}
        >
          {/* Main Icon (PDF SVG) */}
          <Box 
            component="img" 
            src="/dashboard/pdf.svg" 
            sx={{ 
              width: '69.63px', 
              height: '83px', 
              position: 'absolute',
              top: '102.04px', // 125.54 - 23.5 (circle top)
              left: '42.69px', // 90.69 - 48 (circle left)
              zIndex: 2,
              filter: 'drop-shadow(0px 10px 20px rgba(248, 161, 112, 0.3))'
            }}
          />
          
        </Box>

        {/* Floating element 2 - Paper Icon (Relative to Card) */}
        <Box 
          component="img" 
          src="/dashboard/paper-1icon.svg" 
          sx={{ 
            position: 'absolute', 
            width: '100px', 
            height: 'auto', 
            top: '110px', 
            left: '-20px', 
            zIndex: 1
          }} 
        />

        {/* Floating element 1 - SVG */}
        <Box 
          component="img" 
          src="/dashboard/floatingelemnt-1.svg" 
          sx={{ 
            position: 'absolute', 
            width: '180px', 
            height: 'autopx', 
            top: '169.15px', 
            left: '159.98px', 
            zIndex: 1
          }} 
        />

        <Button 
          variant="contained" 
          sx={{ 
            textTransform: 'none', 
            width: '198px',
            height: '36px',
            borderRadius: '8px', 
            backgroundColor: '#37A7D5', 
            boxShadow: 'none',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '26px',
            color: '#FFFFFF',
            zIndex: 2,
            mt: 'auto',
            '&:hover': { backgroundColor: '#2A8CB4', boxShadow: 'none' }
          }}
        >
          Start Evaluation
        </Button>
      </Paper>
    </Box>
  </Box>
  );
};

export default MyTestsSection;
