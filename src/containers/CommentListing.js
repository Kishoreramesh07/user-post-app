import React, { useEffect } from 'react';
import { config } from '../ApiURL';
import axios from 'axios';
import { setComments, setCommentPageCount } from "../redux/actions/postActions"
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { Container } from '@mui/material';
import CustomTable from './CustomTable';
import CustomPagination from './CustomPagination';

export default function CommentListing() {
    const comments = useSelector((state) => state.allComments.comments);
    const commentPageCount = useSelector((state) => state.commentPageCounts.commentPageCount);
    const dispatch = useDispatch();

    const fetchPosts = async (number) => {
        try {
            const response = await axios.get(`${config.endpoint}/comments?_page=${number}`, { headers: { username: sessionStorage.username } });
            const total = response.headers['x-total-count'];
            dispatch(setCommentPageCount(total / 10));
            dispatch(setComments(response.data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPosts(commentPageCount);
    }, [])

    const handlePageChange = (event, value) => {
        fetchPosts(value);
    }

    return (
        <>
            <Header />
            <Container maxWidth="xl" sx={{ pt: '3rem' }}>
                <CustomTable data={comments}/>
                <CustomPagination pageCount={commentPageCount} handlePageChange={handlePageChange}/>
            </Container>
        </>
    )
}




