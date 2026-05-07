import React, { useState } from 'react';
import { Box, Stack, Button, Typography } from '@mui/material';

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('Learn & Track');

  const tabs = [
    { label: 'Learn & Track', width: '198px' },
    { label: 'Practice', width: '119px' },
    { label: 'Revise', width: '119px' }
  ];

  return (
    <Stack direction="row" sx={{ mb: 4, position: 'relative', gap: '9px' }}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;

        return (
          <Box 
            key={tab.label}
            sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Button
              onClick={() => setActiveTab(tab.label)}
              sx={{
                width: tab.width,
                height: '43px',
                backgroundColor: isActive ? '#E4ECEF' : '#FFFFFF',
                borderRadius: '12px',
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: isActive ? 'none' : '1px solid #E1E7EA',
                borderBottom: isActive ? '2px solid #37A7D5' : '1px solid #E1E7EA',
                boxShadow: 'none',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: isActive ? '#D9E4E8' : '#F8FAFB',
                  borderColor: '#D9E4E8'
                }
              }}
            >
              <Typography sx={{ 
                color: '#2A2A2A', 
                fontSize: '16px', 
                fontWeight: isActive ? 600 : 400, 
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '-2%',
                lineHeight: '100%'
              }}>
                {tab.label}
              </Typography>
            </Button>
            
            {/* Active Indicator Triangle */}
            {isActive && (
              <Box
                sx={{
                  width: 0,
                  height: 0,
                  borderLeft: '6.5px solid transparent',
                  borderRight: '6.5px solid transparent',
                  borderTop: '8px solid #37A7D5',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 2
                }}
              />
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default DashboardTabs;
