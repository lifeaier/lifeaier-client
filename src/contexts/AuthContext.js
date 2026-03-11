import React from 'react';
import { createContext, useContext, useState } from "react";
import ApiService from "../services/ApiService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logout = async () => {
        try {
            await fetch(`${ApiService.apiUrl}/logout`, {
                method: "POST",
                credentials: "include",
            });
        } finally {
            setUser(null);
        }
    };
    
    const onAuthFail = () => setUser(null);

    React.useEffect(() => {
        ApiService.setAuthFailHandler(onAuthFail);

        const loadUser = async () => {
            try {
                const response = await ApiService.request("/api/user", { method: "GET", });
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
