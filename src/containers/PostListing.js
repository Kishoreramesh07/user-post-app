import React, { useEffect } from 'react';
import { config } from '../ApiURL';
import axios from 'axios';
import { setPosts, setPageCount } from "../redux/actions/postActions"
import { useDispatch, useSelector } from 'react-redux';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Pagination } from '@mui/material';

export default function PostListing() {
    const posts = useSelector((state) => state.allPosts.posts);
    const pageCount = useSelector((state) => state.pageCounts.pageCount);
    const dispatch = useDispatch();

    const fetchPosts = async (number) => {
        try {
            const response = await axios.get(`${config.endpoint}/posts?_page=${number}`);
            const total = response.headers['x-total-count'];
            dispatch(setPageCount(total/10));
            dispatch(setPosts(response.data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPosts(1);
    }, [])

    const handlePageChange = (event, value) =>{
        fetchPosts(value);
    }
    
    return (
        <Container maxWidth="xl" sx={{pt: '3rem'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Post</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post) => (
                            <TableRow key={post.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{post.id}</TableCell>
                                <TableCell>{post.title}</TableCell>
                                <TableCell>{post.body}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack spacing={2} sx={{pt: '2rem'}} direction="row" justifyContent="center" alignItems="center">
                <Pagination count={pageCount} onChange={handlePageChange} size="large" showFirstButton showLastButton />
            </Stack>
        </Container>
    )
}




