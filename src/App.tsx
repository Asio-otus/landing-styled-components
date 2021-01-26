import React from 'react';
import {HomePage} from "./pages/Home";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from './global-styles/globalStyles';
import {theme} from './global-styles/theme';

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <HomePage/>
            </ThemeProvider>
        </div>
    );
}

export default App;
