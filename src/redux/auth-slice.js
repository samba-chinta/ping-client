import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Auth Store",
    initialState: {
        auth_token: "",
    },
    reducers: {
        login(state, action) {
            state.auth_token = action.payload.auth_token;
        },
        logout(state) {
            state.auth_token = '';
        }
    },
});

export const authActions = authSlice.actions;
export default authSlice;