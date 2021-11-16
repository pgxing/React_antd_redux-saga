import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function Authorized(allProps) {
    const { component: Component, ...rest } = allProps
    const isLogin = sessionStorage.getItem('account') ? true : false;
    return <Route
        {...rest}
        render={props => {
            return isLogin ? <Component {...props} /> : <Redirect to="/login" />
        }}
    />
}