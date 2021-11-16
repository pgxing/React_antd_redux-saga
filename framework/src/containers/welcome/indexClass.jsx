import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            props//备份props
        }
    }
    static getDerivedStateFromProps(nextProps, preState) {
        const { userData } = nextProps
        let { props } = preState
        /*
            对比nextProps和备份的props
            如果发生变化，更新state中userName(props要映射的部分)，同时更新props备份为最新的props,
            如果props再发生变化，就会触发继续更新，
            如果state发生变化，props不变，就不会触发if中语句执行。
            实现props与state解耦
        */
        if (userData.userName != props.userData.userName) {
            return { userName: userData.userName, props: nextProps }
        }
        // if (userData.userName != preState.userName) {
        //     return {
        //         userName: nextProps.userData.userName
        //     }
        // }
        return null
    }
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