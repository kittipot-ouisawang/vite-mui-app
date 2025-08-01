import * as React from "react";
import PageContainer from "./PageContainer.jsx";
import { Box, Grid, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';

const serviceColumns = [
  { field: 'id',
     headerName: 'ID',
      width: 20 ,
  },
  {
    field: 'serviceName',
    headerName: 'Service',
    minwidth: 450,
    flex: 1,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,

  },
];

const serviceRows = [
  { id: 1, serviceName: 'ตั้งเกียร์', price: '150 - 300 บาท'},
  { id: 2, serviceName: 'เปลี่ยนเฟือง', price: '100 บาท' },
  { id: 3, serviceName: 'เปลี่ยนยาง', price: '50 บาท' },
  { id: 4, serviceName: 'เปลี่ยนโซ่', price: '50 - 100 บาท' },
  { id: 5, serviceName: 'ประกอบรถ ไม่ซ่อนสาย', price: 'เรื่มต้น 1,500 บาท' },
  { id: 6, serviceName: 'ประกอบรถ ซ่อนสาย', price: 'เรื่มต้น 2,000 บาท' },
  { id: 7, serviceName: 'ตั้งล้อ 2 แกน', price: '300 บาท' },
  { id: 8, serviceName: 'ตั้งล้อ 3 แกน', price: '400 บาท' },
  { id: 9, serviceName: 'ขึ้นล้อ', price: '600 บาท' },
  { id: 10, serviceName: 'เติมน้ำมันดิสค์เบรค', price: '100 บาท' },
  { id: 11, serviceName: 'ไล่น้ำมันดิสค์เบรค', price: '300 บาท' },
  { id: 12, serviceName: 'Full service ดิสค์เบรค', price: '400 บาท' },
];

const cleaningColumns = [
  { field: 'id',
     headerName: 'ID',
      width: 20 ,
  },
  {
    field: 'cleaningName',
    headerName: 'Service',
    minwidth: 450,
    flex: 1,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,

  },
];

const cleaningRows = [
  { id: 1, cleaningName: 'ล้างภายนอก', price: 'เร่ิมต้น 300 บาท'},
  { id: 2, cleaningName: 'ล้างลูกปืนกระโหลก', price: '300 บาท' },
  { id: 3, cleaningName: 'ล้างลูกปืนล้อหน้า', price: '200 บาท' },
  { id: 4, cleaningName: 'ล้างลูกปืนล้อหลัง', price: '400 บาท' },
  { id: 5, cleaningName: 'ล้างลูกปืนล้อหน้า-หลัง', price: '500 บาท' },
  { id: 6, cleaningName: 'Full Cleaning', price: '2000 บาท' },
];

const ServicePage = () => {
    return (<PageContainer>
             <Box sx={{ mb: 4, p: 3, flexGrow: 1, minHeight: 700 }}>
                <Tooltip title="ค่าบริการเบื้องต้น" placement="bottom-start" arrow><Typography variant="h4" gutterBottom>Service Charge</Typography></Tooltip>
                        <Grid container spacing={2} columns={16}>
                            <Grid size={8}>
                            <Box sx={{ flexGrow: 1 , height: 650}}>
                            <DataGrid   
                                    rows={cleaningRows}
                                    columns={cleaningColumns}
                                    initialState={{
                                    pagination: {
                                        paginationModel: {
                                        pageSize: 10,
                                        },
                                    },
                                    }}
                                    pageSizeOptions={[10]}
                                    disableRowSelectionOnClick
                                    columnVisibilityModel={{
                                        // Hide columns status and traderName, the other columns will remain visible
                                        status: false,
                                        id: false,
                                    }}
                                    disableColumnMenu
                                />
                                </Box>
                            </Grid>
                            <Grid size={8}>
                            <Box sx={{ flexGrow: 1 , height: 650}}>
                            <DataGrid
                                    rows={serviceRows}
                                    columns={serviceColumns}
                                    initialState={{
                                    pagination: {
                                        paginationModel: {
                                        pageSize: 10,
                                        },
                                    },
                                    }}
                                    pageSizeOptions={[10]}
                                    disableRowSelectionOnClick
                                    columnVisibilityModel={{
                                        // Hide columns status and traderName, the other columns will remain visible
                                        status: false,
                                        id: false,
                                    }}
                                    disableColumnMenu
                                />
                                </Box>
                            </Grid>
                        </Grid>
                  
             </Box>
        </PageContainer>);
};

export default ServicePage;