import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton, Stack, Paper, Slider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const AudioPlayerCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const audioSrc = "/music/(Audio) कदाचित्कालिन्दी तटविपिनसंगीत करबो.m4a";

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error("Playback error:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (event, newValue) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: '363px',
        height: '306px',
        borderRadius: '12px',
        p: 3,
        background: 'linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 100%) padding-box, linear-gradient(180deg, #F1F1F1 0%, #E5E5E5 50%, #F1F1F1 100%) border-box',
        border: '1px solid transparent',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box'
      }}
    >
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        onTimeUpdate={handleTimeUpdate} 
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#2A2A2A', fontFamily: "'DM Sans', sans-serif" }}>
            Sapthahik Samachar
          </Typography>
          <Typography sx={{ fontSize: '13px', color: '#696E75', fontFamily: "'DM Sans', sans-serif" }}>
            Daily News Summary
          </Typography>
        </Box>
        {/* Top Right Icons */}
        <Stack 
          sx={{ 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '93px',
            height: '42px',
            backgroundImage: 'url(/dashboard/toprightcontainer.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            boxSizing: 'border-box',
            mr: -1, 
            gap: '11.4px'
          }}
        >
          <IconButton 
            size="small" 
            disableRipple
            sx={{ 
              color: '#2A2A2A', 
              p: 0, 
              width: '47px', 
              height: '35px',
              '&:hover': { backgroundColor: 'transparent', opacity: 0.8 },
              '&:active': { transform: 'scale(0.95)', opacity: 0.6 },
              transition: 'transform 0.1s ease-in-out, opacity 0.1s ease-in-out'
            }}
          >
            <Box component="img" src="/dashboard/playbtn.svg" sx={{ width: '100%', height: '100%' }} />
          </IconButton>
         
          <IconButton 
            size="small" 
            disableRipple
            sx={{ 
              color: '#2A2A2A', 
              p: 0.5,
              '&:hover': { backgroundColor: 'transparent', opacity: 0.7 },
              '&:active': { transform: 'scale(0.95)', opacity: 0.5 },
              transition: 'transform 0.1s ease-in-out, opacity 0.1s ease-in-out',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box component="img" src="/dashboard/righ2-icon.svg" sx={{ width: '16px', height: '16px' }} />
          </IconButton>
        </Stack>
      </Box>

      {/* Visualizer/Background Area */}
      <Box
        sx={{
          width: '328px',
          height: '90px',
          borderRadius: '5px',
          p: '8px 16px',
          mb: 2,
          background: 'linear-gradient(180deg, #475259 0%, #777E81 100%) padding-box, linear-gradient(180deg, #363636 0%, #999999 50%, #363636 100%) border-box',
          border: '2px solid transparent',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          boxShadow: 'inset 0px 5px 4px 0px rgba(0, 0, 0, 0.33), inset 0px -3px 2px 0px #6E7A80',
          boxSizing: 'border-box',
          mx: 'auto'
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
          <Box sx={{ display: 'flex', gap: '2px' }}>
            {[1, 2, 3, 4].map(i => <Box key={i} sx={{ width: '2px', height: i * 3, backgroundColor: '#FFFFFF', opacity: 0.6 }} />)}
          </Box>
          <Typography sx={{
            color: '#7E898E',
            fontSize: '12px',
            fontFamily: "'Pixelify Sans', sans-serif",
            fontWeight: 400,
            lineHeight: '120%',
            letterSpacing: '-0.03em',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            top:'-1px' ,
            right:'2px' 
          }}>
            Now Playing
          </Typography>
        </Stack>
        <Typography sx={{ 
          color: '#BABEC0', 
          fontSize: '14px', 
          fontWeight: 400, 
          mb: 1, 
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '110%',
          letterSpacing: '0.03em',
          width: '132px',
          height: '15px',
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          position: 'relative',
          top:'-4px' 
        }}>
          August 14 - Week 3
        </Typography>

        <Slider
          size="small"
          value={currentTime}
          max={duration || 100}
          onChange={handleSeek}
          sx={{
            color: '#FFFFFF',
            height: 4,
            p: 0,
            mb: 1,
            '& .MuiSlider-thumb': {
              width: 12,
              height: 12,
              backgroundColor: '#FFFFFF',
              '&:before': { display: 'none' },
            },
            '& .MuiSlider-track': { border: 'none' },
            '& .MuiSlider-rail': { opacity: 0.2, backgroundColor: '#FFFFFF' },
          }}
        />

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          width: '100%',
          mt: 0.5
        }}>
          <Typography sx={{
            color: '#FFFFFF',
            fontSize: '12px',
            fontFamily: "'Pixelify Sans', sans-serif",
            fontWeight: 400,
            lineHeight: '120%',
            letterSpacing: '-0.03em',
            opacity: 0.7,
            whiteSpace: 'nowrap'
          }}>
            {formatTime(currentTime)}
          </Typography>
          <Typography sx={{
            color: '#FFFFFF',
            fontSize: '12px',
            fontFamily: "'Pixelify Sans', sans-serif",
            fontWeight: 400,
            lineHeight: '120%',
            letterSpacing: '-0.03em',
            opacity: 0.7,
            whiteSpace: 'nowrap'
          }}>
            {formatTime(duration)}
          </Typography>
        </Box>
      </Box>

      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '24px', 
          mt: 'auto',
          height: '72px' 
        }}
      >
        <IconButton
          sx={{ width: '40px', height: '40px', p: 0, '&:hover': { opacity: 0.8 } }}
          onClick={() => {
            if (audioRef.current) audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
          }}
        >
          <Box component="img" src="/dashboard/backward.svg" sx={{ width: '100%', height: '100%' }} />
        </IconButton>
        
        <IconButton
          onClick={() => setIsPlaying(!isPlaying)}
          sx={{ width: '67.5px', height: '67.5px', p: 0, position: 'relative', '&:hover': { opacity: 0.95 } }}
        >
          <Box
            component="img"
            src="/dashboard/PAUS.svg"
            sx={{
              position: 'absolute', width: '100%', height: '100%',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isPlaying ? 1 : 0,
              transform: isPlaying ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-90deg)',
              pointerEvents: 'none'
            }}
          />
          <Box
            component="img"
            src="/PLAY.svg"
            sx={{
              position: 'absolute', width: '100%', height: '100%',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isPlaying ? 0 : 1,
              transform: isPlaying ? 'scale(0.8) rotate(90deg)' : 'scale(1) rotate(0deg)',
              pointerEvents: 'none'
            }}
          />
        </IconButton>
        
        <IconButton
          sx={{ width: '40px', height: '40px', p: 0, '&:hover': { opacity: 0.8 } }}
          onClick={() => {
            if (audioRef.current) audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
          }}
        >
          <Box component="img" src="/dashboard/forward.svg" sx={{ width: '100%', height: '100%' }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default AudioPlayerCard;
