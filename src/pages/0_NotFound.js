import React from 'react';
import { Box, Typography, Link, IconButton, 
    Avatar, Paper, } from '@mui/material';

export default function NotFound() {

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
                                <Avatar
                                    src="/logo192.png"
                                    alt="Logo"
                                    sx={{ width: 128, height: 128, }}
                                />
                                
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
                            <Typography variant="h6" fontWeight={600} gutterBottom>
                                404
                            </Typography>
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
                            <Typography paragraph sx={{ textAlign: "justify", }}>
                                Page not found.
                            </Typography>
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
                            <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                            >
                                Life AIer Security
                            </Link>
                        </Box>

                    </Box>

                </Paper>

            </Box>                
        </div>
    );
}