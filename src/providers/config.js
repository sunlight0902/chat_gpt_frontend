import useLocalStorage from '../hooks/useLocalStorage.js';
import { ConfigContext, initialState } from '../contexts/config';

const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useLocalStorage('my-app', {
        ...initialState
    });

    const onChangeThemeMode = () => {
        setConfig((prevState) => ({
            ...prevState,
            isDark: !prevState.isDark
        }));
    };

    return <ConfigContext.Provider value={{ ...config, onChangeThemeMode }}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
