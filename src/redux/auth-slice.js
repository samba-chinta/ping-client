import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Auth Store",
    initialState: {
        auth_token: "",
        username: "",
    },
    reducers: {
        login(state, action) {
            state.auth_token = action.payload.token;
            state.username = action.payload.username;
        },
        logout(state) {
            state.auth_token = '';
            state.username = '';
        }
    },
});

export const authActions = authSlice.actions;
export default authSlice;