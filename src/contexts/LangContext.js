import React from 'react';
import { createContext, useContext } from "react";
import ApiService from "../services/ApiService";

const LangContext = createContext();

export const LangProvider = ({ children }) => {

    const [lang, setLang] = React.useState("mn");

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);
