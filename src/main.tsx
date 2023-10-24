import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const theme = createTheme({
  typography: {
    fontFamily: ["Rajdhani", "arial", "sans-serif"].join(","),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "3px solid #010101",
          borderRadius: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {},
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: "32px",
          fontWeight: "900",
          textTransform: "uppercase",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
