import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Stack, 
  Button, 
  Grid, 
  Paper, 
  IconButton, 
  Drawer, 
  TextField, 
  InputAdornment, 
  Avatar,
  Divider,
  Chip
} from '@mui/material';
import SideMenu from '../components/layout/SideMenu';
import TopNavBar from '../components/layout/TopNavBar';
import SendIcon from '@mui/icons-material/Send';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// Connect the Dots Icon from USER
const ConnectDotsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.2943 1.58039C15.5346 1.02091 14.5805 0.856011 13.6795 1.13281L10.7349 2.03975C10.1224 2.22821 9.61002 2.59924 9.2449 3.08214C8.87977 2.59922 8.36742 2.22821 7.75494 2.03975L4.81033 1.13281C3.90929 0.856011 2.95522 1.01503 2.19552 1.58039C1.43582 2.13988 1 3.00558 1 3.94777V11.9748C1 13.2763 1.83627 14.407 3.07885 14.79L8.99746 16.6097C9.05636 16.6274 9.12114 16.6392 9.18592 16.6392C9.20947 16.6392 9.23892 16.6274 9.26248 16.6274C9.28015 16.6274 9.29781 16.6333 9.31548 16.6333C9.37437 16.6333 9.43326 16.6274 9.48627 16.6097L15.4049 14.79C16.6475 14.4072 17.4837 13.2764 17.4837 11.9748V3.94777C17.4837 3.00549 17.0479 2.13977 16.2882 1.58039H16.2943ZM2.17788 11.9808V3.9538C2.17788 3.38843 2.43701 2.87018 2.89637 2.5345C3.20849 2.30481 3.56774 2.18703 3.93875 2.18703C4.11542 2.18703 4.2921 2.21059 4.46288 2.26948L7.40749 3.17642C8.15543 3.40611 8.656 4.08336 8.656 4.86663V15.2846L3.42638 13.6769C2.67844 13.4472 2.17786 12.7699 2.17786 11.9866L2.17788 11.9808ZM16.312 11.9808C16.312 12.7641 15.8114 13.4414 15.0635 13.6711L9.83386 15.2788V4.85499C9.83386 4.07173 10.3344 3.39446 11.0824 3.16477L14.027 2.25783C14.1978 2.20483 14.3745 2.17538 14.5511 2.17538C14.9221 2.17538 15.2873 2.29317 15.5935 2.52286C16.047 2.85853 16.312 3.37678 16.312 3.94215L16.312 11.9808Z" fill="#7B869B"/>
  </svg>
);

// Confident Icon from USER
const ConfidentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.631 1.96094C2.95576 1.96094 2.4082 2.50782 2.4082 3.18308V5.97777C2.4082 6.65302 2.95574 7.20057 3.631 7.20057H6.42569C7.10094 7.20057 7.64784 6.65304 7.64784 5.97777V3.18308C7.64784 2.50784 7.10096 1.96094 6.42569 1.96094H3.631Z" fill="#7B869B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3159 11.042C10.6406 11.042 10.0938 11.5895 10.0938 12.2648V15.0595C10.0938 15.7347 10.6406 16.2816 11.3159 16.2816H14.1106C14.7858 16.2816 15.3334 15.7347 15.3334 15.0595V12.2648C15.3334 11.5895 14.7859 11.042 14.1106 11.042H11.3159Z" fill="#7B869B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3581 12.2686C1.88063 12.7461 1.88063 13.5202 2.3581 13.9976L4.33407 15.9736C4.81153 16.4511 5.58502 16.4511 6.06255 15.9736L8.03852 13.9976C8.51599 13.5202 8.51599 12.746 8.03852 12.2686L6.06255 10.2927C5.58509 9.8152 4.8116 9.8152 4.33407 10.2927L2.3581 12.2686Z" fill="#7B869B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7134 1.96094C13.0023 1.96094 13.2374 2.1954 13.2374 2.4849V6.67659C13.2374 6.96544 13.0023 7.20056 12.7134 7.20056C12.4239 7.20056 12.1895 6.96544 12.1895 6.67659V2.4849C12.1895 2.1954 12.4239 1.96094 12.7134 1.96094Z" fill="#7B869B"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0938 4.5806C10.0938 4.29111 10.3282 4.05664 10.6177 4.05664H14.8094C15.0982 4.05664 15.3334 4.29111 15.3334 4.5806C15.3334 4.86944 15.0982 5.10456 14.8094 5.10456H10.6177C10.3282 5.10456 10.0938 4.86944 10.0938 4.5806Z" fill="#7B869B"/>
  </svg>
);

