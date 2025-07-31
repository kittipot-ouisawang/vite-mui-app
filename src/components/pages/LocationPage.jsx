import * as React from "react";
import PageContainer from "./PageContainer.jsx";
import WhaleBikeMap from "../display/WhaleBikeMap.jsx";
import { Box, Typography, Link, Divider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';


const LocationPage = () => {
    return(
        <PageContainer maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
                <br />
                <Divider flexItem/>
                <Typography variant="h6" sx={{ mt: 2 }}>Contact Information:</Typography>
                <Typography variant="body1">
                    Phone Number: (+66) 043-516-651
                </Typography>
                <Typography variant="body1">
                    Line: @Whalebike
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Link href="https://lin.ee/kPCv8t4"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0"/></Link>
                    </Box>
                </Typography>
                <br />
                <Divider flexItem/>
                <Typography variant="h6" sx={{ mt: 2 }}>Follow Us:</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                    <FacebookIcon sx={{ display: 'flex',  mb: "3px"}}/> 
                    <Link href="https://www.facebook.com/whalebikeshop" underline="hover" target="_blank" color="white" rel="noopener"> Whale Bike Shop</Link>
                </Box>
            </Box>
        </PageContainer>
    );
}

export default LocationPage;