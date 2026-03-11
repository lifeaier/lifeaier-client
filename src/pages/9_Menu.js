import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, List, ListItemButton, ListItemText, } from "@mui/material";

export default function Menu() {
    const navigate = useNavigate();

    const handleClick = (menu) => () => {
        switch (menu) {
            case "test1":
                navigate("/test1", { replace: true });
                break;
            case "test2":
                navigate("/test2", { replace: true });
                break;
            case "test3":
                navigate("/test3", { replace: true });
                break;
            default:
                navigate("/", { replace: true });
                break;
        }
    };
    
    return (
        <div className="content-layout">
            
            <Box sx={{ width: "100%" }}>
                <List sx={{ p: 0 }}>
                    <ListItemButton 
                        onClick={handleClick("test1")}
                        sx={{
                            mb: 1,
                            borderRadius: 2,
                            border: "1px solid",
                            borderColor: "divider"
                        }}>
                        <ListItemText primary="Go to Test 1" />
                    </ListItemButton>

                    <ListItemButton 
                        onClick={handleClick("test2")}
                        sx={{
                            mb: 1,
                            borderRadius: 2,
                            border: "1px solid",
                            borderColor: "divider"
                        }}>
                        <ListItemText primary="Go to Test 2" />
                    </ListItemButton>

                    <ListItemButton 
                        onClick={handleClick("test3")}
                        sx={{
                            mb: 1,
                            borderRadius: 2,
                            border: "1px solid",
                            borderColor: "divider"
                        }}>
                        <ListItemText primary="Go to Test 3" />
                    </ListItemButton>

                </List>
            </Box>

        </div>
    );
}