import { React } from 'react';
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {sessionStorage.username}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}