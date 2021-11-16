import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from '@containers/Login';
import Layout from '@containers/Layout';
import AuthorizedRoute from "@containers/AuthorizedRoute";

export default function RouterMap(props) {
    return (
        <App>
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <AuthorizedRoute path="/" component={Layout} />
                </Switch>
            </HashRouter>
        </App>
    )
}