const SourceArrow = () => (
  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
    <path d="M5.13289 4.24253L4.40842 4.24726L4.40842 1.24522L0.520911 5.13273L5.03706e-05 4.61187L3.88756 0.724358L0.890248 0.729093V-0.000111048L5.13289 -0.000110711L5.13289 4.24253Z" fill="#49546C"/>
  </svg>
);

const ChatResponse = () => {
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
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '72px', border: 'none' },
        }}
      >
        <SideMenu />
      </Drawer>

      <Box sx={{ flexGrow: 1, ml: { xs: 0, md: '72px' }, width: '100%', position: 'relative' }}>
        <TopNavBar onMenuToggle={handleDrawerToggle} />
        
        <Box sx={{ 
          pt: '87px', // 64px (AppBar) + 23px (Gap)
          pb: '169px',
          pl: '112px',
          pr: '112px',
          minHeight: '100vh',
          boxSizing: 'border-box'
        }}>
          {/* User Question - Independent of the flex row below */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: '18px', pr: '316px' }}> {/* 292px sidebar + 24px gap */}
            <Typography sx={{ 
              backgroundColor: '#F5F5F5', 
              p: '10px 20px', 
              borderRadius: '20px',
              fontSize: '14px',
              color: '#2A2A2A',
              fontFamily: "'DM Sans', sans-serif"
            }}>
              I want to know more about national budget
            </Typography>
          </Box>

          {/* Main Content Area (Response + Sidebar) */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            {/* Main Response Area */}
            <Box sx={{ flexGrow: 1, mr: '24px' }}>
              {/* Bot Response - First line of response */}
              <Stack direction="row" spacing={2} sx={{ mb: 4, ml: '-48px' }}>
                <Avatar sx={{ bgcolor: '#F99710', width: 32, height: 32 }}>
                   <AutoAwesomeIcon sx={{ fontSize: 18 }} />
                </Avatar>
                <Typography sx={{ fontSize: '15px', color: '#2A2A2A', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                   The National Budget is a critical economic instrument that reflects the government's policy priorities and fiscal strategy. Analyzing its components and implications provides insights into the economic health and governance of a nation.
                </Typography>
              </Stack>

              {/* Learn This Topic Section */}
              <Box>
                 <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                   <MenuBookIcon sx={{ fontSize: 20, color: '#2A2A2A' }} />
                   <Typography sx={{ fontWeight: 600, fontSize: '18px', fontFamily: "'DM Sans', sans-serif" }}>Learn This Topic</Typography>
                 </Stack>
                 
                 <Paper sx={{ 
                   width: '828px',
                   height: '222px',
                   borderRadius: '12px', 
                   border: '1px solid #E1E7EA', 
                   boxShadow: 'none',
                   background: '#FFFFFF',
                   p: '14px 12px 8px 12px',
                   display: 'flex',
                   flexDirection: 'column',
                   gap: '5px',
                   boxSizing: 'border-box'
                 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Box>
                        <Typography sx={{ 
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '100%',
                          color: '#7B869B',
                          mb: '2px'
                        }}>
                          Indian Economy
                        </Typography>
                        <Typography sx={{ 
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontWeight: 600,
                          fontSize: '24px',
                          lineHeight: '120%',
                          color: '#2A2A2A'
                        }}>
                          Govt. Administrations
                        </Typography>
                      </Box>
                      <Button 
                        variant="contained" 
                        sx={{ 
                          bgcolor: '#32B2DD', 
                          color: 'white', 
                          borderRadius: '24px',
                          textTransform: 'none',
                          px: 3,
                          py: 1,
                          fontSize: '16px',
                          fontWeight: 600,
                          '&:hover': { bgcolor: '#2A99BD' }
                        }}
                      >
                        Start Learning
                      </Button>
                    </Box>

                    {/* Image Thumbnails and Resources */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, mt: '6px' }}>
                      {/* Image Thumbnails */}
                      <Box sx={{ display: 'flex', gap: '5.68px', alignItems: 'center' }}>
                        {[
                          '/Image Demo.png',
                          '/Image Demo copy.png',
                          '/Image Demo copy 2.png',
                          '/Image Demo copy 3.png'
                        ].map((src, i) => (
                          <Box 
                            key={i}
                            component="img"
                            src={src}
                            alt={`Budget Thumbnail ${i + 1}`}
                            sx={{ 
                              width: '64px', 
                              height: '64px', 
                              borderRadius: '4px', 
                              border: '1px solid #E1E7EA',
                              objectFit: 'cover'
                            }}
                          />
                        ))}
                      </Box>

                      {/* Resource Links (Chips) */}
                      <Box sx={{ display: 'flex', gap: '8px' }}>
                        {[
                          'Previous Year Questions',
                          'Case Studies',
                          'Infographics/Mindmaps'
                        ].map((label) => (
                          <Box 
                            key={label}
                            sx={{ 
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              border: '1px solid #E1E7EA',
                              borderRadius: '8px',
                              px: '12px',
                              py: '6px',
                              cursor: 'pointer',
                              '&:hover': { backgroundColor: '#F8F8F8' }
                            }}
                          >
                            <Typography sx={{ fontSize: '13px', color: '#2A2A2A', fontFamily: 'Inter, sans-serif' }}>
                              {label}
                            </Typography>
                            <SourceArrow />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Typography sx={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      lineHeight: '160%',
                      color: '#7A7A7A',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      The Budget 2025 has emerged as a transformative blueprint aimed at driving economic growth, fostering inclusivity, and embracing sustainability. Presented amidst evolving global challenges and domestic priorities, this budget focuses on empowering key sectors such as infrastructure, healthcare, education, and green energy. A significant increase in capital expenditure has been allocated to modernize...
                    </Typography>
                 </Paper>

                 {/* New Content 12px below the box */}
                 <Box sx={{ mt: '12px' }}>
                    {/* Key Aspects */}
                    <Typography sx={{ 
                      fontFamily: "'Source Sans 3', sans-serif", 
                      fontWeight: 600, 
                      fontSize: '18px', 
                      lineHeight: '160%',
                      color: '#2A2A2A',
                      mb: '8px'
                    }}>
                      Key Aspects
                    </Typography>
                    
                    <Stack spacing={0.5} sx={{ mb: 3 }}>
                      <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                        1. Definition: A national budget outlines the government's planned revenue and expenditure for a specific fiscal year.
                      </Typography>
                      
                      <Box>
                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                          2. Objectives:
                        </Typography>
                        <Box sx={{ pl: 2.5 }}>
                          <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                            • Economic Growth: Stimulating investment and consumption.
                          </Typography>
                          <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                            • Income Redistribution: Promoting social equity through various programmes.
                          </Typography>
                          <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                            • Fiscal Discipline: Ensuring sustainable financial health.
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box>
                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                          3. Components:
                        </Typography>
                        <Box sx={{ pl: 2.5 }}>
                          <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                            • Revenue: Income generated from taxes, fees, and other sources.
                          </Typography>
                          <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                            • Expenditure: Money spent on public services, infrastructure, defense, etc.
                          </Typography>
                          <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                            • Deficit/Surplus: The balance between revenue and expenditure.
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>

                    {/* National Budget Cycle */}
                    <Typography sx={{ 
                      fontFamily: "'Source Sans 3', sans-serif", 
                      fontWeight: 600, 
                      fontSize: '18px', 
                      lineHeight: '160%',
                      color: '#2A2A2A',
                      mb: '8px'
                    }}>
                      National Budget Cycle
                    </Typography>
                    
                    <Stack spacing={0.5}>
                      <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                        1. Preparation: Departments propose budgets.
                      </Typography>
                      <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                        2. Presentation: Introducing the budget in the Parliament.
                      </Typography>
                    </Stack>
                 </Box>
              </Box>
            </Box>

            {/* Right Side Bar - Starts with Bot Response */}
            <Box sx={{ 
              width: '292px', 
              flexShrink: 0,
              height: '612px',
              position: 'sticky',
              top: '87px',
              overflowY: 'auto',
              '&::-webkit-scrollbar': { width: 0 }
            }}>
              <Stack spacing={1.25}>
                {/* Stay Updated */}
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.75 }}>
                    <LanguageIcon sx={{ fontSize: 20, color: '#7B869B' }} />
                    <Typography sx={{ fontWeight: 600, fontSize: '18px', fontFamily: "'DM Sans', sans-serif" }}>Stay Updated</Typography>
                  </Stack>
                  
                  {/* Stay Updated Card 1: 292x104 */}
                  <Paper sx={{ 
                    width: '292px', 
                    height: '104px', 
                    p: '6px 6px 6px 12px',
                    borderRadius: '8px', 
                    border: '1px solid #E1E7EA', 
                    boxShadow: 'none',
                    display: 'flex',
                    gap: '10px',
                    boxSizing: 'border-box',
                    mb: 0.75,
                    alignItems: 'center',
                    position: 'relative'
                  }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography sx={{ 
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '100%',
                        color: '#2A2A2A',
                        mb: 1 
                      }}>
                        Tax Reforms in Budget 2025: What It Means for Individuals and Busin...
                      </Typography>
                      <Typography sx={{ 
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 400,
                        fontSize: '10px',
                        lineHeight: '120%',
                        letterSpacing: '0.01em',
                        color: '#49546C',
                        position: 'absolute',
                        bottom: '8px',
                        left: '12px',
                        textTransform: 'uppercase'
                      }}>
                        Sources <SourceArrow />
                      </Typography>
                    </Box>
                    <Box 
                      component="img" 
                      src="/Group 1171279188.png" 
                      alt="Stay Updated"
                      sx={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }}
                    />
                  </Paper>

                  {/* Stay Updated Card 2: 292x92 */}
                  <Paper sx={{ 
                    width: '292px', 
                    height: '92px',
                    p: 1.5,
                    borderRadius: '8px', 
                    border: '1px solid #E1E7EA', 
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '10px',
                    position: 'relative'
                  }}>
                    <Typography sx={{ 
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: '100%',
                      color: '#2A2A2A',
                      mb: 0.5 
                    }}>
                      Budget 2025 Highlights: Key Allocations and tax reforms
                    </Typography>
                    <Typography sx={{ 
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '120%',
                      letterSpacing: '0.01em',
                      color: '#49546C',
                      position: 'absolute',
                      bottom: '8px',
                      left: '12px',
                      textTransform: 'uppercase'
                    }}>
                      Sources <SourceArrow />
                    </Typography>
                  </Paper>
                </Box>

                {/* Connect the Dots */}
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.75 }}>
                    <ConnectDotsIcon />
                    <Typography sx={{ fontWeight: 600, fontSize: '18px', fontFamily: "'DM Sans', sans-serif" }}>Connect the Dots</Typography>
                  </Stack>
                  
                  {/* Connect the Dots Card 1: 292x67 */}
                <Paper sx={{ 
                  width: '292px', 
                  height: '67px', 
                  p: '12px',
                  borderRadius: '8px', 
                  border: '1px solid #E1E7EA', 
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  mb: 0.75,
                  gap: '4px',
                  backgroundColor: '#FBFBFB'
                }}>
                  <Typography sx={{ 
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '2%',
                    color: '#7A7A7A'
                  }}>
                    Indian Economy (GS-3)
                  </Typography>
                  <Typography sx={{ 
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '100%',
                    color: '#2A2A2A'
                  }}>
                    Fiscal Policy & Budget Deficit
                  </Typography>
                </Paper>

                  {/* Connect the Dots Card 2: 292x67 */}
                <Paper sx={{ 
                  width: '292px', 
                  height: '67px', 
                  p: '12px',
                  borderRadius: '8px', 
                  border: '1px solid #E1E7EA', 
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: '#FBFBFB',
                  gap: '4px'
                }}>
                  <Typography sx={{ 
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '2%',
                    color: '#7A7A7A'
                  }}>
                    Defence (GS-3)
                  </Typography>
                  <Typography sx={{ 
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '100%',
                    color: '#2A2A2A'
                  }}>
                    Defense & Security Allocations
                  </Typography>
                </Paper>
                </Box>

                {/* Practice Test Card - Moved up with 12px gap */}
                <Paper sx={{ 
                  width: '292px', 
                  height: '176px',
                  p: '20px 16px',
                  borderRadius: '10px', 
                  border: '1px solid #E1E7EA', 
                  boxShadow: 'none',
                  backgroundColor: '#FFF9F0',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  mt: '-4px' // Adjusting Stack spacing (1.25 * 8 = 10px) to reach ~6px gap
                }}>
                    <Typography sx={{ 
                      fontSize: '20px', 
                      fontWeight: 700, 
                      color: '#846440', 
                      mb: 2,
                      fontFamily: "'DM Sans', sans-serif"
                    }}>
                      Take a Practice Test
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', zIndex: 1 }}>
                      {[
                        'National Budget', 
                        'Fiscal Deficit', 
                        'Taxes', 
                        'Revenue expenditure', 
                        'State subsidies'
                      ].map((label) => (
                        <Box 
                          key={label}
                          sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E1E7EA',
                            borderRadius: '8px',
                            px: '12px',
                            py: '6px',
                            cursor: 'pointer',
                            '&:hover': { backgroundColor: '#F8F8F8' }
                          }}
                        >
                          <Typography sx={{ fontSize: '13px', fontWeight: 500, color: '#2A2A2A' }}>
                            {label}
                          </Typography>
                          <Typography sx={{ fontSize: '14px', color: '#7A7A7A' }}>↗</Typography>
                        </Box>
                      ))}
                    </Box>
                    {/* Achievement Image with precise specs */}
                    <Box 
                      component="img" 
                      src="/achievement (2) 1.png" 
                      alt="Achievement"
                      sx={{ 
                        position: 'absolute',
                        width: '71.83px', 
                        height: '71.83px',
                        top: '-6.03px',
                        left: '212.17px',
                        transform: 'rotate(30deg)',
                        opacity: 1,
                        pointerEvents: 'none'
                      }}
                    />
                  </Paper>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Bottom Sticky Input */}
        <Box sx={{ 
          position: 'fixed', 
          bottom: 20, 
          left: { xs: 20, md: 184 },
          right: { xs: 20, md: 428 },
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Paper sx={{ 
            width: '100%', 
            p: '8px 16px', 
            borderRadius: '24px', 
            border: '1px solid #E1E7EA', 
            boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}>
            <TextField 
              fullWidth
              placeholder="Ask a follow up.."
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: { fontSize: '15px' }
              }}
              multiline
              maxRows={4}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Stack direction="row" spacing={1}>
                <Button size="small" startIcon={<MenuBookIcon />} sx={{ textTransform: 'none', color: '#7A7A7A' }}>Learn</Button>
                <Button size="small" startIcon={<BorderColorIcon />} sx={{ textTransform: 'none', color: '#7A7A7A' }}>Practice</Button>
                <Button size="small" startIcon={<AddIcon />} sx={{ textTransform: 'none', color: '#7A7A7A' }}>Attach</Button>
              </Stack>
              <IconButton sx={{ bgcolor: '#32B2DD', color: 'white', '&:hover': { bgcolor: '#2A99BD' } }}>
                <SendIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Paper>
          <Typography sx={{ fontSize: '11px', color: '#7A7A7A', mt: 1 }}>
            Mntor can make mistakes. Check important info before proceeding.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatResponse;
