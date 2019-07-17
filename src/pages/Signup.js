import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Logo from "../compt/Logo";
import Form from "../compt/Form";
import { Actions } from "react-native-router-flux";

export default class Signup extends Component {
  goBack() {
    Actions.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Signup" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Belum punya akun?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}> Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },

  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16
  },

  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  }
});
