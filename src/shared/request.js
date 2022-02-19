import axios from "axios";
import { getCookie } from "../shared/cookie"

const instance = axios.create({
  baseURL: "http://3.38.178.109", // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});

const token_cookie = getCookie("is_login");
//const token = localStorage.getItem("token");

//토큰이 있을때만 넣어주기
if (token_cookie) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token_cookie}`;
}

// cookie => is_login : token  /
// session => user : profilename, 보고싶은~~~~movieid들~~

export default instance;
