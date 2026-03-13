import React from 'react';
import ApiService from "../services/ApiService";
import { Locale } from "../services/Locale";
import { useLang } from "../contexts/LangContext";
import { useAuth } from "../contexts/AuthContext";

import { Box, Button, Typography, 
    Paper, ToggleButton, ToggleButtonGroup, 
    Tooltip, Link, TextField, 
    Dialog, DialogTitle, DialogContent, 
    DialogActions} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import CircularProgress from "@mui/material/CircularProgress";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {

    const apiUrl = process.env.REACT_APP_API_URL;

    const { lang, setLang } = useLang();
    const { user } = useAuth();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [openRegisterDialog, setOpenRegisterDialog] = React.useState(false);
    const [registerData, setRegisterData] = React.useState({name: "", email: "", username: "", password: "", confirmPassword: "" });

    const [loading, setLoading] = React.useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInvalid = Boolean(registerData.email) && !emailRegex.test(registerData.email);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    const passwordInvalid = Boolean(registerData.password) && !passwordRegex.test(registerData.password);

    const passwordMismatch = Boolean(registerData.confirmPassword) && registerData.password !== registerData.confirmPassword;

    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePassword = () => { setShowPassword(!showPassword); };

    const loc = Locale[lang];

    React.useEffect(() => {
            
        if (user) {
            window.location.href = "/";
        }

    }, [user]);

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

    const handleRegister = async () => {

        if(!registerData.name.trim() || !registerData.email.trim() || !registerData.username.trim() || !registerData.password.trim()) {
            alert(loc.registerInfoEmpty);
            return;
        }

        if (!passwordRegex.test(registerData.password)) {
            alert(loc.passwordRule);
            return;
        }

        if (!emailRegex.test(registerData.email)) {
            alert(loc.invalidEmail);
            return;
        }

        if (registerData.password !== registerData.confirmPassword) {
            alert(loc.passwordNotMatch);
            return;
        }

        try {
            setLoading(true);
            await register();
        } catch (error) {
            alert(loc.registerFailed);
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

    const register = async () => {

        const response = await ApiService.request("/join", { 
            auth: false,
            method: "POST", 
            body: JSON.stringify(registerData) 
        });
        if (response.ok) { 
            setOpenRegisterDialog(false);
            alert(loc.registerSucceed);
        }
        else { 
            alert(loc.registerFailed);
        }
    };

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
                        label="ID"
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
                        label={loc.name}
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
                        label={loc.Email}
                        size="small"
                        fullWidth
                        required
                        error={emailInvalid}
                        helperText={emailInvalid ? loc.invalidEmail : ""}
                        value={registerData.email}
                        onChange={(e) =>
                            setRegisterData({ ...registerData, email: e.target.value })
                        }
                    />

                    <TextField
                        label="ID"
                        size="small"
                        fullWidth
                        required
                        value={registerData.username}
                        onChange={(e) =>
                            setRegisterData({ ...registerData, username: e.target.value })
                        }
                    />

                    <TextField
                        label={loc.password}
                        type={showPassword ? "text" : "password"}
                        size="small"
                        fullWidth
                        required
                        error={passwordInvalid}
                        helperText={passwordInvalid ? loc.passwordRule : ""}
                        value={registerData.password}
                        onChange={(e) =>
                            setRegisterData({ ...registerData, password: e.target.value })
                        }
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleTogglePassword}
                                        edge="end"
                                        size="small"
                                    >
                                        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label={loc.confirmPassword}
                        type={showPassword ? "text" : "password"}
                        size="small"
                        fullWidth
                        required
                        error={passwordMismatch}
                        helperText={passwordMismatch ? loc.passwordNotMatch : ""}
                        value={registerData.confirmPassword}
                        onChange={(e) =>
                            setRegisterData({ ...registerData, confirmPassword: e.target.value })
                        }
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleTogglePassword}
                                        edge="end"
                                        size="small"
                                    >
                                        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
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
