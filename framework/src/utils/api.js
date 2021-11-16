import { get, post, postF } from "./request";
// import Qs from 'qs';
// import { param } from "jquery";
let formHeader = { headers: { 'Content-Type': 'multipart/form-data' } },
    jsonHeader = { headers: { 'Content-Type': 'application/json' } },
    wwwHeader = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
// 登录
const getUserDataUrl = "/api/productCollections";



export const getUserDataApi = (param) => get(getUserDataUrl, param);




