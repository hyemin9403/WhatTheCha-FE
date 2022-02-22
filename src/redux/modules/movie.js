import { createAction, handleActions } from "redux-actions";
import axios from "axios";

import instance from "../../shared/request";

// actions
const LOAD_MOVIE = "LOAD_MOVIE";

// Action Creators
const loadMovie = createAction(LOAD_MOVIE, (movie_list) => ({ movie_list }));

// initialState
const initialState = {
  movie_list: [],
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
  return function (dispatch, getState, { history }) {
    instance
      .post(`/content/detail/:${movieId}`, { movieId })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };
};

export default handleActions(
  {
    [LOAD_MOVIE]: (state = initialState, action = {}) => {
      return { ...state, movie_list: action.payload.movie_list };
    },
  },
  initialState
);

// action creator export
const actionCreator = {
  allListM,
  detailListM,
};

export { actionCreator };
