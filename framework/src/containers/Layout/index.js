import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import Welcome from './../welcome';
import NotFound from "@components/ErrorPages/NotFound";

class LayOut extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <Switch>
                <Redirect from="/" exact to="/welcome" />
                {/* <Route path='/' element={<div>你好</div>} />
                <Route path='/welcome' element={<Welcome/>}/>
                <Route element={<NotFound/>} /> */}
                <Route path='/' component={Welcome} />

            </Switch>
        )
    }
}
const mapStateToProps = (state) => {
    // const {

    // } = state.loginManage;
    return {

    }
}
export default connect(mapStateToProps)(LayOut);