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
    <path d="M16.2943 1.58039C15.5346 1.02091 14.5805 0.856011 13.6795 1.13281L10.7349 2.03975C10.1224 2.22821 9.61002 2.59924 9.2449 3.08214C8.87977 2.59922 8.36742 2.22821 7.75494 2.03975L4.81033 1.13281C3.90929 0.856011 2.95522 1.01503 2.19552 1.58039C1.43582 2.13988 1 3.00558 1 3.94777V11.9748C1 13.2763 1.83627 14.407 3.07885 14.79L8.99746 16.6097C9.05636 16.6274 9.12114 16.6392 9.18592 16.6392C9.20947 16.6392 9.23892 16.6274 9.26248 16.6274C9.28015 16.6274 9.29781 16.6333 9.31548 16.6333C9.37437 16.6333 9.43326 16.6274 9.48627 16.6097L15.4049 14.79C16.6475 14.4072 17.4837 13.2764 17.4837 11.9748V3.94777C17.4837 3.00549 17.0479 2.13977 16.2882 1.58039H16.2943ZM2.17788 11.9808V3.9538C2.17788 3.38843 2.43701 2.87018 2.89637 2.5345C3.20849 2.30481 3.56774 2.18703 3.93875 2.18703C4.11542 2.18703 4.2921 2.21059 4.46288 2.26948L7.40749 3.17642C8.15543 3.40611 8.656 4.08336 8.656 4.86663V15.2846L3.42638 13.6769C2.67844 13.4472 2.17786 12.7699 2.17786 11.9866L2.17788 11.9808ZM16.312 11.9808C16.312 12.7641 15.8114 13.4414 15.0635 13.6711L9.83386 15.2788V4.85499C9.83386 4.07173 10.3344 3.39446 11.0824 3.16477L14.027 2.25783C14.1978 2.20483 14.3745 2.17538 14.5511 2.17538C14.9221 2.17538 15.2873 2.29317 15.5935 2.52286C16.047 2.85853 16.312 3.37678 16.312 3.94215L16.312 11.9808Z" fill="#7B869B" />
  </svg>
);

// Confident Icon from USER
const ConfidentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.631 1.96094C2.95576 1.96094 2.4082 2.50782 2.4082 3.18308V5.97777C2.4082 6.65302 2.95574 7.20057 3.631 7.20057H6.42569C7.10094 7.20057 7.64784 6.65304 7.64784 5.97777V3.18308C7.64784 2.50784 7.10096 1.96094 6.42569 1.96094H3.631Z" fill="#7B869B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.3159 11.042C10.6406 11.042 10.0938 11.5895 10.0938 12.2648V15.0595C10.0938 15.7347 10.6406 16.2816 11.3159 16.2816H14.1106C14.7858 16.2816 15.3334 15.7347 15.3334 15.0595V12.2648C15.3334 11.5895 14.7859 11.042 14.1106 11.042H11.3159Z" fill="#7B869B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.3581 12.2686C1.88063 12.7461 1.88063 13.5202 2.3581 13.9976L4.33407 15.9736C4.81153 16.4511 5.58502 16.4511 6.06255 15.9736L8.03852 13.9976C8.51599 13.5202 8.51599 12.746 8.03852 12.2686L6.06255 10.2927C5.58509 9.8152 4.8116 9.8152 4.33407 10.2927L2.3581 12.2686Z" fill="#7B869B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.7134 1.96094C13.0023 1.96094 13.2374 2.1954 13.2374 2.4849V6.67659C13.2374 6.96544 13.0023 7.20056 12.7134 7.20056C12.4239 7.20056 12.1895 6.96544 12.1895 6.67659V2.4849C12.1895 2.1954 12.4239 1.96094 12.7134 1.96094Z" fill="#7B869B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.0938 4.5806C10.0938 4.29111 10.3282 4.05664 10.6177 4.05664H14.8094C15.0982 4.05664 15.3334 4.29111 15.3334 4.5806C15.3334 4.86944 15.0982 5.10456 14.8094 5.10456H10.6177C10.3282 5.10456 10.0938 4.86944 10.0938 4.5806Z" fill="#7B869B"/>
  </svg>
);

const SourceArrow = () => (
  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
    <path d="M5.13289 4.24253L4.40842 4.24726L4.40842 1.24522L0.520911 5.13273L5.03706e-05 4.61187L3.88756 0.724358L0.890248 0.729093V-0.000111048L5.13289 -0.000110711L5.13289 4.24253Z" fill="#49546C" />
  </svg>
);

