import {configureStore} from "@reduxjs/toolkit";
import appSlice from "../slices/appSlice";
import videoSlice from "../slices/videoSlice";


const store = configureStore({
    reducer: {
        app: appSlice,
        video: videoSlice,
    }
})

export default store;