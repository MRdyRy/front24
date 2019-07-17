import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Logo from "../compt/Logo";
import Form from "../compt/Form";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  signup() {
    Actions.home();
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Belum punya Akun?</Text>
          <TouchableOpacity onPress={this.signup}>
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
    color: "#AAA",
    fontSize: 16
  },

  signupButton: {
    color: "#1bac04",
    fontSize: 16,
    fontWeight: "500"
  }
});
