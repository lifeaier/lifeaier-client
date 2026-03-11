import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "'OCRA', monospace",
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                columnHeaders: {
                    fontSize: 16,
                    borderBottom: "2px solid #ccc"
                }
            }
        }
    }
});

export default theme;
