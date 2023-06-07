import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MFA from "./components/forms/MFA";
import Navigation from "./components/UI/Navigation";
import { authActions } from "./redux/auth-slice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const auth_token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        if (auth_token && username) {
            dispatch(
                authActions.login({
                    token: auth_token,
                    username,
                })
            );
        }
    });

    // if token is set, display the navigation bar
    const userToken = useSelector((state) => state.auth.auth_token);

    return (
        <div>
            {userToken && <Navigation isLoggedIn={userToken ? true : false} />}
            <Routes>
                <Route path="/" element={<Home />} exact />
                {!userToken && (
                    <Route
                        path="/auth/register"
                        element={<RegisterPage />}
                        exact
                    />
                )}
                {!userToken && (
                    <Route path="/auth/login" element={<LoginPage />} exact />
                )}
                {userToken && (
                    <Route path="/auth/mfa" element={<MFA />} exact />
                )}
                <Route path="*" element={<h1>This page not exists</h1>} />
            </Routes>
        </div>
    );
};

export default App;
