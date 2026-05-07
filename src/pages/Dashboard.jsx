import React, { useState } from 'react';
import { Box, Container, Drawer } from '@mui/material';
import SideMenu from '../components/layout/SideMenu';
import TopNavBar from '../components/layout/TopNavBar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardTabs from '../components/dashboard/DashboardTabs';
import StatCards from '../components/dashboard/StatCards';
import StartLearningCard from '../components/dashboard/StartLearningCard';
import AskAnything from '../components/dashboard/AskAnything';
import CurrentAffairs from '../components/dashboard/CurrentAffairs';

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

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
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
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
        transition: 'margin-left 0.3s ease-in-out'
      }}>
        <TopNavBar onMenuToggle={handleDrawerToggle} isCollapsed={isSidebarCollapsed} />
        <Box sx={{ p: { xs: 2, md: 4 }, pt: { xs: 10, md: 12 } }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
            {/* Header Section: Greeting + Stats + Banners */}
            <DashboardHeader />

            {/* Main Content Layout: Tabs + Cards on Left, Start Learning with on Right */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '87px' }}>
              {/* Left Column: Tabs and 3 Cards */}
              <Box sx={{ flex: 1 }}>
                <DashboardTabs />
                <StatCards />
              </Box>

              {/* Right Column: Card 4 (Aligned with Tabs row) */}
              <StartLearningCard />
            </Box>

            {/* Bottom Section: Ask Anything */}
            <AskAnything />

            {/* Current Affairs Section */}
            <CurrentAffairs />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
