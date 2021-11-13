import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import Welcome from './../welcome';
import NotFound from "@components/ErrorPages/NotFound";

class LayOut extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <Routes>
                {/* <Navigate from="/" exact to="/welcome" /> */}
                <Route path='/welcome' element={<div>你好</div>} />
                <Route element={<NotFound/>} />
            </Routes>
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