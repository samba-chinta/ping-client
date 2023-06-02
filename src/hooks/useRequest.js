import { useState } from "react";

const useRequest = () => {
    const [error, setError] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState("");

    const getRequestHandler = async (payload) => {
        let url = payload.url;

        const queryParamKeys = payload.queryParamKeys;
        // expected to be in same order as queryParamKeys
        const queryParamValues = payload.queryParamValues;

        // constructing query string
        for (let i = 0; i < queryParamKeys.length; i++) {
            if (i) {
                url += `&${queryParamKeys[0]}=${queryParamValues[1]}`;
            } else {
                url += `?${queryParamKeys[0]}=${queryParamValues[1]}`;
            }
        }

        // sending the request
        setIsLoading(true);
        await fetch(url, {
            method: "GET",
        })
            .then((res) => {
                setResponse(res);
            })
            .catch((err) => {
                setError(err);
            });
        setIsLoading(false);
    };

    const postRequestHandler = async (payload) => {
        const url = payload.url;
        const reqBody = payload.body;
        const token = payload.token;

        setIsLoading(true);
        await fetch(url, {
            method: "POST",
            headers: {
                "x-access-token": token,
            },
            body: JSON.stringify(reqBody),
        })
            .then((res) => {
                setResponse(res);
            })
            .catch((err) => {
                setError(err);
            });
        setIsLoading(false);
    };

    return {
        response,
        error,
        isLoading,
        getRequestHandler,
        postRequestHandler,
    };
};

export default useRequest;
