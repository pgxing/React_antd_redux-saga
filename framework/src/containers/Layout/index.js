import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './../welcome';
import NotFound from "@components/ErrorPages/NotFound";

class LayOut extends Component {
    render() {
        return (
            <Switch>
                <Redirect from="/" exact to="/welcome" />
                <Route path='/welcome' component={Welcome} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}
export default LayOut;