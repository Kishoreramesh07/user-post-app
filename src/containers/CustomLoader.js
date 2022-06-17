import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function CustomLoader() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 600, maxHeight: 600 }}>
            <CircularProgress />
        </Box>
    )
}
