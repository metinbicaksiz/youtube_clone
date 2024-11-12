import {createSlice} from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videoSlice",
    initialState: {
        popularVideos: [],
    },
    reducers: {
        getPopularVideos: (state, action) => {
            state.popularVideos = action.payload;
        }
    }
})

export const {getPopularVideos} = videoSlice.actions;
export default videoSlice.reducer;