import { put, call, all, takeLatest, takeEvery } from "redux-saga/effects";
import { getUserDataApi } from "@utils/api";
import { message } from "antd";
//解析文件
function* getUserDataFun(action) {
    console.log(action)
    try {
        // const res = yield call(getUserDataApi)
        let res = {
            userName:action.payload
        }

        if (res) {
            yield put({ type: 'SAVE_USER_DATA', payload: res })
        } else {
            message.error(res.data)
        }
    } catch (error) {
    }
}
export default function* fileManage() {
    yield all([
        // 监听最后一次事件
        yield takeLatest('GET_USER_DATA', getUserDataFun)//解析文件
    ])
}