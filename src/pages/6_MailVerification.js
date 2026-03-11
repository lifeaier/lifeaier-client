import React from 'react';
import ApiService from "../services/ApiService";

import { Box, Typography, Paper, } from '@mui/material';
import { useSearchParams } from "react-router-dom";

export default function MailVerification() {

    const [searchParams] = useSearchParams();
    const [status, setStatus] = React.useState("Verifying...");
    const token = searchParams.get("token");
    
    React.useEffect(() => {
        if (!token) {
            setStatus("Invalid verification link.");
            return;
        }

        verify();

    }, [token]);

    const verify = async () => {

        const response = await fetch(`${process.env.REACT_APP_API_URL}/verify`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token })
        });        
        if (response.ok) { 
            window.location.href = "/";
        }
        else { 
            const data = await response.json();
            if(data.error === "MAIL_NOT_VERIFIED") {
                setStatus("❌ " + "Verification failed. Please check your inbox for the verification email.");
                return;
            }
        }
    };

    return (
        <div className="content-layout">

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

                    <Box mt={3}>
                        <Typography paragraph sx={{ textAlign: "justify", }}>
                            {status}
                        </Typography>
                    </Box>

                </Paper>
                
            </Box>
            
        </div>
    );
}