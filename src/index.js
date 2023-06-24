import App from './App';

import {
  Root,
  MuiThemeProvider,
  ConfigProvider,
} from './providers';

Root.render(
  <ConfigProvider>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </ConfigProvider>
);
