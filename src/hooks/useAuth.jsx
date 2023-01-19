import React, { useState, useContext, createContext } from "react";
import endPoints from "@services/api";
import Cookies from "js-cookie";
const AuthContext = createContext();

export function ProviderAuth({ children }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const signIn = async (email, password) => {
        const options = {
            method: "POST",
            headers: {
                accept: "*/*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };
            const response = await fetch(endPoints.auth.login, options)
            .then((res) => res.json());
            const { access_token } = response;
            if (access_token) {
                const token = access_token;
                Cookies.set("token", token, { expires: 1 });

                const options = {
                    method: "GET",
                    headers: {
                        accept: "*/*",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

                const  user  = await fetch(endPoints.auth.profile, options)
                    .then((res) => res.json())
                    .then((user) => {
                        return setUser(user);
                        // setUser(data);
                    });                   
            } else {
                setError(response.message);
            }
        
}

    return {
        user,
        signIn,
        error,
        setError,
    }
}