// Keyword Arrow Icon
const KeywordArrow = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '9px' }}>
    <path d="M7.9359 7.72591L8 0C6.06484 0.0187814 2.2092 0.0452953 0.273995 0.0640768L0.258102 1.03128C1.9987 1.01419 4.30942 0.999995 6.34219 0.98155L0 7.32362L0.676378 8L7.01856 1.6579L6.96354 7.73665L7.9359 7.72591Z" fill="#A2A8B4" />
  </svg>
);

const ChatResponse = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [toggleType, setToggleType] = useState('prelims');

  const prelimsQuestions = [
    {
      text: "What is the difference between capital and revenue expenditure? (2023)",
      tag: "Prelims - 2024"
    },
    {
      text: "Which Article of the Constitution deals with the Union Budget?",
      tag: "Prelims - 2023"
    },
    {
      text: "What is the primary deficit in fiscal policy?",
      tag: "Prelims - 2021"
    }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#FEFEFE', minHeight: '100vh' }}>
      {/* Sidebar for Desktop */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <SideMenu isCollapsed={isSidebarCollapsed} onToggle={handleSidebarToggle} />
      </Box>

      {/* Sidebar Drawer for Mobile/Tablet */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '200px', border: 'none' },
        }}
      >
        <SideMenu isCollapsed={false} onToggle={handleDrawerToggle} />
      </Drawer>

      <Box sx={{
        flexGrow: 1,
        ml: { xs: 0, md: isSidebarCollapsed ? '72px' : '200px' },
        width: '100%',
        position: 'relative',
        transition: 'margin-left 0.3s ease-in-out'
      }}>
        <TopNavBar onMenuToggle={handleDrawerToggle} isCollapsed={isSidebarCollapsed} />

        <Box sx={{
          pt: '87px', // 64px (AppBar) + 23px (Gap)
          pb: '200px',
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
          <Box sx={{ display: 'flex', alignItems: 'flex-start', overflow: 'visible' }}>
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

                  <Stack spacing={0.5} sx={{ mb: 3 }}>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', letterSpacing: '0%', color: '#2A2A2A' }}>
                      1. Preparation: Departments propose budgets.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', letterSpacing: '0%', color: '#2A2A2A' }}>
                      2. Presentation: Introducing the budget in the Parliament.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', letterSpacing: '0%', color: '#2A2A2A' }}>
                      3. Approval: Government seeks approval from the legislature.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', letterSpacing: '0%', color: '#2A2A2A' }}>
                      4. Implementation: Execution of the budget allocations.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', letterSpacing: '0%', color: '#2A2A2A' }}>
                      5. Review and Evaluation: Assessing the outcomes compared to targets.
                    </Typography>
                  </Stack>

                  {/* Recent Trends */}
                  <Typography sx={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '160%',
                    letterSpacing: '0%',
                    color: '#2A2A2A',
                    mb: '8px'
                  }}>
                    Recent Trends IN National Budgets(Hypothetical Data)
                  </Typography>

                  <Stack spacing={0.5} sx={{ mb: 3 }}>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', letterSpacing: '0%', color: '#2A2A2A' }}>
                      1. Budget Allocation for Health: Increase from previous year.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', letterSpacing: '0%', color: '#2A2A2A' }}>
                      2. Education Funding: Maintaining or enhancing investment.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', letterSpacing: '0%', color: '#2A2A2A' }}>
                      3. Infrastructure Development: Allocation towards roads, railways, etc.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', letterSpacing: '0%', color: '#2A2A2A' }}>
                      4. Social Welfare Schemes: Expansion of existing schemes.
                    </Typography>
                  </Stack>

                  {/* Comparative Analysis */}
                  <Typography sx={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '160%',
                    letterSpacing: '0%',
                    color: '#2A2A2A',
                    mb: '8px'
                  }}>
                    Comparative Analysis of Government Budgets (In Recent Years)
                  </Typography>

                  {/* Comparative Analysis Table */}
                  <Box sx={{
                    width: '828px',
                    height: '128px',
                    border: '1px solid #E1E7EA',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    mb: 3
                  }}>
                    {[1, 2, 3, 4].map((rowIndex) => (
                      <Box
                        key={rowIndex}
                        sx={{
                          display: 'flex',
                          height: '32px',
                          width: '828px',
                          backgroundColor: rowIndex === 1 ? '#E2F0F6' : 'transparent',
                          borderBottom: rowIndex === 4 ? 'none' : '1px solid #E1E7EA',
                        }}
                      >
                        {rowIndex === 1 ? (
                          <>
                            <Box sx={{ width: '207px', position: 'relative' }}>
                              <Typography sx={{
                                position: 'absolute',
                                left: '12.75px',
                                top: '5px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '160%',
                                color: '#2A2A2A'
                              }}>
                                Year
                              </Typography>
                            </Box>
                            <Box sx={{ width: '207px', position: 'relative' }}>
                              <Typography sx={{
                                position: 'absolute',
                                left: '79.25px',
                                top: '5px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '160%',
                                whiteSpace: 'nowrap',
                                color: '#2A2A2A'
                              }}>
                                Total expenditure
                              </Typography>
                            </Box>
                            <Box sx={{ width: '207px', position: 'relative' }}>
                              <Typography sx={{
                                position: 'absolute',
                                left: '79px',
                                top: '5px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '160%',
                                whiteSpace: 'nowrap',
                                color: '#2A2A2A'
                              }}>
                                Total Revenue
                              </Typography>
                            </Box>
                            <Box sx={{ width: '207px', position: 'relative' }}>
                              <Typography sx={{
                                position: 'absolute',
                                left: '95px',
                                top: '5px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '160%',
                                whiteSpace: 'nowrap',
                                color: '#2A2A2A'
                              }}>
                                Key Focus Areas
                              </Typography>
                            </Box>
                          </>
                        ) : (
                          [1, 2, 3, 4].map((colIndex) => (
                            <Box
                              key={colIndex}
                              sx={{
                                width: '207px',
                              }}
                            />
                          ))
                        )}
                      </Box>
                    ))}
                  </Box>

                  {/* Impact of Budget Decisions */}
                  <Typography sx={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '160%',
                    letterSpacing: '0%',
                    color: '#2A2A2A',
                    mb: '8px'
                  }}>
                    Impact of Budget Decisions
                  </Typography>

                  <Box sx={{
                    p: '4px 0',
                    mt: 1,
                    width: '828px',
                    boxSizing: 'border-box',
                    mb: 3
                  }}>
                    <Stack spacing={1}>
                      <Box sx={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                          •
                        </Typography>
                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                          Economic Indicators: Changes in budget allocations can significantly influence economic parameters like GDP growth, inflation, and employment.
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                          •
                        </Typography>
                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '160%', color: '#2A2A2A' }}>
                          Social Welfare: Directly affects marginalized communities through welfare programs.
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  {/* Conclusion */}
                  <Typography sx={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '160%',
                    letterSpacing: '0%',
                    color: '#2A2A2A',
                    mb: '8px'
                  }}>
                    Conclusion
                  </Typography>

                  <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '160%',
                    letterSpacing: '0%',
                    color: '#2A2A2A',
                    width: '828px',
                    mb: 3
                  }}>
                    The national budget is instrumental in shaping economic and social policies, reflecting the government's priorities and economic vision. Understanding its components and implications is essential for UPSC preparation, especially in the context of the economy.
                  </Typography>

                  {/* Keywords */}
                  <Typography sx={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '160%',
                    letterSpacing: '0%',
                    color: '#2A2A2A',
                    mb: '8px'
                  }}>
                    Keywords
                  </Typography>

                  <Box sx={{ display: 'flex', gap: '6px', width: '828px', flexWrap: 'nowrap', mb: 3 }}>
                    {[
                      { width: '126px', label: 'National budget' },
                      { width: '106px', label: 'Fiscal Deficit' },
                      { width: '68px', label: 'Taxes' },
                      { width: '153px', label: 'Revenue expenditure' },
                      { width: '119px', label: 'State subsidies' },
                      { width: '152px', label: 'Foreign Expenditures' }
                    ].map((box, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: box.width,
                          flexShrink: 0,
                          height: '29px',
                          backgroundColor: '#FAFAFA',
                          border: '1px solid #EEEEEE',
                          borderRadius: '7px',
                          padding: '5px 10px',
                          boxSizing: 'border-box',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography sx={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontWeight: 400,
                          fontSize: '13px',
                          lineHeight: '100%',
                          color: '#2A2A2A',
                          display: 'flex',
                          alignItems: 'center',
                          whiteSpace: 'nowrap'
                        }}>
                          {box.label}
                          <KeywordArrow />
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Case Studies in Action */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '8px' }}>
                    <Box
                      component="img"
                      src="/Vector.png"
                      alt="Case Studies"
                      sx={{ width: '18px', height: '18px' }}
                    />
                    <Typography sx={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '160%',
                      letterSpacing: '0%',
                      color: '#2A2A2A'
                    }}>
                      Case Studies in Action
                    </Typography>
                  </Box>
                  {/* Case Study Cards */}
                  <Box sx={{ display: 'flex', gap: '10px', width: '828px' }}>
                    {[
                      {
                        label: 'India',
                        title: 'Union Budget 2023',
                        desc: 'Focused on infrastructure spending to boost GDP.',
                        bg: '#FAFAFA',
                        labelGap: '12px'
                      },
                      {
                        label: 'India',
                        title: 'Growth & Fiscal Discipline',
                        desc: 'India’s national budget reflects a strategic balance between fiscal polici...',
                        bg: '#F0F5F7',
                        labelGap: '8px'
                      },
                      {
                        label: 'Brazil',
                        title: 'Budget Deficit Management',
                        desc: 'Understanding the balance between austerity measures and welfare spendi...',
                        bg: '#FAFAFA',
                        labelGap: '12px'
                      }
                    ].map((card, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: '263px',
                          height: '120px',
                          backgroundColor: card.bg,
                          border: '1px solid #E1E7EA',
                          borderRadius: '12px',
                          padding: '12px',
                          boxSizing: 'border-box'
                        }}
                      >
                        <Typography sx={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontWeight: 500,
                          fontSize: '14px',
                          lineHeight: '140%',
                          letterSpacing: '2%',
                          color: '#7A7A7A',
                          mb: card.labelGap || '12px'
                        }}>
                          {card.label}
                        </Typography>

                        {card.title && (
                          <Typography sx={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '20px',
                            color: '#2A2A2A',
                            mb: '6px'
                          }}>
                            {card.title}
                          </Typography>
                        )}

                        {card.desc && (
                          <Typography sx={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '19px',
                            color: '#49546C'
                          }}>
                            {card.desc}
                          </Typography>
                        )}
                      </Box>
                    ))}
                  </Box>

                  {/* Follow up Questions Section */}
                  <Box sx={{
                    mt: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '828px',
                    position: 'relative',
                    mb: '12px'
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Box
                        component="img"
                        src="/Frame 1171280722.png"
                        alt="Follow up Questions"
                        sx={{ width: '24px', height: '24px' }}
                      />
                      <Typography sx={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 500,
                        fontSize: '18px',
                        lineHeight: '160%',
                        color: '#2A2A2A'
                      }}>
                        Follow up Questions
                      </Typography>
                    </Box>

                    {/* Toggle Switch (Prelims/Mains) */}
                    <Box sx={{
                      position: 'absolute',
                      left: '689px',
                      width: '120px',
                      height: '28px',
                      borderRadius: '7px',
                      border: '0.5px solid #E1E7EA',
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#FFFFFF',
                      p: '2px',
                      boxSizing: 'border-box'
                    }}>
                      {/* Sliding Background */}
                      <Box sx={{
                        position: 'absolute',
                        left: toggleType === 'prelims' ? '2px' : '59px',
                        width: '59px',
                        height: '24px',
                        borderRadius: '6px',
                        backgroundColor: '#E1E7EA',
                        boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 1
                      }} />

                      {/* Prelims Option */}
                      <Box
                        onClick={() => setToggleType('prelims')}
                        sx={{
                          width: '59px',
                          height: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          zIndex: 2
                        }}
                      >
                        <Typography sx={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '13px',
                          fontWeight: toggleType === 'prelims' ? 500 : 400,
                          color: toggleType === 'prelims' ? '#2A2A2A' : '#7A7A7A',
                          transition: 'color 0.3s'
                        }}>
                          Prelims
                        </Typography>
                      </Box>

                      {/* Mains Option */}
                      <Box
                        onClick={() => setToggleType('mains')}
                        sx={{
                          width: '59px',
                          height: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          zIndex: 2
                        }}
                      >
                        <Typography sx={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: '13px',
                          fontWeight: toggleType === 'mains' ? 500 : 400,
                          color: toggleType === 'mains' ? '#2A2A2A' : '#7A7A7A',
                          transition: 'color 0.3s'
                        }}>
                          Mains
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Questions List */}
                  {toggleType === 'prelims' && (
                    <Box sx={{ width: '828px' }}>
                      {prelimsQuestions.map((q, index) => (
                        <Box key={index}>
                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            py: '16px',
                            width: '828px'
                          }}>
                            <Typography sx={{
                              fontFamily: "'Source Sans 3', sans-serif",
                              fontWeight: 500,
                              fontSize: '16px',
                              lineHeight: '20px',
                              color: '#2A2A2A'
                            }}>
                              {q.text}
                            </Typography>

                            <Typography sx={{
                              fontFamily: "'Source Sans 3', sans-serif",
                              fontWeight: 500,
                              fontStyle: 'italic',
                              fontSize: '14px',
                              lineHeight: '20px',
                              color: '#49546C',
                              ml: '8px',
                              textAlign: 'right'
                            }}>
                              {q.tag}
                            </Typography>

                            <AddIcon sx={{ fontSize: 18, color: '#49546C', cursor: 'pointer', ml: 'auto' }} />
                          </Box>
                          {/* Horizontal Line */}
                          <Box sx={{
                            width: '828px',
                            height: '1px',
                            backgroundColor: '#DFDFDFBD'
                          }} />
                        </Box>
                      ))}

                      {/* Copy & Download Buttons */}
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mt: '20px',
                        width: 'fit-content'
                      }}>
                        {/* Copy Button */}
                        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.05974 5.41039H4.1179V2.05974C4.1179 1.49276 4.34934 0.977558 4.7224 0.604501C5.09546 0.231444 5.61065 0 6.17764 0H13.6478C14.2148 0 14.7299 0.231444 15.103 0.604501C15.4761 0.977558 15.7075 1.49276 15.7075 2.05974V9.52987C15.7075 10.0969 15.4755 10.6121 15.103 10.9851C14.7299 11.3582 14.2148 11.5896 13.6478 11.5896H11.5896V14.9403C11.5896 15.5072 11.3582 16.0224 10.9851 16.3955C10.6121 16.7686 10.0969 17 9.52987 17H2.05974C1.49276 17 0.977558 16.7686 0.604501 16.3955C0.231443 16.0224 0 15.5072 0 14.9403V7.47013C0 6.90315 0.231443 6.38795 0.604501 6.01489C0.977558 5.64183 1.49276 5.41039 2.05974 5.41039ZM5.2693 5.41039H9.52987C10.0969 5.41039 10.6121 5.64183 10.9851 6.01489C11.3582 6.38795 11.5896 6.90315 11.5896 7.47013V10.4382H13.6478C13.8972 10.4382 14.1244 10.3357 14.2887 10.1708C14.4536 10.006 14.5561 9.77875 14.5561 9.52987V2.05974C14.5561 1.81033 14.4536 1.58312 14.2887 1.41825C14.1239 1.25339 13.8966 1.15088 13.6478 1.15088H6.17764C5.92823 1.15088 5.70101 1.25339 5.53615 1.41825C5.37129 1.58312 5.26877 1.81033 5.26877 2.05974V5.41039H5.2693ZM4.69651 6.56179H4.69334H4.69017H2.05921C1.8098 6.56179 1.58259 6.6643 1.41825 6.82917C1.25339 6.99403 1.15088 7.22125 1.15088 7.47066V14.9408C1.15088 15.1902 1.25339 15.4174 1.41825 15.5823C1.58312 15.7471 1.81033 15.8497 2.05974 15.8497H9.52987C9.77928 15.8497 10.0065 15.7471 10.1714 15.5823C10.3362 15.4174 10.4387 15.1902 10.4387 14.9408V11.0142V7.47066C10.4387 7.22125 10.3362 6.99403 10.1714 6.82917C10.0065 6.6643 9.77928 6.56179 9.52987 6.56179H4.69651Z" fill="#7B869B" />
                          </svg>
                          <Typography sx={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '160%',
                            color: '#7B869B',
                            ml: '4px'
                          }}>
                            Copy
                          </Typography>
                        </Box>

                        {/* Download Button */}
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: '14px', cursor: 'pointer' }}>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 11.5V14.8333C17.5 15.2754 17.3244 15.6993 17.0118 16.0118C16.6993 16.3244 16.2754 16.5 15.8333 16.5H4.16667C3.72464 16.5 3.30072 16.3244 2.98816 16.0118C2.67559 15.6993 2.5 15.2754 2.5 14.8333V11.5" stroke="#7B869B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.83301 8.33398L9.99967 12.5007L14.1663 8.33398" stroke="#7B869B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 12.5V2.5" stroke="#7B869B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <Typography sx={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '160%',
                            color: '#7B869B',
                            ml: '4px'
                          }}>
                            Download
                          </Typography>
                        </Box>

                        {/* Share Button */}
                        <Box sx={{ display: 'flex', alignItems: 'center', ml: '491px', cursor: 'pointer' }}>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 11.5V14.8333C17.5 15.2754 17.3244 15.6993 17.0118 16.0118C16.6993 16.3244 16.2754 16.5 15.8333 16.5H4.16667C3.72464 16.5 3.30072 16.3244 2.98816 16.0118C2.67559 15.6993 2.5 15.2754 2.5 14.8333V11.5" stroke="#7B869B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.83301 8.33398L9.99967 12.5007L14.1663 8.33398" stroke="#7B869B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 12.5V2.5" stroke="#7B869B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <Typography sx={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '160%',
                            color: '#7B869B',
                            ml: '4px'
                          }}>
                            Share
                          </Typography>
                        </Box>

                        {/* Like Icon */}
                        <Box sx={{ ml: '28px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.541992 5.98145H2.26367C2.26921 5.98145 2.27811 5.9831 2.28711 5.99219C2.2968 6.0022 2.30566 6.02001 2.30566 6.04102V14.4404C2.30566 14.4614 2.29679 14.4783 2.28711 14.4883C2.278 14.4976 2.26927 14.5 2.26367 14.5H0.541992C0.536369 14.5 0.526728 14.4977 0.517578 14.4883C0.507987 14.4782 0.500007 14.4613 0.5 14.4404V6.04102C0.5 6.02001 0.50789 6.0022 0.517578 5.99219C0.526699 5.9828 0.536383 5.98145 0.541992 5.98145ZM8.1084 0.5C8.38352 0.492475 8.68162 0.64456 8.92188 0.945312C9.16164 1.24555 9.29448 1.63711 9.27148 1.9873L9.27051 1.99219L9.08398 5.4541L9.05566 5.98145H13.4199L13.541 5.98828C13.6619 6.00288 13.7801 6.0393 13.8906 6.0957C14.038 6.1709 14.1683 6.28067 14.2705 6.41797C14.3728 6.55534 14.4438 6.71636 14.4775 6.88867C14.5112 7.06098 14.507 7.23933 14.4639 7.40918L14.4629 7.41016L12.9834 13.3008C12.8969 13.6459 12.7036 13.9494 12.4365 14.165C12.1698 14.3804 11.8437 14.4968 11.5098 14.5H4.4082V5.98145H5.78125L5.90527 5.66406L7.72266 1.04883L7.72461 1.04492C7.78991 0.87503 7.87341 0.714932 7.96387 0.606445C8.00773 0.553863 8.04387 0.525547 8.06738 0.511719C8.08533 0.501192 8.09287 0.499975 8.09473 0.5V0.500977L8.1084 0.5Z" stroke="#7B869B" />
                          </svg>
                        </Box>

                        {/* Dislike Icon */}
                        <Box sx={{ ml: '16px', display: 'flex', alignItems: 'center', cursor: 'pointer', transform: 'rotate(180deg)' }}>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.541992 5.98145H2.26367C2.26921 5.98145 2.27811 5.9831 2.28711 5.99219C2.2968 6.0022 2.30566 6.02001 2.30566 6.04102V14.4404C2.30566 14.4614 2.29679 14.4783 2.28711 14.4883C2.278 14.4976 2.26927 14.5 2.26367 14.5H0.541992C0.536369 14.5 0.526728 14.4977 0.517578 14.4883C0.507987 14.4782 0.500007 14.4613 0.5 14.4404V6.04102C0.5 6.02001 0.50789 6.0022 0.517578 5.99219C0.526699 5.9828 0.536383 5.98145 0.541992 5.98145ZM8.1084 0.5C8.38352 0.492475 8.68162 0.64456 8.92188 0.945312C9.16164 1.24555 9.29448 1.63711 9.27148 1.9873L9.27051 1.99219L9.08398 5.4541L9.05566 5.98145H13.4199L13.541 5.98828C13.6619 6.00288 13.7801 6.0393 13.8906 6.0957C14.038 6.1709 14.1683 6.28067 14.2705 6.41797C14.3728 6.55534 14.4438 6.71636 14.4775 6.88867C14.5112 7.06098 14.507 7.23933 14.4639 7.40918L14.4629 7.41016L12.9834 13.3008C12.8969 13.6459 12.7036 13.9494 12.4365 14.165C12.1698 14.3804 11.8437 14.4968 11.5098 14.5H4.4082V5.98145H5.78125L5.90527 5.66406L7.72266 1.04883L7.72461 1.04492C7.78991 0.87503 7.87341 0.714932 7.96387 0.606445C8.00773 0.553863 8.04387 0.525547 8.06738 0.511719C8.08533 0.501192 8.09287 0.499975 8.09473 0.5V0.500977L8.1084 0.5Z" stroke="#7B869B" />
                          </svg>
                        </Box>

                        {/* More Icon */}
                        <Box sx={{ ml: '28px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_239_26721)">
                              <circle cx="5" cy="11" r="2" fill="#7B869B" />
                              <circle cx="11" cy="11" r="2" fill="#7B869B" />
                              <circle cx="17" cy="11" r="2" fill="#7B869B" />
                            </g>
                            <defs>
                              <clipPath id="clip0_239_26721">
                                <rect width="16" height="4" fill="white" transform="translate(3 9)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>

            {/* Right Side Bar - Starts with Bot Response */}
            <Box sx={{
              width: '292px',
              flexShrink: 0,
              height: 'fit-content',
              position: 'sticky',
              top: '100px', // Adjusted to ensure it stays below the sticky/fixed navbar
              alignSelf: 'flex-start',
              zIndex: 10
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
                  height: '146px',
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
                      'Revenue expenditure'
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
          bottom: 0,
          left: { xs: 0, md: isSidebarCollapsed ? '72px' : '200px' },
          right: 0,
          backgroundColor: '#FEFEFE',
          pt: '10px',
          pb: '20px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          pl: '112px'
        }}>
          <Paper sx={{
            width: '828px',
            height: '104px',
            p: '12px',
            borderRadius: '12px',
            border: '1px solid #CBD9E1',
            boxShadow: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#FAFAFA',
            boxSizing: 'border-box'
          }}>
            <TextField
              fullWidth
              placeholder="Ask a follow up.."
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  fontSize: '15px',
                  '&:before': { display: 'none' },
                  '&:after': { display: 'none' },
                  '&:hover:not(.Mui-disabled):before': { display: 'none' }
                }
              }}
              multiline
              maxRows={4}
              sx={{
                '& .MuiInput-underline:before': { borderBottom: 'none' },
                '& .MuiInput-underline:after': { borderBottom: 'none' },
                '& .MuiInput-root:hover:not(.Mui-disabled):before': { borderBottom: 'none' }
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Stack direction="row" spacing={1}>
                <Button size="small" startIcon={<MenuBookIcon sx={{ fontSize: 18 }} />} sx={{ textTransform: 'none', color: '#7A7A7A', fontSize: '13px' }}>Learn</Button>
                <Button size="small" startIcon={<BorderColorIcon sx={{ fontSize: 18 }} />} sx={{ textTransform: 'none', color: '#7A7A7A', fontSize: '13px' }}>Practice</Button>
                <Button size="small" startIcon={<AddIcon sx={{ fontSize: 18 }} />} sx={{ textTransform: 'none', color: '#7A7A7A', fontSize: '13px' }}>Attach</Button>
              </Stack>
              <IconButton sx={{ 
                bgcolor: '#32B2DD', 
                color: 'white', 
                width: 36, 
                height: 36,
                '&:hover': { bgcolor: '#2A99BD' } 
              }}>
                <SendIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
          </Paper>
          <Typography sx={{ 
            fontFamily: "'Source Sans 3', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '0.02em',
            color: '#7A7A7A',
            mt: 1,
            textAlign: 'center',
            width: '828px'
          }}>
            Mntor can make mistakes. Check important info before proceeding.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatResponse;
