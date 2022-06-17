import React, { useEffect, useState } from 'react';
import { config } from '../ApiURL';
import axios from 'axios';
import { setPosts, setPostPageCount } from "../redux/actions/postActions"
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { Container } from '@mui/material';
import CustomLoader from './CustomLoader';
import CustomTable from './CustomTable';
import CustomPagination from './CustomPagination';

export default function PostListing() {
    const posts = useSelector((state) => state.allPosts.posts);
    const postPageCount = useSelector((state) => state.postPageCounts.postPageCount);
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true);

    const fetchPosts = async (number) => {
        setLoader(true);
        try {
            const response = await axios.get(`${config.endpoint}/posts?_page=${number}`, { headers: { username: sessionStorage.username } });
            const total = response.headers['x-total-count'];
            dispatch(setPostPageCount(total / 10));
            dispatch(setPosts(response.data));
            setLoader(false);
        } catch (err) {
            console.log(err);
            setLoader(false);
        }
    }

    useEffect(() => {
        fetchPosts(postPageCount);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handlePageChange = (event, value) => {
        fetchPosts(value);
    }

    return (
        <>
            <Header />
            <Container maxWidth="xl" sx={{ pt: '3rem' }}>
                {loader
                    ? <CustomLoader />
                    : <CustomTable data={posts}/>
                }
                <CustomPagination pageCount={postPageCount} handlePageChange={handlePageChange}/>
            </Container>
        </>
    )
}




