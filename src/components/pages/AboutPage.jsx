import * as React from "react";
import PageContainer from "./PageContainer.jsx";
import { Box, Typography, Link, Divider } from "@mui/material";

import FacebookIcon from '@mui/icons-material/Facebook';

const AboutPage = () => {
    return(
        <PageContainer maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ mb: 4, p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    More About Us
                </Typography>
                <Divider flexItem/>
                <br />
                <Typography variant="body1">
                    "Whale Bike ถือเป็นร้านจักรยานครบวงจรที่นักปั่นทั้งมือใหม่และมือเก๋าต่างเลือกสรรในร้อยเอ็ด 
                    โดยคอลเลคชั่นจักรยานที่คัดสรรมาอย่างพิถีพิถันนี้มีทั้งรุ่นสำหรับมืออาชีพที่มีเทคโนโลยีขั้นสูงและรุ่นสำหรับผู้เริ่มต้นที่น่าเชื่อถือ
                     นักปั่นเสือหมอบสามารถเลือกจากจักรยานเสือหมอบที่ออกแบบมาให้พุ่งทะยานได้หลากหลายรุ่น 
                     ส่วนผู้ที่ชื่นชอบการผจญภัยสามารถเลือกจากจักรยานเสือภูเขาและจักรยาน BMX ครอบครัวที่กำลังมองหาจักรยานออกกำลังกายที่ปลอดภัยและทนทานก็สามารถหาซื้อได้ที่นี่เช่นกัน. 
                     ช่างเทคนิคผู้เชี่ยวชาญทุ่มเทเพื่อให้บริการจักรยานแต่ละคันอย่างพิถีพิถัน รับรองว่านักปั่นทุกคนจะได้รับประสบการณ์การปั่นจักรยานที่ราบรื่นและน่าพึงพอใจ 
                     ไม่ว่าคุณจะเป็นนักปั่นที่กำลังหาความตื่นเต้นเร้าใจหรือกำลังมองหาการผจญภัยกลางกลางแจ้งที่สนุกสนาน เราก็มีจักรยานเหมาะสำหรับคุณ"
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

export default AboutPage;