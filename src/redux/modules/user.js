import { createAction, handleActions } from "redux-actions";
import { setCookie, deleteCookie } from "../../shared/cookie";
import axios from "axios";

import instance from "../../shared/request";

// actions
const SET_USER = "SET_USER";
const SET_PROFILE = "SET_PROFILE";
const LOG_OUT = "LOG_OUT";
const CREATE_PROFILE = "Create_PROFILE";

// Action Creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const setProfile = createAction(SET_PROFILE, (user, info) => ({ user, info }));
const logOut = createAction(LOG_OUT, (username) => ({ username }));
const createProfile = createAction(CREATE_PROFILE, (profile) => ({profile}))

// initialState
const initialState = {
  user: null,
  cur_profile: {},
  is_login: false,
};

//  middleware Actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    //axious id, pwd전송/ 토큰요청
    //console.log("id : " + id,  "pwd : " + pwd)

    instance
      .post("/user/login", {
        email: id,
        password: pwd,
      })
      .then((res) => {
        if (res.data.ok) {
          console.log(res.data.message);
          const accessToken = res.headers.authorization.split(" ")[1];
          setCookie("is_login", accessToken)
            .then(() => {
              instance
                .get("/profile", {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                })
                .then((res) => {
                  setUser(res.data.profile);
                  window.alert("환영합니다");
                  history.push("/manage_profiles")
                })
                .catch((error) => {
                  console.log("프로파일 set중 에러발생", error);
                });
            })
            .catch((error) => {
              console.log("쿠키세팅중 에러발생", error);
            });
        } else {
          console.log(res.data.errorMessage);
          window.alert("이메일과 비밀번호를 확인해주세요");
        }
      })
      .catch((error) => {
        console.log("로그인 통신중 에러발생", error);
      });
  };
};

const signupFb = (name, email, pwd) => {
  return function (dispatch, getState, { history }) {
    console.log("id : " + name, "pwd : " + pwd, "email : " + email);
    instance
      .post("/user/signup", {
        //username: name,
        email: email,
        password: pwd,
        confirmPassword: pwd
      })
      .then((res) => {
        console.log(res);
        if (res.data.ok) {
          console.log("회원가입 성공");
          window.alert(
            "회원가입성공"
          );
          history.replace("/login")
        } else {
          console.log("회원가입 실패");
          //window.location.replace('/login');
          window.alert("아이디/닉네임/비밀번호를 확인해주세요");
        }
      })
      .catch((error) => {
        console.log("회원가입 오류", error);
        window.alert("아이디/닉네임/비밀번호를 확인해주세요");
      });
  };
};

const loginCheckFB = (token) => {
  return function (dispatch, getState, { history }) {
    // axios({
    //     method: "post",
    //     url: "http://3.34.193.226/check/user",
    //     headers: {
    //     "content-type": "applicaton/json;charset=UTF-8",
    //     accept: "application/json",
    //     Authorization: `Bearer ${token}`,
    //     },
    // })
    instance
      .get("/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        //console.log(res);
        if (res.data.ok) {
          console.log(res.data.message);
        } else {
          dispatch(logOut());
          console.log("로그아웃 되었어요");
        }
      })
      .catch((error) => {
        console.log("로그유지 axios통신 과정중 에러발생");
        console.log(error.code, error.message);
      });
  };
};

const logoutFB = () => {
  return function (dispatch, { history }) {
    deleteCookie("is_login");
    sessionStorage.removeItem("user");
    dispatch(logOut());
    //window.location.replace("/");
  };
};

const makeProfileFB = () => {
    return function (dispatch, getState, {history}) {

    };
}

const checkProfileFB = (select) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`profile/${select}`, {}, {})
      .then((res) => {
        //console.log(res.data);
        const profileData = {
          want: [...res.data.want],
          listRelay: [...res.data.listRelay],
          complete: [...res.data.complete],
          doneevaluation: [...res.data.doneevaluation],
        };
        dispatch(setProfile(select, profileData));
      })
      .catch((error) => {
        console.log("프로파일 선택 axios 통신중 에러발생");
        console.log(error.code, error.message);
      });
  };
};

const createProfileFB = () => {
  return function () {

  }
}

export default handleActions(
  {
    [SET_USER]: (state, action) => {
      sessionStorage.setItem("profile", action.payload.user);
      state.user = action.payload.user;
      state.is_login = true;
    },
    [LOG_OUT]: (state, action) => {
      state.user = null;
      state.is_login = false;
    },
    [SET_PROFILE]: (state, action) => {
      sessionStorage(action.payload.user, action.payload.info);
      state.cur_profile = { [action.payload.user]: action.payload.info };
    },
    [CREATE_PROFILE]: (state, action) => {
    }
  },
  initialState
);

// action creator export
const actionCreator = {
    setUser, logOut, signupFb, loginFB, loginCheckFB, logoutFB, checkProfileFB, makeProfileFB
}   

export { actionCreator };
