import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Auth Store",
    initialState: {
        auth_token: "",
        username: "",
        isMFAEnabled: false,
    },
    reducers: {
        login(state, action) {
            state.auth_token = action.payload.token;
            state.username = action.payload.username;
            state.isMFAEnabled = action.payload.isMFAEnabled;
        },
        setMFA(state, action) {
            state.isMFAEnabled = action.payload.isMFAEnabled;
        },
        logout(state) {
            state.auth_token = '';
            state.username = '';
            state.isMFAEnabled = false;
        }
    },
});

export const authActions = authSlice.actions;
export default authSlice;