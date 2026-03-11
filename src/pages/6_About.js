import React from 'react';
import { Box, Typography, Paper, } from '@mui/material';
import { useLang } from "../contexts/LangContext";

export default function About() {

    const { lang, setLang } = useLang();
    
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
                {lang == "en" ? (
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
                                The <strong>LifeAIer Security</strong> application is ...
                            </Typography>
                        </Box>

                    </Paper>
                ):(
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
                                Энэхүү <strong>LifeAIer Security</strong> апп нь ...
                            </Typography>
                        </Box>

                    </Paper>
                )}
            </Box>
        </div>
    );
}