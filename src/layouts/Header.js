import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Box, 
    IconButton, Button, Menu, 
    Avatar, MenuItem, ListItemIcon, 
    ListItemText, } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import DescriptionIcon from "@mui/icons-material/Description";

import { useLang } from "../contexts/LangContext";
import { Locale } from "../services/Locale";

import { useTheme, useMediaQuery } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {

    const { lang, setLang } = useLang();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const { user, logout } = useAuth();

    const [aboutMenu, setAboutMenu] = React.useState(null);

    const handleMenuClick = (path) => {
        navigate(path, { replace: true });
        closeAboutMenu();
    };

    const openAboutMenu = (e) => setAboutMenu(e.currentTarget);
    const closeAboutMenu = () => setAboutMenu(null);

    const handleLogout = (e) => {
        logout();
    }

    return (
        <header>
            <AppBar position="fixed" sx={{ height: 52 }}>
                
                {isMobile ? (
                    <Toolbar
                        disableGutters
                        sx={{
                            height: 52,
                            minHeight: "52px !important",
                            justifyContent: "space-between",
                            alignItems: "center",
                            px: 1,
                            overflow: "hidden",
                        }}
                    >
                        {/* LEFT LOGO AREA */}
                        <Box
                            sx={{
                                width: 80,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >  
                            <IconButton
                                sx={{ color: "white" }}
                                onClick={() => handleMenuClick("/")}
                            >
                                <Avatar
                                    src="/logo192.png"
                                    alt="Logo"
                                    sx={{ width: 32, height: 32, }}
                                />
                                
                            </IconButton>                            
                        </Box>

                        {/* LEFT USER AREA */}
                        <Box
                            sx={{
                                width: 80,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <IconButton
                                sx={{ color: "white" }}
                                onClick={() => handleMenuClick("/user")}
                            >
                                {user?.pictureUrl ? 
                                    (
                                        <Avatar
                                            src={user.pictureUrl}
                                            alt="User"
                                            sx={{ width: 32, height: 32 }}
                                        />
                                    ) : 
                                    (
                                        <AccountCircleIcon />
                                    )
                                }
                                
                            </IconButton>
                        </Box>

                        {/* RIGHT LANGUAGE AREA */}
                        <Box
                            sx={{
                                width: 80,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >                              
                            <Button
                                color="inherit"
                                onClick={() => setLang(lang == "en" ? "mn" : "en")}
                                sx={{fontSize: 20, width: 120, }}
                            >
                                {Locale[lang].language}
                            </Button>
                        </Box>

                        {/* RIGHT LOGOUT AREA */}
                        <Box
                            sx={{
                                width: 80,               // symmetric with left
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <IconButton color="inherit" onClick={(e) => handleLogout(e)}>
                                <LogoutIcon />
                            </IconButton>
                        </Box>

                    </Toolbar>
                    ) : ( 
                    <Toolbar
                        disableGutters
                            sx={{
                            height: 52,
                            minHeight: "52px !important",
                            px: 2,
                            display: "flex"
                        }}
                    >
                        {/* LEFT LOGO AREA */}
                        <Box
                            sx={{
                                width: 60,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >  
                            <IconButton
                                sx={{ color: "white" }}
                                onClick={() => handleMenuClick("/")}
                            >
                                <Avatar
                                    src="/logo192.png"
                                    alt="Logo"
                                    sx={{ width: 32, height: 32, }}
                                />
                                
                            </IconButton>                            
                        </Box>

                        {/* LEFT USER AREA */}
                        <Box
                            sx={{
                                width: 60,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >  
                            <IconButton
                                sx={{ color: "white" }}
                                onClick={() => handleMenuClick("/user")}
                            >
                                {user?.pictureUrl ? 
                                    (
                                        <Avatar
                                            src={user.pictureUrl}
                                            alt="User"
                                            sx={{ width: 32, height: 32 }}
                                        />
                                    ) : 
                                    (
                                        <AccountCircleIcon />
                                    )
                                }
                                
                            </IconButton>
                        </Box>

                        {/* CENTER MENUS */}
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                justifyContent: "center",
                                gap: 2
                            }}
                        >
                            <Button color="inherit" onClick={() => handleMenuClick("/")} sx={{fontSize: 20, width: 120, }} >
                                {Locale[lang].home}
                            </Button>

                            <Button
                                color="inherit"
                                endIcon={<ArrowDropDownIcon />}
                                onClick={openAboutMenu}
                                sx={{fontSize: 20, width: 120, }}
                            >
                                {Locale[lang].about}
                            </Button>

                            <Menu
                                anchorEl={aboutMenu}
                                open={Boolean(aboutMenu)}
                                onClose={closeAboutMenu}
                            >
                                <MenuItem onClick={() => handleMenuClick("/about")}>
                                    <ListItemIcon><HelpOutlineIcon /></ListItemIcon>
                                    <ListItemText>About</ListItemText>
                                </MenuItem>
                                <MenuItem onClick={() => window.open("privacy-policy", "_blank", "noopener,noreferrer" )}>
                                    <ListItemIcon><PrivacyTipIcon /></ListItemIcon>
                                    <ListItemText>Privacy Policy</ListItemText>
                                </MenuItem>
                                <MenuItem onClick={() => window.open("term-of-service", "_blank", "noopener,noreferrer" )}>
                                    <ListItemIcon><DescriptionIcon /></ListItemIcon>
                                    <ListItemText>Terms of Service</ListItemText>
                                </MenuItem>
                                <MenuItem onClick={() => window.open("data-deletion", "_blank", "noopener,noreferrer" )}>
                                    <ListItemIcon><DescriptionIcon /></ListItemIcon>
                                    <ListItemText>Data Deletion</ListItemText>
                                </MenuItem>
                            </Menu>
                        </Box>

                        {/* RIGHT LANGUAGE AREA */}
                        <Box
                            sx={{
                                width: 60,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <IconButton
                                sx={{ color: "white", fontSize: 16, }}
                                onClick={() => setLang(lang == "en" ? "mn" : "en")}
                            >
                                {Locale[lang].language}                                
                            </IconButton>
                        </Box>

                        {/* RIGHT LOGOUT AREA */}
                        <Box
                            sx={{
                                width: 60,               // symmetric with left
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <IconButton color="inherit" onClick={(e) => handleLogout(e)}>
                                <LogoutIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>                                        
                )}
                
            </AppBar>
        </header>
    );
}
