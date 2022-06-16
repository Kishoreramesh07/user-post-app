import React, { useEffect } from 'react';
import { config } from '../ApiURL';
import axios from 'axios';
import { setPosts } from "../redux/actions/postActions"
import { useDispatch, useSelector } from 'react-redux';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function PostListing() {
    const posts = useSelector((state) => state.allPosts.posts);
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${config.endpoint}/posts?_page=1`);
            dispatch(setPosts(response.data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    console.log(posts)

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
        </Container>
    )
}




