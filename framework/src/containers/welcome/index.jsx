import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { useHistory, Link, Route, Switch } from 'react-router-dom';
//路由懒加载
const Lazy = React.lazy(() => import('./../../components/Lazy'));
export default function Welcome() {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const { userData = {} } = useSelector(state => state.appManage)
    //只会在组件第一次挂载时触发
    useEffect(() => {
        console.log('请求数据')
        dispatch({
            type: 'GET_USER_DATA',
            payload: sessionStorage.getItem('account')
        })

    }, [])
    //当userData.userName变化时候，就会触发，更新state
    useEffect(() => {
        console.log('设置props userName到state', userData.userName)
        setUserName(userData.userName)
    }, [userData.userName])
    const quit = () => {
        dispatch({
            type: 'SAVE_USER_DATA',
            payload: ''
        })
        sessionStorage.removeItem('account')
        history.push('/login')
    }
    const change = () => {
        setUserName('kdy')
    }
    return <div>
        <div>欢迎{userName}</div>
        <div>
            <Link to='/welcome'>首页</Link>|
            <Link to='/welcome/lazy'>懒加载路由</Link>
        </div>
        <React.Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route exact path="/welcome" render={() => {
                    return <div>欢迎{userName}</div>
                }} />
                <Route path="/welcome/lazy" component={Lazy} />
            </Switch>
        </React.Suspense>
        <Button onClick={quit}>退出</Button>
        <Button onClick={change}>修改</Button>
    </div>
}