import { combineReducers } from "redux";
import appManage from './appManage';


// 组合reducer避免名称污染
const rootReducer = combineReducers({
    appManage
});
export default rootReducer;