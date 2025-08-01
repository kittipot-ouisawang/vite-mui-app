import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const WhaleBikeMap = () => {
  // Get the API key from environment variables
  const googleMapsApiKey = import.meta.env.VITE_Maps_API_KEY;

  if (!googleMapsApiKey) {
    console.error("Google Maps API key is not set. Please add VITE_Maps_API_KEY to your .env file.");
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          Map Unavailable: API Key Missing
        </Typography>
        <Typography variant="body2">
          Please configure your Google Maps API key in the .env file.
        </Typography>
      </Box>
    );
  }

  // Encode the address for the URL
  const address = encodeURIComponent("Whale Bike, 164/5 Chaeng Sanit Rd, Tambon Nai Mueang, Amphoe Mueang Roi Et, Chang Wat Roi Et 45000");

  // Construct the Google Maps Embed URL
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${address}&zoom=17`;
  // Added zoom=16 for a good initial view, you can adjust this.

  return (
      <Paper elevation={3} sx={{ overflow: 'hidden', borderRadius: '8px' }}>
        <Box sx={{ width: '100%', height: { xs: 300, sm: 400, md: 500 } }}>
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapSrc}
            title="Our Location on Google Maps"
          ></iframe>
        </Box>
      </Paper>
  );
};

export default WhaleBikeMap;