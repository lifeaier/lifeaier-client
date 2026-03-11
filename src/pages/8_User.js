import React, { useEffect, useState } from 'react';
import ApiService from "../services/ApiService";
import { Box, Typography, Button, Paper, IconButton, 
    Stack, Avatar, } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import { useLang } from "../contexts/LangContext";
import { Languages } from "../components/Language";

export default function User() {
    
    const { lang, setLang } = useLang();
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleDelete = async (e) => {
 
        if(window.confirm(Languages[lang].deleteUserAccount)) {
            const response = await ApiService.request("/api/user/delete", { method: "POST", });
            if (response.ok) { alert(Languages[lang].deleteUserAccountSucceed); }
            else { alert(Languages[lang].deleteUserAccountFailed); }
            navigate("/login");
        }
    }

    const handleLogout = (e) => {
        logout();
    }

    return (
        <div className='content-layout'>
            <Box
                sx={{
                    height: '100vh',
                    bgcolor: '#f5f5f5',
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'auto',
                    p: 1,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        width: '100%',
                        maxWidth: 900,
                        p: { xs: 3, md: 6 },
                        borderRadius: 2,
                        my: 'auto',
                    }}
                >
                    
                    <Box mt={0}>

                        <Box
                            mb={3}
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",                                
                            }}                            
                        >
                            <IconButton
                                sx={{ color: "white" }}
                            >
                                {user?.pictureUrl ? 
                                    (
                                        <Avatar
                                            src={user.pictureUrl}
                                            alt="User"
                                            sx={{ width: 128, height: 128 }}
                                        />
                                    ) : 
                                    (
                                        <AccountCircleIcon />
                                    )
                                }
                                
                            </IconButton>
                        </Box>

                        <Box
                            mb={3}
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Typography variant="body1" fontSize={20}>
                                <strong>{user?.name}</strong>
                            </Typography>
                        </Box>

                        <Stack direction="row" spacing={2} justifyContent="space-between">
                            <Button variant="contained" sx={{ width: 120 }} onClick={handleDelete} >
                                {Languages[lang].delete}
                            </Button>
                            <IconButton color="error" onClick={(e) => handleLogout(e)}>
                                <LogoutIcon />
                            </IconButton>
                        </Stack>

                    </Box>

                </Paper>

            </Box>                
        </div>
    );
}