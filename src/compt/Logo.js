import React, { Component } from "react";

import { StyleSheet, Text, View, Image } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 70 }}
          source={require("../images/pegadaian-logos.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
