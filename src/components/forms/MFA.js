import React, { useEffect, useState } from "react";

import useApi from "../../hooks/useRequest";
import { useSelector } from "react-redux";

const MFA = (props) => {
    const auth = useSelector((state) => state.auth);
    const { response, error, getDataFromApiHandler } = useApi();

    useEffect(() => {
        const getResponseHandler = async () => {
            await getDataFromApiHandler({
                url: `http://localhost:5000/auth/generate-qr?token=${auth.auth_token}&username=${auth.username}`,
            });
        };
        getResponseHandler();
    }, []);

    return <div dangerouslySetInnerHTML={{__html: response }} />;
};

export default MFA;
