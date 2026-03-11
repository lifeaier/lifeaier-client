import React from 'react';
import ApiService from "../services/ApiService";

import { Box, Button, Typography, Paper,
    ToggleButton, ToggleButtonGroup, Tooltip, Link, 
    TextField, Dialog, DialogTitle,
    DialogContent, DialogActions} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import DescriptionIcon from "@mui/icons-material/Description";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";

import { useLang } from "../contexts/LangContext";
import { Languages } from "../components/Language";

export default function Login() {

    const { lang, setLang } = useLang();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [openJoinDialog, setOpenJoinDialog] = React.useState(false);
    const [joinData, setJoinData] = React.useState({name: "", email: "", username: "", password: ""});

    const handleLogin = async () => {

        const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        if (response.ok) { 
            window.location.href = "/";
        }
        else { 
            const data = await response.json();
            if(data.error === "MAIL_NOT_VERIFIED") {
                if(window.confirm("Your email is not verified. Resend verification email?")) {
                    const response = await fetch(`${process.env.REACT_APP_API_URL}/resend`, {
                        method: "POST",
                        credentials: "include",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username })
                    });
                    if (response.ok) { 
                        alert("Verification email resent. Please check your inbox.");
                    }                    
                }
            } else if(data.error === "AUTHENTICATION_FAILED") {   
                alert("Incorrect username or password.");
            } else {
                alert("Login failed.");
            }            
        }
    };

    const handleJoin = async () => {

        const response = await ApiService.request("/join", { 
            auth: false,
            method: "POST", 
            body: JSON.stringify(joinData) 
        });
        if (response.ok) { 
            setOpenJoinDialog(false);
            alert("Registered successfully");
        }
        else { 
            alert("Registration failed");
        }
    };

    const isLoginDisabled = !username.trim() || !password.trim();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "#f5f5f5",
                pt: 2,
            }}
        >
            <Box display="flex"
                justifyContent="start"
                mb={2}
                sx={{ width: 360 }}
            >
                <Tooltip title={Languages[lang].chooseLanguage}>
                    <ToggleButtonGroup
                        value={lang}
                        exclusive
                        onChange={(e, v) => v && setLang(v)}
                        size="small"                    
                    >
                        <ToggleButton sx={{ width: 100, }} value="mn">Монгол Хэл</ToggleButton>
                        <ToggleButton sx={{ width: 100, }} value="en">English</ToggleButton>
                    </ToggleButtonGroup>
                </Tooltip>
                
            </Box>

            {/* <Typography
                variant="body2"
                sx={{ maxWidth: 360, mb: 3, color: "text.secondary", textAlign: "justify", }}
            >
                {Languages[lang].appDesc}
            </Typography> */}

            <Paper sx={{ p: 2, width: 360, mb: 3, }} elevation={3}>

                <Box display="flex" flexDirection="column" gap={1}>

                    {/* Local Login Fields */}
                    <TextField
                        label="Username"
                        size="small"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        size="small"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !isLoginDisabled) {
                                handleLogin();
                            }
                        }}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        disabled={isLoginDisabled}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>

                    <Button
                        variant="text"
                        fullWidth
                        onClick={() => setOpenJoinDialog(true)}
                    >
                        Join Now
                    </Button>

                    <Box textAlign="center" fontSize={14} color="gray">
                        OR
                    </Box>

                    {/* Google OAuth */}
                    <Button
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        fullWidth
                        component="a"
                        href={`${ApiService.apiUrl}/oauth2/authorization/google`}
                        sx={{
                            textTransform: "none",
                        }}
                    >
                        {Languages[lang].googleLogin}
                    </Button>

                    {/* Facebook OAuth */}
                    {/* <Button
                        variant="outlined"
                        startIcon={<FacebookIcon />}
                        fullWidth
                        component="a"
                        href={`${ApiService.apiUrl}/oauth2/authorization/facebook`}
                        sx={{
                            textTransform: "none",
                        }}
                    >
                        {Languages[lang].facebookLogin}
                    </Button> */}
                </Box>

            </Paper>

            {/* Join Dialog */}
            <Dialog open={openJoinDialog} onClose={() => setOpenJoinDialog(false)} fullWidth maxWidth="xs">
                <DialogTitle>Join Now</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, }}>

                    <TextField
                        label="Name"
                        size="small"
                        fullWidth
                        value={joinData.name}
                        sx={{ mt: 1 }}
                        onChange={(e) =>
                            setJoinData({ ...joinData, name: e.target.value })
                        }
                    />

                    <TextField
                        label="Email"
                        size="small"
                        fullWidth
                        value={joinData.email}
                        onChange={(e) =>
                            setJoinData({ ...joinData, email: e.target.value })
                        }
                    />

                    <TextField
                        label="Username"
                        size="small"
                        fullWidth
                        value={joinData.username}
                        onChange={(e) =>
                            setJoinData({ ...joinData, username: e.target.value })
                        }
                    />

                    <TextField
                        label="Password"
                        type="password"
                        size="small"
                        fullWidth
                        value={joinData.password}
                        onChange={(e) =>
                            setJoinData({ ...joinData, password: e.target.value })
                        }
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpenJoinDialog(false)}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleJoin}>
                        Join
                    </Button>
                </DialogActions>
            </Dialog>

            {/* <Paper sx={{ p: 2, width: 360, mb: 3, }} elevation={3}>

                <Box display="flex" flexDirection="column" gap={1}>
                    <Button
                        variant="outlined"
                        startIcon={<DescriptionIcon />}
                        fullWidth
                        component="a"
                        href="https://shineug.com/term-of-service"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textTransform: "none" }}
                    >
                        {Languages[lang].termOfService} 
                    </Button>

                    <Button
                        variant="outlined"
                        startIcon={<PrivacyTipIcon />}
                        fullWidth
                        component="a"
                        href="https://shineug.com/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textTransform: "none" }}
                    >
                        {Languages[lang].privacyPolicy}
                    </Button>
                </Box>

            </Paper>*/}

            {/* <Typography
                variant="body2"
                sx={{ maxWidth: 360, mb: 2, color: "text.secondary", textAlign: "justify", }}
            >
                {Languages[lang].securityDesc}
            </Typography> */}

        </Box>
    );
}
