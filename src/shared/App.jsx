import React from "react";
import "../css/App.css";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch } from "react-redux";
import { getCookie } from "./cookie";
import { actionCreator as userActions } from "../redux/modules/user";

/* PAGE */
import Landing from "../pages/Landing";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ManageProfile from "../pages/ManageProfile";
import Main from "../pages/Main";
import Watched from "../pages/Watched";
import Watchings from "../pages/Watchings";
import Wishes from "../pages/Wishes";
import Ratings from "../pages/Ratings";

/* COMPONENT */
import { Header, Sidebar, Footer } from "../components/index";
import Layout from "../pages/Layout";

function App() {
  const dispatch = useDispatch();
  const token = getCookie("is_login");

  React.useEffect(() => {
    if (!token) {
      dispatch(userActions.logOut);
      return;
    }
    dispatch(userActions.loginCheckFB(token));
  }, []);

  return (
    <div className="App">
      <Header />
      <ConnectedRouter history={history}>
        <div className="container">
          <Sidebar />
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/manage_profiles" exact component={ManageProfile} />
          <Layout>
            <Route path="/browse/video" exact component={Main} />
            <Route path="/wishes" exact component={Wishes} />
            <Route path="/watchings" exact component={Watchings} />
            <Route path="/watched" exact component={Watched} />
            <Route path="/ratings" exact component={Ratings} />
          </Layout>
          <Footer />
        </div>
      </ConnectedRouter>
    </div>
  );
}

export default App;
