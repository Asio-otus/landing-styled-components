import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {SignInPage} from "./pages/SignInPage";

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const sidebarToggle = () => {
        setIsOpen(!isOpen)
    }

    return (

        <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/signin' component={SignInPage} exact/>
        </Switch>
    );
}

export default App;
