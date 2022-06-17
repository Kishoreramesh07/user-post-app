import React from 'react';
import { Stack, Pagination } from '@mui/material';

export default function CustomPagination({pageCount, handlePageChange}) {
    return (
        <Stack spacing={2} sx={{ pt: '2rem' }} direction="row" justifyContent="center" alignItems="center">
            <Pagination count={pageCount} onChange={handlePageChange} size="large" showFirstButton showLastButton />
        </Stack>
    )
}