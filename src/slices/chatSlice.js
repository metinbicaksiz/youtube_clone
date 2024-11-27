import {createSlice} from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT} from "../utils/constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length < OFFSET_LIVE_CHAT) {
                state.messages.push(action.payload);
                state.messages.splice(OFFSET_LIVE_CHAT, 1);
            } else {
                state.messages.splice(OFFSET_LIVE_CHAT, 1);
                state.messages.unshift(action.payload);
            }
        }
    },
})

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;