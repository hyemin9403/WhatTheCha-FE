import React from "react";
import axios from "axios";
import { getCookie } from "../shared/cookie";

const instance = axios.create({
  baseURL: "http://54.180.101.21", // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});

const token_cookie = getCookie("is_login");
const id = localStorage.getItem("id");

//토큰이 있을때만 넣어주기
if (token_cookie) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token_cookie}`;
  instance.defaults.headers.common["email"] = `${id}`;
}

// cookie => is_login : token  /
// session => user : profilename, 보고싶은~~~~movieid들~~

export default instance;
