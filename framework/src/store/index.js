import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
// import { createLogger } from 'redux-logger'
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
// const logger = createLogger();
const store = createStore(
    reducer,
    // 注册插件
    // applyMiddleware(sagaMiddleware, logger)
    applyMiddleware(sagaMiddleware)
);
// 挂载saga
sagaMiddleware.run(rootSaga);
export default store;