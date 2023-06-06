import { useState, useEffect } from "react";

const useApi = () => {
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setResponse('');
        }, 5000)
    }, [response]);

    useEffect(() => {
        setTimeout(() => {
            setError('');
        }, 5000)
    }, [error]);
    
    const getDataFromApiHandler = async (payload) => {
        const { url } = payload;
        try {
            const responseData = await fetch(url);
            return responseData.json();
        } catch (err) {
            return err;
        }
    }

    const postDataToApiHandler = async (payload) => {
        const { url, data } = payload;
        try {
            const response = await fetch(url, {
                method: "POST",
                // mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                setError(await response.json());
            } else {
                setResponse(await response.json());
            }
        } catch (err) {
            setError(err);
        }
    }

    const deleteDataFromApiHandler = async (payload) => {
        const { url, data } = payload;
        try {
            const responseData = await fetch(url, {
                method: "DELETE",
                // mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            return responseData.json();
        } catch (err) {
            return err;
        }
    }

    return {
        response,
        error,
        getDataFromApiHandler,
        postDataToApiHandler,
        deleteDataFromApiHandler
    }
}

export default useApi;