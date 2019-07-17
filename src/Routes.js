import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Emas1st from "./pages/Emas1st";
import Emas2nd from "./pages/Emas2nd";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="signup" component={Signup} title="Register" />
          <Scene key="home" component={Home} title="Beranda" />
          <Scene key="profile" component={Profile} title="Profile" />
          <Scene key="about" component={About} title="About" />
          <Scene
            key="inquiry"
            component={Emas1st}
            title="Inquiry Harga Beli Emas"
          />
          <Scene key="topup" component={Emas2nd} title="TopUp Tabungan Emas" />
        </Stack>
      </Router>
    );
  }
}
