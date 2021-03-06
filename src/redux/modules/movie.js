import { createAction, handleActions } from "redux-actions";
import axios from "axios";

import instance from "../../shared/request";

// actions
const LOAD_MOVIE = "LOAD_MOVIE";
const SET_MOVIE_DETAIL = "SET_MOVIE_DETAIL";
const SET_WANT = "SET_WANT";
const SET_EVAL = "SET_EVAL";
const SET_RELAY = "SET_RELAY";
const SET_COMPLETE = "SET_COMPLETE";
const LOADING = "LOADING";

// Action Creators
const loadMovie = createAction(LOAD_MOVIE, (movie_list) => ({ movie_list }));
const setMovieDetail = createAction(SET_MOVIE_DETAIL, (movie) => ({ movie }));
const setWantList = createAction(SET_WANT, (want_list) => ({ want_list }));
const setEval = createAction(SET_EVAL, (eval_list) => ({ eval_list }));
const setListRelay = createAction(SET_RELAY, (relay_list) => ({ relay_list }));
const setComplete = createAction(SET_COMPLETE, (complete_list) => ({
  complete_list,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// initialState
const initialState = {
  movie_list: [],
  detail_movie_list: [],
  is_loading: false,
};

//  middleware Actions
const allListM = () => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    instance
      .post("/content/list", {
        profileName: sessionStorage.getItem("profileName"),
      })
      .then((res) => {
        console.log(res);
        const movie_list = res.data;
        dispatch(loadMovie(movie_list));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

const detailListM = (movieId) => {
  console.log(movieId, typeof movieId);
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));

    instance
      .post("/content/detail", { movieId: movieId })
      .then((res) => {
        console.log(res);
        const movie_detail = res.data.content;
        dispatch(setMovieDetail(movie_detail));
      })
      .catch((res) => console.log(res));
  };
};

const addWishesM = (movieId) => {
  return function (dispatch, getState, { history }) {
    console.log("addWishesM에서 받았습니다.", movieId);

    const profileName = getState();
    console.log("getState", profileName);

    instance
      .post("/content/detail/movieId/want", {
        movieId: movieId,
        profileName: sessionStorage.getItem("profileName"),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => console.log(res));
  };
};

const setEvalFB = (movieId, score) => {
  return function (dispatch, getState, { history }) {
    const _profileName = sessionStorage.getItem("profileName");
    console.log("점수", score);
    console.log("이름", _profileName);

    instance
      .post("/content/detail/movieId/star", {
        movieId: movieId,
        rate: score,
        profileName: _profileName,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => console.log(res));
  };
};

const getWishesM = () => {
  return function (dispatch, getState, { history }) {
    let _state = getState().movie;
    console.log("state를 불러왔어요", _state);

    instance
      .post("/content/want", {
        profileName: sessionStorage.getItem("profileName"),
      })
      .then((res) => {
        console.log(res);
        _state.movie_list.wantList = res.data.want;
        dispatch(setWantList(_state.movie_list));
      })
      .catch((res) => console.log(res));
  };
};

const getRatingsM = () => {
  return function (dispatch, getState, { history }) {
    let _state = getState().movie;
    console.log(_state.movie_list);
    instance
      .post("/content/doneEvaluation", {
        profileName: sessionStorage.getItem("profileName"),
      })
      .then((res) => {
        console.log(res);
        _state.movie_list.doneEvaluation = res.data.doneEvaluation;
        dispatch(setEval(_state.movie_list));
      })
      .catch((res) => console.log(res));
  };
};

// 다본작품
const getWatchedM = () => {
  return function (dispatch, getState, { history }) {
    let _state = getState().movie;
    console.log(_state.movie_list);

    instance
      .post("/content/complete", {
        profileName: sessionStorage.getItem("profileName"),
      })
      .then((res) => {
        console.log(res);
        _state.movie_list.complete = res.data.complete;
        dispatch(setComplete(_state.movie_list));
      })
      .catch((res) => console.log(res));
  };
};

const getWatchingsM = () => {
  return function (dispatch, getState, { history }) {
    let _state = getState().movie;
    console.log(_state.movie_list);

    instance
      .post("/content/continue", {
        profileName: sessionStorage.getItem("profileName"),
      })
      .then((res) => {
        console.log(res);
        _state.movie_list.listRelay = res.data.listRelay;
        dispatch(setListRelay(_state.movie_list));
      })
      .catch((res) => console.log(res));
  };
};

export default handleActions(
  {
    [LOAD_MOVIE]: (state = initialState, action = {}) => {
      return {
        ...state,
        movie_list: action.payload.movie_list,
      };
    },
    [SET_MOVIE_DETAIL]: (state, action) => {
      return {
        ...state,
        detail_movie_list: action.payload.movie,
      };
    },
    [SET_WANT]: (state, action) => {
      const new_want_list = action.payload.want_list;
      return { ...state, movie_list: new_want_list };
    },
    [SET_EVAL]: (state, action) => {
      const new_eval_list = action.payload.eval_list;

      return { ...state, movie_list: new_eval_list };
    },
    [SET_RELAY]: (state, action) => {
      const new_eval_list = action.payload.relay_list;

      return { ...state, movie_list: new_eval_list };
    },
    [SET_COMPLETE]: (state, action) => {
      const new_eval_list = action.payload.complete_list;

      return { ...state, movie_list: new_eval_list };
    },
    [LOADING]: (state = initialState, action = {}) => {
      return { ...state, is_loading: action.payload.is_loading };
    },
  },
  initialState
);

// action creator export
const actionCreator = {
  allListM,
  detailListM,
  addWishesM,
  getWishesM,
  setEvalFB,
  getRatingsM,
  getWatchedM,
  getWatchingsM,
};

export { actionCreator };
