import { createAction, handleActions } from "redux-actions";
import { setCookie, deleteCookie, getCookie } from "../../shared/cookie";
import { history } from "../configureStore";
import axios from "axios";

import randomProfileImage from "../../shared/profileImage";
import instance from "../../shared/request";
import _ from "lodash";

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
const selectProfile = createAction(SELECT_PROFILE, (user, info) => ({
  user,
  info,
}));
const logOut = createAction(LOG_OUT, (username) => ({ username }));
const createProfile = createAction(CREATE_PROFILE, (profile) => ({ profile }));

// initialState
const initialState = {
  user: null,
  profile: [],
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
        console.log(accessToken);
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
            console.log("프로파일", res.data.profile);
            // res.data.profile이 빈 obj가 아닐 때
            if (!_.isEmpty(res.data.profile)) {
              let newProfile = [];
              for (let i = 0; i < Object.keys(res.data.profile).length; i++) {
                const _newProfile = {
                  profileName: res.data.profile[i].profileName,
                  profileImage: res.data.profile[i].profileImage,
                };
                newProfile.push(_newProfile);
              }
              window.alert("환영합니다");
              history.replace({
                pathname: "/manage_profiles",
                props: { history: true },
              });
              dispatch(setProfile(newProfile));
            } else {
              window.alert("환영합니다");
              history.replace({
                pathname: "/manage_profiles",
                props: { history: true },
              });
            }
          })
          .catch((error) => {
            console.log("프로파일 set중 에러발생", error);
          });
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
          history.replace("/sign_in");
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
          dispatch(setUser(id));
        } else {
          dispatch(logoutFB());
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
  return function (dispatch) {
    sessionStorage.removeItem("profile");
    localStorage.removeItem("id");
    dispatch(logOut());
    history.replace("/");
  };
};

const makeProfileFB = (name, image) => {
  return function (dispatch, getState, { history }) {
    let randomNum = Math.floor(Math.random() * 8);
    const accessToken1 = getCookie("is_login");

    instance
      .post(
        "/profile/create",
        {
          profileName: name,
          profileImage: randomProfileImage[randomNum],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken1}`,
            email: localStorage.getItem("id"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        const newProfile = {
          profileName: name,
          profileImage: randomProfileImage[randomNum],
        };
        dispatch(createProfile(newProfile));
      })
      .catch((error) => {
        console.log("axios 통신에러 발생", error);
      });
  };
};

const checkProfileFB = (select) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/profile/checkin", {
        profileName: select,
        email: localStorage.getItem("id"),
      })
      .then((res) => {
        console.log(res.data);
        const profileData = {
          want: [...res.data.checkinProfile.want],
          listRelay: [...res.data.checkinProfile.listRelay],
          complete: [...res.data.checkinProfile.complete],
          doneevaluation: [...res.data.checkinProfile.doneEvaluation],
        };
        sessionStorage.setItem("profileName", select);
        sessionStorage.setItem(
          "cur_profile",
          JSON.stringify(res.data.checkinProfile)
        );
        dispatch(selectProfile(select, profileData));
        history.replace("/browse/video");
      })
      .catch((error) => {
        console.log("프로파일 선택 axios 통신중 에러발생");
        console.log(error.code, error.message);
      });
  };
};

const getProfileFB = () => {
  return function (dispatch, getState, { history }) {
    const accessToken1 = getCookie("is_login");

    console.log("엑세스토큰", `${accessToken1}`);
    instance
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${accessToken1}`,
          email: localStorage.getItem("id"),
        },
      })
      .then((res) => {
        console.log(res.data.profile);

        // res.data.profile이 빈 obj가 아닐 때
        if (!_.isEmpty(res.data.profile)) {
          let newProfile = [];
          for (let i = 0; i < Object.keys(res.data.profile).length; i++) {
            const _newProfile = {
              profileName: res.data.profile[i].profileName,
              profileImage: res.data.profile[i].profileImage,
            };
            newProfile.push(_newProfile);
          }
          dispatch(setProfile(newProfile));
        }
      })
      .catch((error) => {
        console.log("프로파일 set중 에러발생", error);
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
      sessionStorage.removeItem("profileName");
      sessionStorage.removeItem("cur_profile");
      localStorage.removeItem("id");
      state.user = null;
      state.is_login = false;
      deleteCookie("is_login");
    },
    [SET_PROFILE]: (state, action) => {
      return { ...state, profile: action.payload.info };
    },
    [SELECT_PROFILE]: (state, action) => {
      // sessionStorage(action.payload.user, action.payload.info);
      state.cur_profile = { [action.payload.user]: action.payload.info };
    },
    [CREATE_PROFILE]: (state = initialState, action) => {
      const _new_profile = [...state.profile, action.payload.profile];
      return { ...state, profile: _new_profile };
    },
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
  getProfileFB,
};

export { actionCreator };
