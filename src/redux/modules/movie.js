import { createAction, handleActions } from "redux-actions";
import axios from "axios";

import instance from "../../shared/request";

// actions
const LOAD_MOVIE = "LOAD_MOVIE";
// 디테일은 하나씩 불러와야함
const SET_MOVIE_DETAIL = "SET_MOVIE_DETAIL";

// Action Creators
const loadMovie = createAction(LOAD_MOVIE, (movie_list) => ({ movie_list }));
const setMovieDetail = createAction(SET_MOVIE_DETAIL, (movie) => ({ movie }));

// initialState
const initialState = {
  movie_list: [],
  detail_movie_list: [],
  is_loading: false,
};

//  middleware Actions
const allListM = () => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/content/list", {
        profileName: "",
        // listRelay랑 want null 일경우 처리 필요
        listRelay: [
          {
            movieId: "",
          },
        ],
        want: [],
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
    instance
      .post(`/content/detail/:${movieId}`, { movieId: movieId })
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
        profileName: "",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => console.log(res));
  };
};

export default handleActions(
  {
    [LOAD_MOVIE]: (state = initialState, action = {}) => {
      return { ...state, movie_list: action.payload.movie_list };
    },
    [SET_MOVIE_DETAIL]: (state, action) => {
      return { ...state, detail_movie_list: action.payload.movie };
    },
  },
  initialState
);

// action creator export
const actionCreator = {
  allListM,
  detailListM,
  addWishesM,
};

export { actionCreator };
