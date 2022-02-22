import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from 'axios';

import store from "./redux/configureStore";
import Youtube from './service/youtube';
import App from "./shared/App";
import "./css/index.css";

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App youtube={youtube}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
