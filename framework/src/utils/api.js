import { get, post, postF } from "./request";
// import Qs from 'qs';
// import { param } from "jquery";
let formHeader = { headers: { 'Content-Type': 'multipart/form-data' } },
    jsonHeader = { headers: { 'Content-Type': 'application/json' } },
    wwwHeader = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
// 登录
const loginUrl = "/users/login";



export const login = (param) => get(loginUrl, param);




