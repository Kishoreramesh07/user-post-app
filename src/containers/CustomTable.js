import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function CustomTable({data}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        {Object.keys(data[0]).map((key, index) => index !== 0 && (
                            <TableCell sx={{ textTransform: 'capitalize' }} key={index}>{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {Object.keys(data[index]).map((key, i) => i !== 0 && (
                                <TableCell key={i}>{item[key]}</TableCell>)
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}




