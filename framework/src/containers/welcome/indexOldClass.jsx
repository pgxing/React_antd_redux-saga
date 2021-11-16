import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
    }
    //即将废弃
    componentWillReceiveProps(nextProps){
        console.log(nextProps.userData)
        console.log(this.props.userData)
        if(nextProps.userData.userName != this.props.userData.userName){
            this.setState({userName:nextProps.userData.userName})
        }
    }
    // static getDerivedStateFromProps(nextProps, preState) {
    //     const { userData } = nextProps
    //     let { props } = preState
        
    //     if (userData.userName != props.userData.userName) {
    //         return { userName: userData.userName, props: nextProps }
    //     }
    //     // if (userData.userName != preState.userName) {
    //     //     return {
    //     //         userName: nextProps.userData.userName
    //     //     }
    //     // }
    //     return null
    // }
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_USER_DATA',
            payload: sessionStorage.getItem('account')
        })
    }

    quit = () => {
        this.props.dispatch({
            type: 'SAVE_USER_DATA',
            payload: ''
        })
        sessionStorage.removeItem('account')
        this.props.history.push('/login')
    }
    change = () => {
        this.setState({ userName: 'kdy' })
    }
    render() {
        let { userName } = this.state
        return <div>
            <div>
                欢迎{userName}
            </div>
            <Button onClick={this.quit}>退出</Button>
            <Button onClick={this.change}>修改state</Button>
        </div>
    }
}
const mapStateToProps = (state) => {
    const {
        userData = {}
    } = state.appManage
    return {
        userData
    }
}
export default connect(mapStateToProps)(withRouter(Welcome))