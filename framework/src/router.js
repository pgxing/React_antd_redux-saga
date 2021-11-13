import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
// import Login from './containers/Login';
import Layout from './containers/Layout';
// import AuthorizedRoute from "./containers/AuthorizedRoute";

export default function RouterMap(props) {
    console.log(props)
    return (
        <HashRouter>
            <App>
                <Routes>
                    {/* <Route path="/login" component={Login} /> */}
                    <Route path="/" element={<Layout/>} />
                    <Route path="/we" element={<div>你好</div>} />
                    {/* <AuthorizedRoute path="/" component={Layout} /> */}
                </Routes>
            </App>
        </HashRouter>
    )
}