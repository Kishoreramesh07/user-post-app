import React, { useEffect } from 'react';
import { config } from '../ApiURL';
import axios from 'axios';
import { setPosts, setPostPageCount } from "../redux/actions/postActions"
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { Container } from '@mui/material';
import CustomTable from './CustomTable';
import CustomPagination from './CustomPagination';

export default function PostListing() {
    const posts = useSelector((state) => state.allPosts.posts);
    const postPageCount = useSelector((state) => state.postPageCounts.postPageCount);
    const dispatch = useDispatch();

    const fetchPosts = async (number) => {
        try {
            const response = await axios.get(`${config.endpoint}/posts?_page=${number}`, { headers: { username: sessionStorage.username } });
            const total = response.headers['x-total-count'];
            dispatch(setPostPageCount(total / 10));
            dispatch(setPosts(response.data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPosts(postPageCount);
    }, [])

    const handlePageChange = (event, value) => {
        fetchPosts(value);
    }

    return (
        <>
            <Header />
            <Container maxWidth="xl" sx={{ pt: '3rem' }}>
                <CustomTable data={posts}/>
                <CustomPagination pageCount={postPageCount} handlePageChange={handlePageChange}/>
            </Container>
        </>
    )
}




