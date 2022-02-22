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
  is_login: true,
};

//  middleware Actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    //axious id, pwd전송/ 토큰요청
    console.log("id : " + id,  "pwd : " + pwd)
    
    instance
      .post("/users/login", {
        "email": id,
        "password": pwd,
      })
      .then((res) => {
<<<<<<< HEAD
          const accessToken = res.data.token;
          console.log(accessToken)
          setCookie("is_login", accessToken);
          instance
          .get("/profile", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            console.log("프로파일", res)
            setUser(res.data.profile);
          })
          .catch((error) => {
            console.log("프로파일 set중 에러발생", error);
          });
          sessionStorage.setItem("profile", accessToken);
          window.alert("환영합니다");
          history.replace("/manage_profiles");
=======
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
                  history.push("/manage_profiles");
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
>>>>>>> 3829c0c06fbf9dbfb82d76f57787f986c173ad85
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
        "email": email,
        "password": pwd,
        "confirmpassword": pwd
      })
      .then((res) => {
        console.log(res);
        if (res.data.ok) {
          console.log("회원가입 성공");
<<<<<<< HEAD
          window.alert(
            "회원가입성공"
          );
          history.replace("/sign_in")
=======
          window.alert("회원가입성공");
          history.replace("/login");
>>>>>>> 3829c0c06fbf9dbfb82d76f57787f986c173ad85
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

<<<<<<< HEAD
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
        data: formData
      },{
        headers: {
          "Content-Type": `multipart/form-data`,
        }
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log("axios 통신에러 발생", error)
      })
    };
}
=======
const makeProfileFB = () => {
  return function (dispatch, getState, { history }) {};
};
>>>>>>> 3829c0c06fbf9dbfb82d76f57787f986c173ad85

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
