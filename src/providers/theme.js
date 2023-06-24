import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '../assets/css/index.css';
import useConfig from '../hooks/useConfig';

import { dark, light } from '../config/theme';

// ** Declare Theme Provider
const MuiThemeProvider = ({ children }) => {
    const { isDark } = useConfig();

    const theme = createTheme(isDark ? dark : light);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;
