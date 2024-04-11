import {createSlice} from '@reduxjs/toolkit';
import { getSubredditPosts, getPostComments } from '../api/reddit';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: 'r/GTA6/'
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setSearchTerm(state, action){
            state.searchTerm = action.payload;
        }
    }
});

export const {
    setSearchTerm
} = redditSlice.actions;

export default redditSlice.reducer;