import * as React from "react";
import PageContainer from "./PageContainer.jsx";
import WhaleBikeMap from "../display/WhaleBikeMap.jsx";
import { Box, Typography, Link, Divider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Tooltip from '@mui/material/Tooltip';

const LocationPage = () => {
    return(
        <PageContainer maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ mb: 4, p: 3, flexGrow: 1, minHeight: 700 }}>
                <Tooltip title="ที่ตั้ง" placement="bottom-start" arrow>
                    <Typography variant="h4" component="h1" gutterBottom> Location </Typography>
                </Tooltip>
                <WhaleBikeMap />
                <Box sx={{ mt: 3 , ml: 3}}>
                    <Typography variant="h6">Address:</Typography>
                    <Typography variant="body1">
                        164/5 ถนนเทวาภิบาล, ตำบลในเมือง, อำเภอเมือง, จังหวัดร้อยเอ็ด 45000
                    </Typography>
                    <Typography variant="body1">
                        164/5 Tewapiban Road, Tambon Nai Mueang, Amphoe Mueang Roi Et, Chang Wat Roi Et 45000
                    </Typography>
                    <br />
                    <Divider flexItem/>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Opening Hours:
                    </Typography>
                    <Typography variant="body1">
                        Monday - Friday: 8:00 AM - 5:00 PM
                    </Typography>
                    <Typography variant="body1">
                        Saturday - Sunday: 9:00 AM - 5:00 PM
                    </Typography>
                     <Typography variant="body1"sx={{ mt: 1} }>
                        *วันหยุดนักขัตฤกษ์กรุณาติดต่อทางร้านตามช่องทางที่ให้ไว้ด้านล่าง*
                    </Typography>
                    <br />
                    <Divider flexItem/>
                    <Typography variant="h6" sx={{ mt: 2 }}>Contact Information:</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <SmartphoneIcon> </SmartphoneIcon>
                        <Typography variant="body1"> Phone Number: (+66) 043-516-651 </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1}}>
                        <FacebookIcon sx={{ display: 'flex',  mb: "3px"}}/> 
                        <Link href="https://www.facebook.com/whalebikeshop" underline="hover" target="_blank" color="white" rel="noopener"> Whale Bike Shop</Link>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Typography variant="body1"> Line ID: @Whalebike </Typography>
                        <Link sx={{ml: 1}} href="https://lin.ee/kPCv8t4"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0"/></Link>
                    </Box>
                </Box>
            </Box>
        </PageContainer>
    );
}

export default LocationPage;