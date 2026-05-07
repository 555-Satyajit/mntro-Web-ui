import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Dashboard from './pages/Dashboard';
import ChatResponse from './pages/Chat_response';
import LoadingScreen from './components/common/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Box className="App" sx={{ minHeight: '100vh', width: '100%', overflowY: 'auto' }}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <Box sx={{ 
            animation: 'fadeIn 0.8s ease-in-out',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 }
            }
          }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/chat" element={<ChatResponse />} />
            </Routes>
          </Box>
        )}
      </Box>
    </Router>
  );
}

export default App;
