import {configureStore} from "@reduxjs/toolkit";
import appSlice from "../slices/appSlice";
import videoSlice from "../slices/videoSlice";
import searchSlice from "../slices/searchSlice";


const store = configureStore({
    reducer: {
        app: appSlice,
        video: videoSlice,
        search: searchSlice,
    }
})

export default store;