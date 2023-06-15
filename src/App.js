import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MFA from "./pages/MFA";
import Navigation from "./components/UI/Navigation";
import VerifyMFAPage from "./pages/VerifyMFAPage";
import { authActions } from "./redux/auth-slice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const auth_token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        const isMFAEnabled = localStorage.getItem("isMFAEnabled");
        if (auth_token && username) {
            dispatch(
                authActions.login({
                    token: auth_token,
                    username,
                    isMFAEnabled,
                })
            );
        }
    });

    // if token is set, display the navigation bar
    const userToken = useSelector((state) => state.auth.auth_token);
    const isMFAEnabled = useSelector((state) => state.auth.isMFAEnabled);

    return (
        <div>
            {userToken && <Navigation isLoggedIn={userToken ? true : false} />}
            <Routes>
                {!userToken && <Route path="/" element={<Home />} exact />}
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
                {userToken && <Route path="/" element={<h1>Home page</h1>} exact/>}
                {userToken && !isMFAEnabled && (
                    <Route path="/auth/mfa" element={<MFA />} exact />
                )}
                {userToken && isMFAEnabled && (
                    <Route path="/auth/verify-mfa" element={<VerifyMFAPage/>} exact />
                )}
                <Route path="*" element={<h1>This page not exists</h1>} />
            </Routes>
        </div>
    );
};

export default App;
