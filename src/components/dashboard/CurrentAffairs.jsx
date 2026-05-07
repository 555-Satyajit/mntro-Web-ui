import React from 'react';
import { Box, Typography, Stack, Button, IconButton, Paper, Grid } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AudioPlayerCard from './AudioPlayerCard';

const ArticleCard = ({ image, categories, title, description, date }) => (
  <Paper
    elevation={0}
    sx={{
      width: '100%',
      maxWidth: '276px',
      height: '306px',
      borderRadius: '12px',
      border: '1px solid #F1F1F1',
      overflow: 'hidden',
      backgroundColor: '#FEFEFE',
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0px 10px 20px rgba(0,0,0,0.08)'
      },
      '&:active': {
        transform: 'translateY(-2px) scale(0.98)'
      }
    }}
  >
    {/* Image Section */}
    <Box 
      sx={{ 
        width: '100%', 
        height: '160px', 
        minHeight: '160px',
        maxHeight: '160px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {image ? (
        <Box 
          component="img" 
          src={image} 
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
      ) : (
        <Box 
          component="img" 
          src="/dashboard/error-image.png" 
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
      )}
    </Box>

    {/* Content Section */}
    <Box sx={{ p: 2 }}>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        {categories.map((cat, index) => (
          <Box 
            key={index}
            sx={{ 
              backgroundColor: '#F7FAFD',
              borderRadius: '2px',
              height: '21px',
              px: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography 
              sx={{ 
                fontSize: '12px', 
                fontWeight: 500,
                color: '#888E9D', 
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: '100%',
                letterSpacing: '-3%'
              }}
            >
              {cat}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Typography 
        sx={{ 
          fontSize: '16px', 
          fontWeight: 600, 
          color: '#2A2A2A', 
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '22px',
          letterSpacing: '-2%',
          width: '248.25px',
          height: '22px',
          mb: 1,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical'
        }}
      >
        {title}
      </Typography>
      <Typography 
        sx={{ 
          fontSize: '14px', 
          fontWeight: 400,
          color: '#696E75', 
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '120%',
          letterSpacing: '-3%',
          width: '248.25px',
          height: '34px',
          mb: '10.13px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}
      >
        {description}
      </Typography>
      <Typography 
        sx={{ 
          fontSize: '12px', 
          fontWeight: 400,
          color: '#A3A4A6', 
          textAlign: 'right',
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: '120%',
          letterSpacing: '-3%',
          width: '100%',
          height: '14px'
        }}
      >
        {date}
      </Typography>
    </Box>
  </Paper>
);


const CurrentAffairs = () => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 5); // Threshold of 5px
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  React.useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons);
      // Initial check
      updateScrollButtons();
      return () => el.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ mt: '46px', width: '100%' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '300px', mb: '19px' }}>
        <Box>
          <Typography sx={{ 
            fontSize: '20px', 
            fontWeight: 600, 
            color: '#2A2A2A', 
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '100%',
            letterSpacing: '-3%',
            width: '311px',
            height: '26px',
            mb: 1
          }}>
            Stay Updated With Current Affairs
          </Typography>
          <Typography sx={{ 
            fontSize: '16px', 
            fontWeight: 400,
            color: '#696E75', 
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: '120%',
            letterSpacing: '-3%',
            width: '387px',
            height: '19px'
          }}>
            Curated daily updates and analysis to stay exam-ready.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack direction="row">
            <IconButton 
              size="small" 
              disabled={!canScrollLeft}
              onClick={() => scroll('left')}
              sx={{ color: canScrollLeft ? '#37A7D5' : '#D4D6E1 !important' }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton 
              size="small" 
              disabled={!canScrollRight}
              onClick={() => scroll('right')}
              sx={{ color: canScrollRight ? '#37A7D5' : '#D4D6E1 !important' }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Stack>
          <Button 
            variant="contained" 
            sx={{ 
              textTransform: 'none', 
              borderRadius: '10px', 
              backgroundColor: '#ECFBFF', 
              color: '#37A7D5',
              boxShadow: 'none',
              height: '34px',
              minWidth: '82px',
              px: '16px',
              py: '8px',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: '100%',
              letterSpacing: '0%',
              '&:hover': { 
                backgroundColor: '#D6F4FF', 
                boxShadow: 'none' 
              }
            }}
          >
            View all
          </Button>
        </Stack>
      </Box>

      {/* Filters */}
      <Stack direction="row" spacing="8px" sx={{ mb: '19px' }}>
        <Button 
          sx={{ 
            textTransform: 'none', 
            borderRadius: '16px', 
            backgroundColor: '#D4D6E1', 
            color: '#2A2A2A',
            fontSize: '12px',
            fontWeight: 530,
            fontFamily: "'DM Sans', sans-serif",
            height: '26px',
            px: '12px',
            py: '6px',
            lineHeight: '100%',
            letterSpacing: '0%',
            minWidth: 'auto',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#C5C7D2',
              boxShadow: 'none'
            }
          }}
        >
          Trending this week
        </Button>
        <Button 
          variant="outlined"
          sx={{ 
            textTransform: 'none', 
            borderRadius: '16px', 
            borderColor: '#E1E7EA', 
            backgroundColor: '#FAFAFA',
            color: '#2A2A2A',
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: "'DM Sans', sans-serif",
            height: '26px',
            px: '12px',
            py: '6px',
            lineHeight: '100%',
            letterSpacing: '0%',
            minWidth: 'auto',
            '&:hover': {
              borderColor: '#D4D6E1',
              backgroundColor: '#F5F5F5'
            }
          }}
        >
          Last week
        </Button>
        <Button 
          variant="outlined"
          sx={{ 
            textTransform: 'none', 
            borderRadius: '16px', 
            borderColor: '#E1E7EA', 
            backgroundColor: '#FAFAFA',
            color: '#2A2A2A',
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: "'DM Sans', sans-serif",
            height: '26px',
            px: '12px',
            py: '6px',
            lineHeight: '100%',
            letterSpacing: '0%',
            minWidth: 'auto',
            '&:hover': {
              borderColor: '#D4D6E1',
              backgroundColor: '#F5F5F5'
            }
          }}
        >
          National Budget
        </Button>
      </Stack>

      {/* Main Content: News Carousel + Audio Player */}
      <Box sx={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <Box 
          ref={carouselRef}
          sx={{ 
            display: 'flex', 
            gap: '16px', 
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            maxWidth: '860px',
            width: '100%',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            pb: 1
          }}
        >
          {[
            {
              categories: ['Polity', 'Economy'],
              title: "India's GDP Growth at 7.2% in Q1",
              description: "The National Statistical Office reported India's economy grew at 7.2% in the firs...",
              date: "Aug 13"
            },
            {
              image: "/dashboard/2ndcardimg.png",
              categories: ['Polity'],
              title: "Supreme Court Upholds Right t...",
              description: "In a landmark ruling, the SC reaffirmed that digital data sharing by state agenci...",
              date: "Aug 13"
            },
            {
              image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
              categories: ['International Relations', 'Environment'],
              title: "India Signs Green Energy Pact w...",
              description: "India and the European Union signed an agreement to collaborate on renewable...",
              date: "Aug 13"
            },
            {
              categories: ['Science', 'Technology'],
              title: "ISRO's Next Moon Mission Plan...",
              description: "The space agency announced details for the upcoming lunar exploration mission...",
              date: "Aug 14"
            },
            {
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
              categories: ['Economy'],
              title: "Stock Market Reaches New Highs",
              description: "Nifty and Sensex closed at record levels today following positive global cues...",
              date: "Aug 15"
            },
            {
              categories: ['Social Issues', 'Polity'],
              title: "New Education Policy Updates",
              description: "The Ministry of Education released a new framework for vocational training...",
              date: "Aug 16"
            }
          ].map((article, index) => (
            <Box key={index} sx={{ minWidth: '276px', scrollSnapAlign: 'start' }}>
              <ArticleCard {...article} />
            </Box>
          ))}
        </Box>
        
        <Box sx={{ flexShrink: 0 }}>
          <AudioPlayerCard />
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentAffairs;
