import { createRoot } from 'react-dom/client';

import MuiThemeProvider from './theme';
import ConfigProvider from './config';
// import Web3ReactProvider from './web3React';
// import APIProvider from './api';

const Root = createRoot(document.getElementById('app-root'));

export {
    Root,
    MuiThemeProvider,
    ConfigProvider,
};
