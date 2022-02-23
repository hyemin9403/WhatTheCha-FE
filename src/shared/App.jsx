import React from "react";
import "../css/App.css";
import { Route, useLocation } from "react-router-dom";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
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
import Video from "../pages/Video"
import Spinner from "../components/Spinner";

/* COMPONENT */
import { Header, Sidebar, Footer } from "../components/index";
import Layout from "../pages/Layout";

function App() {
  const is_login = useSelector((state) => state.user.is_login);
  const hitory = history.location.pathname;
  const dispatch = useDispatch();
  const token = getCookie("is_login");
  const id = sessionStorage.getItem("id");
  const is_loaded = useSelector((state) => state.movie.is_loading);

  React.useEffect(() => {
    if (!token) {
      dispatch(userActions.logoutFB());
      return;
    }
    dispatch(userActions.loginCheckFB(token, id));
  }, []);
  return (
    <div className="App">
      <Header/>
      <ConnectedRouter history={history}>
        <div className="container">
          <Sidebar />
          <Route path="/" exact component={Landing} />
          <Route path="/sign_up" exact component={Signup} />
          <Route path="/sign_in" exact component={Signin} />
          <Route path="/manage_profiles" exact component={ManageProfile} />
          <Layout>
            <Route path="/browse/video" exact component={Main} />
            <Route path="/wishes" exact component={Wishes} />
            <Route path="/watchings" exact component={Watchings} />
            <Route path="/watched" exact component={Watched} />
            <Route path="/ratings" exact component={Ratings} />
            {/* {is_loaded && <Spinner />} */}
            <Footer />
          </Layout>
          <Route path="/video" exact component={Video} />
        </div>
      </ConnectedRouter>
    </div>
  );
}

export default App;
