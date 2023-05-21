import { createTheme } from "@mui/material";
export const theme = createTheme({
    commponents: {
        MuiButtonBase: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === "contained" &&
                        ownerState.color === "primary" && {
                        backgroundColor: "#202020",
                        color: "#fff"
                    }),
                }),
            },
        },
    },
});