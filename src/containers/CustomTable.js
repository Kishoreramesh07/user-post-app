import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function CustomTable({data}) {
    return (
        <TableContainer sx={{ minHeight: 600, maxHeight: 600, boxShadow: '0 8px 15px 0 rgb(102 127 180 / 11%)', borderRadius: '10px'}}>
            <Table stickyHeader sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        {Object.keys(data[0]).map((key, index) => index !== 0 && (
                            <TableCell sx={{ textTransform: 'capitalize', backgroundColor: '#eef', color: '#6236ff', fontWeight: 600, border: 0}} key={index}>{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={item.id} sx={{ 'td, th': { border: 0 } }}>
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




