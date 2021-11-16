import { fork } from 'redux-saga/effects';
import appManage from './appManage';

export default function* rootSaga() {
  // 合并saga
  yield fork(appManage);
}