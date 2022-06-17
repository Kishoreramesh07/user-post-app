import { React } from 'react';
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: '#f8faff', boxShadow: '0 8px 15px 0 rgb(102 127 180 / 11%)', color: '#131131'}}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Hello {sessionStorage.username}</Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}