import React from 'react';
import { Box, Paper, Stack, Typography, Button } from '@mui/material';

const StatCards = () => {
  return (
    <Box sx={{
      mt: '9px',
      display: 'flex',
      gap: '16px',
      flexWrap: 'nowrap',
      overflowX: { xs: 'auto', md: 'visible' },
      pb: { xs: 1, md: 0 }
    }}>
      {/* Card 1: Start Learning */}
      <Paper
        sx={{
          width: '242px',
          height: '262px',
          borderRadius: '9.26px',
          border: '1.07px solid #E1E7EA',
          backgroundColor: '#F0F7FF',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          px: '16px',
          py: '20px',
          boxSizing: 'border-box'
        }}
      >
        {/* Title Section */}
        <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: '33.36px', gap: '8px' }}>
          <Box component="svg" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.57059 11.4094L7.42746 5.28348H8.56694L10.4238 11.4094L15.9944 13.4514V14.7045L10.4238 16.7465L8.56694 22.8725H7.42746L5.57059 16.7465L0 14.7045V13.4514L5.57059 11.4094Z" fill="#37A7D5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.0804 3.15401L17.0364 0H18.1759L19.1319 3.15401L22 4.20535V5.45844L19.1319 6.50977L18.1759 9.66379H17.0364L16.0804 6.50977L13.2123 5.45844V4.20535L16.0804 3.15401Z" fill="#37A7D5" />
          </Box>
          <Typography sx={{
            color: '#312F2F',
            fontSize: '16px',
            fontWeight: 550,
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '-3%',
            lineHeight: '100%',
            position: "relative",
            top: "5px"
          }}>
            Start Learning
          </Typography>
        </Stack>

        {/* Topic Section */}
        <Box sx={{ mb: 1 }}>
          <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center', mb: '14px' }}>
            <Box component="svg" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M10.8322 19.9125C15.8309 19.9125 19.8832 15.8602 19.8832 10.8615C19.8832 5.86281 15.8309 1.81055 10.8322 1.81055C5.83351 1.81055 1.78125 5.86281 1.78125 10.8615C1.78125 15.8602 5.83351 19.9125 10.8322 19.9125Z" fill="#37A7D5" fillOpacity="0.33" />
              <path d="M13.5494 9.25951L10.9246 7.748C10.2729 7.36786 9.4855 7.36786 8.83383 7.748C8.18216 8.12814 7.79297 8.79791 7.79297 9.55819V12.5903C7.79297 13.3415 8.18216 14.0203 8.83383 14.4005C9.15967 14.5905 9.52171 14.681 9.87469 14.681C10.2367 14.681 10.5897 14.5905 10.9156 14.4005L13.5403 12.8889C14.192 12.5088 14.5812 11.839 14.5812 11.0788C14.5993 10.3185 14.2101 9.63965 13.5494 9.25951Z" fill="#37A7D5" />
            </Box>
            <Typography sx={{
              color: '#312F2F',
              fontSize: '14.68px',
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '-3%',
              lineHeight: '100%',
              position: 'relative',
              top: '4px'
            }}>
              Topic 1
            </Typography>
          </Stack>

          <Typography sx={{
            color: 'rgba(26, 26, 26, 0.65)',
            fontSize: '13px',
            fontWeight: 400,
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '130%',
            maxWidth: '210px'
          }}>
            Development of the Mughal Empire, Babur, Reasons for Conquest of India
          </Typography>
        </Box>

        {/* Action Button */}
        <Box sx={{ mt: '23px', display: 'flex', justifyContent: 'center', ml: '-10px' }}>
          <Button
            variant="contained"
            sx={{
              width: '198px',
              height: '47px',
              backgroundColor: '#37A7D5',
              borderRadius: '8px',
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: '26px',
              letterSpacing: '0px',
              color: '#FFFFFF',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#2E8CAD',
                boxShadow: 'none'
              }
            }}
          >
            Start Learning
          </Button>
        </Box>
      </Paper>

      {/* Card 2: Plan with Syllabus */}
      <Paper
        sx={{
          width: '248px',
          height: '262px',
          borderRadius: '9.26px',
          border: '1.07px solid #E5EDFF',
          backgroundColor: '#FFFBF4',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          px: '16px',
          py: '14px',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Blur Glow */}
        <Box
          sx={{
            width: '358.61px',
            height: '358.61px',
            backgroundColor: '#FFD4BC',
            opacity: 0.29,
            filter: 'blur(63.5px)',
            borderRadius: '50%',
            position: 'absolute',
            top: '105px',
            left: '-33.13px',
            zIndex: 0
          }}
        />

        {/* Title Section */}
        <Stack direction="row" alignItems="center" sx={{ mb: '14px', gap: '12px', position: 'relative', zIndex: 1 }}>
          <Box component="svg" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.877 3.7996V2.13451C17.877 1.69689 17.5141 1.33398 17.0765 1.33398C16.6389 1.33398 16.276 1.69689 16.276 2.13451V3.73556H9.3381V2.13451C9.3381 1.69689 8.97519 1.33398 8.53757 1.33398C8.09995 1.33398 7.73705 1.69689 7.73705 2.13451V3.7996C4.85516 4.06644 3.45691 5.78491 3.24343 8.33591C3.22209 8.64545 3.47825 8.90162 3.77712 8.90162H21.837C22.1465 8.90162 22.4027 8.63478 22.3707 8.33591C22.1572 5.78491 20.7589 4.06644 17.877 3.7996Z" fill="#5E7DC0" />
            <path d="M21.3484 10.502H4.27049C3.68344 10.502 3.20312 10.9823 3.20312 11.5693V18.1443C3.20312 21.3464 4.80418 23.4811 8.53996 23.4811H13.8021C14.5386 23.4811 15.0509 22.766 14.8161 22.0722C14.6026 21.4531 14.4212 20.77 14.4212 20.279C14.4212 17.0449 17.0576 14.4085 20.2917 14.4085C20.6012 14.4085 20.9107 14.4299 21.2096 14.4832C21.85 14.5793 22.4264 14.0776 22.4264 13.4372V11.58C22.4157 10.9823 21.9354 10.502 21.3484 10.502ZM9.83148 18.9021C9.72474 18.9982 9.60733 19.0729 9.47924 19.1263C9.35116 19.1796 9.2124 19.2117 9.07364 19.2117C8.93489 19.2117 8.79613 19.1796 8.66805 19.1263C8.53996 19.0729 8.42255 18.9982 8.31581 18.9021C8.12369 18.6993 8.00628 18.4218 8.00628 18.1443C8.00628 18.0803 8.01695 18.0055 8.02762 17.9415C8.0383 17.8668 8.05965 17.8027 8.09167 17.7387C8.11301 17.6747 8.14504 17.6106 8.18773 17.5466C8.21975 17.4932 8.27312 17.4398 8.31581 17.3865C8.42255 17.2904 8.53996 17.2157 8.66805 17.1623C8.92421 17.0556 9.22308 17.0556 9.47924 17.1623C9.60733 17.2157 9.72474 17.2904 9.83148 17.3865C9.87417 17.4398 9.92754 17.4932 9.95956 17.5466C10.0023 17.6106 10.0343 17.6747 10.0556 17.7387C10.0876 17.8027 10.109 17.8668 10.1197 17.9415C10.1303 18.0055 10.141 18.0803 10.141 18.1443C10.141 18.4218 10.0236 18.6993 9.83148 18.9021ZM9.83148 15.1663C9.72474 15.2624 9.60733 15.3371 9.47924 15.3905C9.35116 15.4439 9.2124 15.4759 9.07364 15.4759C8.93489 15.4759 8.79613 15.4439 8.66805 15.3905C8.52929 15.3371 8.42255 15.2624 8.31581 15.1663C8.12369 14.9635 8.00628 14.686 8.00628 14.4085C8.00628 14.131 8.12369 13.8535 8.31581 13.6507C8.42255 13.5546 8.53996 13.4799 8.66805 13.4265C8.92421 13.3198 9.22308 13.3198 9.47924 13.4265C9.60733 13.4799 9.72474 13.5546 9.83148 13.6507C9.87417 13.7041 9.92754 13.7574 9.95956 13.8108C10.0023 13.8748 10.0343 13.9389 10.0556 14.0029C10.0876 14.067 10.109 14.131 10.1197 14.195C10.1303 14.2698 10.141 14.3445 10.141 14.4085C10.141 14.686 10.0236 14.9635 9.83148 15.1663ZM13.5673 15.1663C13.3645 15.3585 13.0976 15.4759 12.8094 15.4759C12.6707 15.4759 12.5319 15.4439 12.4038 15.3905C12.2651 15.3371 12.1583 15.2624 12.0516 15.1663C11.8595 14.9635 11.7421 14.686 11.7421 14.4085C11.7421 14.3445 11.7527 14.2698 11.7634 14.195C11.7741 14.131 11.7954 14.067 11.8275 14.0029C11.8488 13.9389 11.8808 13.8748 11.9235 13.8108C11.9662 13.7574 12.0089 13.7041 12.0516 13.6507C12.4465 13.2558 13.1617 13.2558 13.5673 13.6507C13.61 13.7041 13.6526 13.7574 13.6953 13.8108C13.738 13.8748 13.7701 13.9389 13.7914 14.0029C13.8234 14.067 13.8448 14.131 13.8554 14.195C13.8661 14.2698 13.8768 14.3445 13.8768 14.4085C13.8768 14.686 13.7594 14.9635 13.5673 15.1663Z" fill="#5E7DC0" />
            <path d="M23.3018 17.2586C21.6367 15.5935 18.9256 15.5935 17.2605 17.2586C15.5954 18.9237 15.5954 21.6348 17.2605 23.2999C18.9256 24.965 21.6367 24.965 23.3018 23.2999C24.9669 21.6348 24.9669 18.9237 23.3018 17.2586ZM22.4906 20.877C22.3519 21.0264 22.1491 21.1118 21.9249 21.1118H21.1351V21.9443C21.1351 22.1685 21.0497 22.3606 20.9003 22.51C20.7508 22.6595 20.5587 22.7449 20.3346 22.7449C19.8969 22.7449 19.534 22.3819 19.534 21.9443V21.1118H18.7335C18.2959 21.1118 17.933 20.7596 17.933 20.3113C17.933 19.8736 18.2959 19.5107 18.7335 19.5107H19.534V18.7529C19.534 18.3153 19.8863 17.9524 20.3346 17.9524C20.7722 17.9524 21.1351 18.3153 21.1351 18.7529V19.5107H21.9249C22.3732 19.5107 22.7255 19.8736 22.7255 20.3113C22.7255 20.5354 22.6401 20.7382 22.4906 20.877Z" fill="#5E7DC0" />
          </Box>
          <Typography sx={{
            color: '#312F2F',
            fontSize: '16px',
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '-3%',
            lineHeight: '100%',
            position: 'relative',
            top: '5px'
          }}>
            Plan with Syllabus
          </Typography>
        </Stack>

        {/* Subtitle */}
        <Typography sx={{
          color: 'rgba(26, 26, 26, 0.65)',
          fontSize: '13px',
          fontWeight: 500,
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '130%',
          mb: 1,
          position: 'relative',
          zIndex: 1,
          left: '5px'
        }}>
          Your syllabus progress will appear here once you start learning.
        </Typography>

        {/* Floating Icons */}
        <Box
          component="img"
          src="/dashboard/card-2-brain.svg"
          sx={{
            width: '29.39px',
            height: '29.39px',
            position: 'absolute',
            top: '94.31px',
            left: '33.11px',
            zIndex: 1
          }}
        />
        <Box
          component="img"
          src="/dashboard/card-2-timer.svg"
          sx={{
            width: '29.39px',
            height: '29.39px',
            position: 'absolute',
            top: '83.96px',
            left: '191.51px',
            zIndex: 1
          }}
        />
        <Box
          component="img"
          src="/dashboard/card-2-star.svg"
          sx={{
            width: '29.39px',
            height: '29.39px',
            position: 'absolute',
            top: '181.09px',
            left: '17.61px',
            zIndex: 1
          }}
        />
        <Box
          component="img"
          src="/dashboard/card-2-bookstack.svg"
          sx={{
            width: '28.28px',
            height: '28.28px',
            position: 'absolute',
            top: '171.15px',
            left: '199.52px',
            zIndex: 1
          }}
        />

        {/* Girl Image */}
        <Box
          component="img"
          src="/dashboard/girl.png"
          sx={{
            width: '127px',
            height: '179.27px',
            position: 'absolute',
            top: '89.14px',
            left: '67.5px',
            zIndex: 0
          }}
        />

        {/* Action Button */}
        <Button
          variant="contained"
          sx={{
            width: '198px',
            height: '36px',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 550,
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '26px',
            letterSpacing: '0px',
            color: '#2A2A2A',
            boxShadow: 'none',
            position: 'absolute',
            top: '205px',
            left: '21.39px',
            zIndex: 1,
            '&:hover': {
              backgroundColor: '#F8FAFB',
              boxShadow: 'none'
            }
          }}
        >
          View Syllabus
        </Button>
      </Paper>

      {/* Card 3: Plan My study */}
      <Paper
        sx={{
          width: '242px',
          height: '262px',
          borderRadius: '9.26px',
          border: '1.07px solid #FFE5F6',
          backgroundColor: '#FFF4FB',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          px: '16px',
          py: '14px',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Title Section */}
        <Stack direction="row" alignItems="center" sx={{ mt: '6px', mb: 3, gap: '10px' }}>
          <Box component="svg" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18.6801" cy="18.6782" r="2.66842" stroke="#9F355A" strokeWidth="2.13473" />
            <path d="M22.4175 22.4136L20.8164 20.8125" stroke="#9F355A" strokeWidth="2.13473" strokeLinecap="round" />
            <path d="M12.8086 2.13477C16.8338 2.13477 18.8462 2.13526 20.0967 3.38574C21.3471 4.63625 21.3477 6.64867 21.3477 10.6738V14.0586C20.5624 13.6041 19.6513 13.3428 18.6787 13.3428C15.7316 13.343 13.343 15.7316 13.3428 18.6787C13.3429 20.7525 14.5262 22.5483 16.2539 23.4316C15.3039 23.4802 14.1717 23.4824 12.8086 23.4824C8.78347 23.4824 6.77102 23.4818 5.52051 22.2314C4.27003 20.981 4.26953 18.9685 4.26953 14.9434V10.6738C4.26953 6.64854 4.27001 4.63624 5.52051 3.38574C6.77101 2.13524 8.7833 2.13477 12.8086 2.13477ZM8.53906 13.876C7.94957 13.876 7.47168 14.3539 7.47168 14.9434C7.47178 15.5328 7.94963 16.0107 8.53906 16.0107H11.7412C12.3306 16.0107 12.8085 15.5327 12.8086 14.9434C12.8086 14.3539 12.3307 13.876 11.7412 13.876H8.53906ZM8.53906 9.60645C7.94957 9.60645 7.47168 10.0843 7.47168 10.6738C7.47175 11.2633 7.94961 11.7412 8.53906 11.7412H14.9434C15.5327 11.7411 16.0107 11.2632 16.0107 10.6738C16.0107 10.0844 15.5328 9.60653 14.9434 9.60645H8.53906ZM8.53906 5.33691C7.94957 5.33691 7.47168 5.81481 7.47168 6.4043C7.47171 6.99376 7.94959 7.47168 8.53906 7.47168H12.8086C13.398 7.47161 13.8759 6.99372 13.876 6.4043C13.876 5.81485 13.398 5.33698 12.8086 5.33691H8.53906Z" fill="#9F355A" />
          </Box>
          <Typography sx={{
            color: '#312F2F',
            fontSize: '16px',
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '-3%',
            lineHeight: '100%',
            width: '103px',
            position: 'relative',
            top: '5px',
            left: '-5px'
          }}>
            Plan My study
          </Typography>
        </Stack>

        {/* Feature Row */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
          <Box component="svg" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M10.8322 19.9125C15.8309 19.9125 19.8832 15.8602 19.8832 10.8615C19.8832 5.86281 15.8309 1.81055 10.8322 1.81055C5.83351 1.81055 1.78125 5.86281 1.78125 10.8615C1.78125 15.8602 5.83351 19.9125 10.8322 19.9125Z" fill="#9F355A" />
            <path d="M13.5494 9.25951L10.9246 7.748C10.2729 7.36786 9.4855 7.36786 8.83383 7.748C8.18216 8.12814 7.79297 8.79791 7.79297 9.55819V12.5903C7.79297 13.3415 8.18216 14.0203 8.83383 14.4005C9.15967 14.5905 9.52171 14.681 9.87469 14.681C10.2367 14.681 10.5897 14.5905 10.9156 14.4005L13.5403 12.8889C14.192 12.5088 14.5812 11.839 14.5812 11.0788C14.5993 10.3185 14.2101 9.63965 13.5494 9.25951Z" fill="#9F355A" />
          </Box>
          <Typography sx={{
            color: '#9F355A',
            fontSize: '16.61px',
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '-3%',
            lineHeight: '100%',
            width: '169px',
            position: 'relative',
            top: '3px'
          }}>
            Trial Attempt Plannner
          </Typography>
        </Stack>

        {/* Description */}
        <Typography sx={{
          color: 'rgba(26, 26, 26, 0.65)',
          fontSize: '13px',
          fontWeight: 400,
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '100%',
          width: '220px',
          position: 'absolute',
          top: '103px',
          left: '22px',
          zIndex: 1
        }}>
          Helps you get started on how to organize your prep schedule.
        </Typography>

        {/* Action Button */}
        <Button
          variant="contained"
          sx={{
            width: '198px',
            height: '36px',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 550,
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '26px',
            letterSpacing: '0px',
            color: '#2A2A2A',
            boxShadow: 'none',
            position: 'absolute',
            top: '205px',
            left: '21.39px',
            zIndex: 1,
            '&:hover': {
              backgroundColor: '#F8FAFB',
              boxShadow: 'none'
            }
          }}
        >
          Try study Planner
        </Button>
      </Paper>
    </Box>
  );
};

export default StatCards;
