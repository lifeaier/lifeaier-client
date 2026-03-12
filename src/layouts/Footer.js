import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Box, 
    IconButton, Typography, Menu, 
    MenuItem, ListItemIcon, ListItemText, } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import DescriptionIcon from "@mui/icons-material/Description";

import { useLang } from "../contexts/LangContext";
import { Locale } from "../services/Locale";

import { useTheme, useMediaQuery } from "@mui/material";

const MyMenuItem = ({ icon, label, onClick }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                mx: 1,
                color: "white",
                height: "100%",
            }}
        >
            <IconButton sx={{ color: "white", p: 0.5 }} size="small">
                {icon || null}
            </IconButton>
            <Typography variant="caption" sx={{ mt: -0.5, fontSize: 12, lineHeight: 1 }}>
                {label}
            </Typography>
        </Box>
    );
};

export default function Footer() {

    const { lang, setLang } = useLang();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const navigate = useNavigate();

    const [aboutMenu, setAboutMenu] = React.useState(null);

    React.useEffect(() => {
        
    }, []);

    const handleMenuClick = (path) => {
        navigate(path, { replace: true });
        closeAboutMenu();
    };

    const openAboutMenu = (e) => setAboutMenu(e.currentTarget);
    const closeAboutMenu = () => setAboutMenu(null);

    return (
        <footer>            
            <AppBar
                position="fixed"
                sx={{
                    top: "auto",
                    bottom: 0,
                    height: 52,
                    overflow: "hidden",
                }}
            >
                {isMobile ? (
                    <Toolbar
                        disableGutters
                        sx={{
                            height: 52,
                            minHeight: "52px !important",
                            justifyContent: "center",
                            alignItems: "center",
                            px: 1,
                            overflow: "hidden",
                        }}
                        >

                        {/* Menus */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <MyMenuItem icon={<HomeIcon />} label={Locale[lang].home} onClick={() => handleMenuClick("/")} />

                            <MyMenuItem 
                                icon={<InfoIcon />} 
                                label={Locale[lang].about} 
                                onClick={openAboutMenu} >
                            </MyMenuItem>

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
                    </Toolbar>
                ) : (
                    <Box></Box>
                ) }
                
            </AppBar>
        </footer>
    );
}
