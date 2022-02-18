import React from "react";
import "../css/App.css";

import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";

/* PAGE */
import Landing from "../components/Landing";
import Signin from "../pages/Signin";
import ManageProfile from "../pages/ManageProfile";
import Main from "../pages/Main";
import Watched from "../pages/Watched";
import Wishes from "../pages/Wishes";
import Ratings from "../pages/Ratings";

/* COMPONENT */
import { Header, Sidebar, Footer } from "../components/index";

function App() {
  /*로그인유지 : useEffect*/
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="container">
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Landing} />
          <Route path="/manage_profiles" exact component={Main} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/manage_profiles" exact component={ManageProfile} />
          <Route path="/browse/video" exact component={Main} />
          <Route path="/wishes" exact component={Wishes} />
          <Route path="/watchings" exact component={Watchings} />
          <Route path="/watched" exact component={Watched} />
          <Route path="/ratings" exact component={Ratings} />
        </ConnectedRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
