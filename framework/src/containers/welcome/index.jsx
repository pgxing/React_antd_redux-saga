import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
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
    useEffect(()=>{
        console.log('设置props userName到state',userData.userName)
        setUserName(userData.userName)
    },[userData.userName])
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
        <Button onClick={quit}>退出</Button>
        <Button onClick={change}>修改</Button>
    </div>
}