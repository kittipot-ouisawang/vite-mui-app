import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// The main component, which accepts an array of image objects
const ImageSlider = ({ images }) => {
  // State to keep track of the current image's index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler to move to the previous image
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Handler to move to the next image
  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box sx={{ height: '100%', position: 'relative' }}>
      {/* Left Arrow Button */}
      <IconButton
        onClick={goToPrevious}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Right Arrow Button */}
      <IconButton
        onClick={goToNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Image Display */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '10px', // Optional: for rounded corners
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${images[currentIndex].url})`,
          transition: 'background-image 0.5s ease-in-out',
        }}
      />
    </Box>
  );
};

export default ImageSlider;