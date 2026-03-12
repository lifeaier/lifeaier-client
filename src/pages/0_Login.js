import React from 'react';
import ApiService from "../services/ApiService";
import { Locale } from "../services/Locale";
import { useLang } from "../contexts/LangContext";

import { Box, Button, Typography, 
    Paper, ToggleButton, ToggleButtonGroup, 
    Tooltip, Link, TextField, 
    Dialog, DialogTitle, DialogContent, 
    DialogActions} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {

    const apiUrl = process.env.REACT_APP_API_URL;

    const { lang, setLang } = useLang();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [openRegisterDialog, setOpenRegisterDialog] = React.useState(false);
    const [registerData, setRegisterData] = React.useState({name: "", email: "", username: "", password: ""});

    const [loading, setLoading] = React.useState(false);

    const handleLogin = async () => {

        if(!username.trim() || !password.trim()) {
            alert(loc.loginInfoEmpty);
            return;
        }
        
        try {
            setLoading(true);
            await login();
        } catch (error) {
            alert(loc.loginFailed);
        } finally {
            setLoading(false);
        }
    };

    const login = async () => {

        const response = await fetch(`${apiUrl}/login`, {
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
                if(window.confirm(loc.resendMailVerification)) {
                    const response = await fetch(`${apiUrl}/resend`, {
                        method: "POST",
                        credentials: "include",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username })
                    });
                    if (response.ok) { 
                        alert(loc.checkYourInbox);
                    }                    
                }
            } else if(data.error === "AUTHENTICATION_FAILED") {   
                alert(loc.loginIncorrect);
            } else {
                alert(loc.loginFailed);
            }            
        }
    };

    const handleRegister = async () => {

        const response = await ApiService.request("/join", { 
            auth: false,
            method: "POST", 
            body: JSON.stringify(registerData) 
        });
        if (response.ok) { 
            setOpenRegisterDialog(false);
            alert("Registered successfully");
        }
        else { 
            alert("Registration failed");
        }
    };

    const loc = Locale[lang];

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
                <Tooltip title={loc.chooseLanguage}>
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

            <Paper sx={{ p: 2, width: 360, mb: 3, }} elevation={3}>

                <Box display="flex" flexDirection="column" gap={1}>

                    {/* Local Login */}
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
                            if (e.key === "Enter") {
                                handleLogin();
                            }
                        }}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleLogin}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : loc.login}
                    </Button>

                    <Box textAlign="center" fontSize={14} color="gray">
                        {loc.or}
                    </Box>

                    {/* Social Login */}
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
                        {loc.loginWithGoogle}
                    </Button>

                    <Button
                        variant="text"
                        fullWidth
                        onClick={() => setOpenRegisterDialog(true)}
                    >
                        <u>{loc.register}</u>
                    </Button>

                </Box>

            </Paper>

            {/* Register Dialog */}
            <Dialog open={openRegisterDialog} onClose={() => setOpenRegisterDialog(false)} fullWidth maxWidth="xs">
                <DialogTitle>{loc.inputUserInfo}</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, }}>

                    <TextField
                        label="Name"
                        size="small"
                        fullWidth
                        required
                        value={registerData.name}
                        sx={{ mt: 1 }}
                        onChange={(e) =>
                            setRegisterData({ ...registerData, name: e.target.value })
                        }
                    />

                    <TextField
                        label="Email"
                        size="small"
                        fullWidth
                        required
                        value={registerData.email}
                        onChange={(e) =>
                            setRegisterData({ ...registerData, email: e.target.value })
                        }
                    />

                    <TextField
                        label="Username"
                        size="small"
                        fullWidth
                        required
                        value={registerData.username}
                        onChange={(e) =>
                            setRegisterData({ ...registerData, username: e.target.value })
                        }
                    />

                    <TextField
                        label="Password"
                        type="password"
                        size="small"
                        fullWidth
                        required
                        value={registerData.password}
                        onChange={(e) =>
                            setRegisterData({ ...registerData, password: e.target.value })
                        }
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpenRegisterDialog(false)}>
                        {loc.cancel}
                    </Button>
                    <Button variant="contained" sx={{ width: 128 }} onClick={handleRegister}>
                        {loc.register}
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>
    );
}
