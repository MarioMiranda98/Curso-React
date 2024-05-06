import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import PropTypes from "prop-types";
import theme from "./theme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.node.isRequired
};