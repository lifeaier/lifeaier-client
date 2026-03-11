import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/0_Login";
import NotFound from "./pages/0_NotFound";
import Home from "./pages/1_Home";
import About from "./pages/6_About";
import MailVerfication from "./pages/6_MailVerification";
import User from "./pages/8_User";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { LangProvider } from "./contexts/LangContext";
import MainLayout from "./layouts/MainLayout";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./layouts/Theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LangProvider>
                <AuthProvider>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/verify" element={<MailVerfication />} />
                        <Route path="*" element={<NotFound />} />

                        <Route element={<MainLayout />}>
                            <Route
                                path="/"
                                element={
                                    <ProtectedRoute>
                                        <Home />
                                    </ProtectedRoute>
                                }
                            />         
                            <Route
                                path="/about"
                                element={
                                    <ProtectedRoute>
                                        <About />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/user"
                                element={
                                    <ProtectedRoute>
                                        <User />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>

                    </Routes>
                </AuthProvider>
            </LangProvider>
        </ThemeProvider> 
    );
}

export default App;
