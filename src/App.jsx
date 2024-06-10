import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';


const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header title="Weather App" />
            <WeatherContainer />
        </ThemeProvider>
    );
};

export default App;
