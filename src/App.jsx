import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Dashboard from './pages/Dashboard';
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
          <Dashboard />
        </Box>
      )}
    </Box>
  );
}

export default App;
