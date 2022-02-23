import { createAction, handleActions } from "redux-actions";
import { setCookie, deleteCookie, getCookie } from "../../shared/cookie";
import axios from "axios";

import instance from "../../shared/request";

const accessToken = getCookie("is_login");

// actions
const SET_USER = "SET_USER";
const SET_PROFILE = "SET_PROFILE";
const SELECT_PROFILE = "SELECT_PROFILE";
const CREATE_PROFILE = "Create_PROFILE";
const LOG_OUT = "LOG_OUT";

// Action Creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const setProfile = createAction(SET_PROFILE, (info) => ({ info }));
const selectProfile = createAction(SELECT_PROFILE, (user, info) => ({ user, info }))
const logOut = createAction(LOG_OUT, (username) => ({ username }));
const createProfile = createAction(CREATE_PROFILE, (profile) => ({ profile }));

// initialState
const initialState = {
  user: null,
  profile: null, 
  cur_profile: {},
  is_login: false,
};

//  middleware Actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    //axious id, pwd전송/ 토큰요청
    console.log("id : " + id, "pwd : " + pwd);

    instance
      .post("/users/login", {
        email: id,
        password: pwd,
      })
      .then((res) => {
          const accessToken = res.data.token;
          console.log(accessToken)
          setCookie("is_login", accessToken);
          dispatch(setUser(id));
          localStorage.setItem("id", id);
          instance
          .get("/profile", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              email: `${id}`,
            },
          })
          .then((res) => {
            console.log("프로파일", res);
            sessionStorage.setItem("profile", res.data.profile);
            dispatch(setProfile(res.data.profile));
          })
          .catch((error) => {
            console.log("프로파일 set중 에러발생", error);
          });
          window.alert("환영합니다");
          history.replace("/manage_profiles");
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
      .post("/users/signup", {
        email: email,
        password: pwd,
        confirmpassword: pwd,
      })
      .then((res) => {
        console.log(res);
        if (res.data.ok) {
          console.log("회원가입 성공");
          window.alert("회원가입성공");
          history.replace("/sign_in")
        } else {
          console.log("회원가입 실패");
          window.alert("아이디/닉네임/비밀번호를 확인해주세요");
        }
      })
      .catch((error) => {
        console.log("회원가입 오류", error);
        window.alert("아이디/닉네임/비밀번호를 확인해주세요");
      });
  };
};

const loginCheckFB = (token, id) => {
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
          console.log("로그인 유지중", res.data.message);
          dispatch(setUser(id))
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
    dispatch(logOut());
    window.location.replace("/");
  };
};

const makeProfileFB = (name, image) => {
    return function (dispatch, getState, {history}) {
      console.log("프로파일 이름", name)
      console.log("프로파일 이미지", image)
      const formData = new FormData()
      formData.append('profileName', name)
      formData.append('profileImage', image)
      // console.log(formData.entries())
      // console.log("진행중")
      // for(var pair of formData.entries()) {
      //     console.log(pair[0]+ ', '+ pair[1]); 
      //     console.log(...pair[1])
      // }
      instance
      .post("/profile/create", {
        "profileName" : name,
        "profileImage" : "test",
      },{
        headers: {
          "Content-Type": `multipart/form-data`,
        }
      }).then((res) => {
        console.log(res)
        const newProfile = {"profileName" : name, "profileImage" : "test"}
        dispatch(setProfile(newProfile))
      }).catch((error) => {
        console.log("axios 통신에러 발생", error)
      })
    };
}

const checkProfileFB = (select) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`profile/${select}`, {

      }, {})
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

export default handleActions(
  {
    [SET_USER]: (state, action) => {
      state.user = action.payload.user;
      state.is_login = true;
    },
    [LOG_OUT]: (state, action) => {
      deleteCookie("is_login");
      sessionStorage.removeItem("profile");
      localStorage.removeItem("id");
      state.user = null;
      state.is_login = false;
    },
    [SET_PROFILE]: (state, action) => {
      const tmp = sessionStorage.getItem("profile");
      sessionStorage.setItem("profile", [...tmp, action.payload.info]);
      state.profile = [...state.profile, action.payload.info];
    },
    [SELECT_PROFILE]: (state, action) => {
      sessionStorage(action.payload.user, action.payload.info);
      state.cur_profile = { [action.payload.user]: action.payload.info };
    },
    [CREATE_PROFILE]: (state, action) => {},
  },
  initialState
);

// action creator export
const actionCreator = {
  setUser,
  logOut,
  signupFb,
  loginFB,
  loginCheckFB,
  logoutFB,
  checkProfileFB,
  makeProfileFB,
};

export { actionCreator };
