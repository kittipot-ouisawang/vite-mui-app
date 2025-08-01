import * as React from "react";
import PageContainer from "./PageContainer.jsx";
import ImageSlider from "../display/ImageSlider.jsx";
import { Box } from '@mui/material';

const HomePage = () => {
    const images = [
        { fileName: "store_outside.png" },
        { fileName: "store_inside.png" },
        { fileName: "service_zone.png" },
    ];

    return(
        <PageContainer maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ mb: 4, p: 3, flexGrow: 1, minHeight: 700 }}>
                <Box
                    sx={{
                    width: { xs: '70%', sm: '90%', md: '120%px' }, // Responsive width
                    height: { xs: '480px', sm: '520px', md: '600px' }, // Responsive height
                    mx: 'auto', // Center the slider
                    p:2,
                    }}
                >
                <ImageSlider images={images} />
                </Box>
            </Box>
        </PageContainer>
    );
};

export default HomePage;