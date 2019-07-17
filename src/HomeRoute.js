import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Emas1st from "./pages/Emas1st";
import Emas2nd from "./pages/Emas2nd";
import Home from "./pages/Home";

export default class HomeRoute extends Component {
  render() {
    return (
      <Router>
        <Scene
          key="beranda"
          hideNavBar={true}
          component={Home}
          title="Home"
          initial={true}
        />
        <Stack>
          <Scene key="tabEmas" component={Emas1st} title="Tabungan Emas" />
          <Scene
            key="inqEmas"
            component={Emas2nd}
            title="Inquiry Harga Emas"
            initial={true}
          />
        </Stack>
      </Router>
    );
  }
}
