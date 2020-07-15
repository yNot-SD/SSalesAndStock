import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage'
import Sidebar from './components/sidebar/Sidebar'
import Main from './pages/mainScreen/MainScreen'


function App() {
    return (

        <Router>

            <Route path="/main">
                <Sidebar/>,
                <Main/>
            </Route>

            <Route exact path="/" component={LoginPage}/>

        </Router>

    );
}

export default App;