import React, { useEffect, useState } from 'react';
import { config } from '../ApiURL';
import axios from 'axios';
import { setPosts, setPostPageCount } from "../redux/actions/postActions"
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { Container, Box, TextField, Button } from '@mui/material';
import CustomLoader from './CustomLoader';
import CustomTable from './CustomTable';
import CustomPagination from './CustomPagination';

export default function PostListing() {
    const posts = useSelector((state) => state.allPosts.posts);
    const postPageCount = useSelector((state) => state.postPageCounts.postPageCount);
    const [addPostData, setAddPostData] = useState({ title: "", body: "", userId: "" });
    const [searchQuery,  setSearchQuery] = useState("")
    let staticUserId = "1";
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

    const handleAddPost = (e) => {
        const key = e.target.id
        setAddPostData(prevState => ({ ...addPostData, [key]: e.target.value }));
    }

    const addPost = async () => {
        setAddPostData(prevState => ({ ...addPostData, userId: staticUserId }));
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', addPostData, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

            console.log(response)

        } catch (error) {
            console.log(error)
        }
    }

    const searchPost = (searchValue) => {
        setSearchQuery(searchValue);

        const postsArr = [...posts];

        const filteredPosts= postsArr.filter((item) => item.title.includes(searchValue));

        console.log(filteredPosts);

    }

    return (
        <>
            <Header />
            <Container maxWidth="xl" sx={{ pt: '3rem' }}>
                <TextField
                    required
                    id="search"
                    label="Search"
                    value={searchQuery}
                    onChange={(e) => searchPost(e.target.value)}
                />
                <Box component="form">
                    <TextField
                        required
                        id="title"
                        label="Tile"
                        value={addPostData.title}
                        onChange={(e) => handleAddPost(e)}
                    />
                    <TextField
                        required
                        id="body"
                        label="Body"
                        value={addPostData.body}
                        onChange={(e) => handleAddPost(e)}
                    />
                    <Button onClick={addPost}>Add Post</Button>
                </Box>
                {loader
                    ? <CustomLoader />
                    : <CustomTable data={posts} />
                }
                <CustomPagination pageCount={postPageCount} handlePageChange={handlePageChange} />
            </Container>
        </>
    )
}




