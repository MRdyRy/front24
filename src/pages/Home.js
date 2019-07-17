import React from "react";
import Carousel from "react-native-banner-carousel";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import HomeRoutes from "./../HomeRoute";

const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 160;
const images = [
  "https://www.pegadaian.co.id/uploads/produk/a1f600653bd5794b952c4ad15c11d713_thumb.jpg",
  "https://www.pegadaian.co.id/uploads/produk/e2b811d1e7d157b81721cfd9e40b3aa4_thumb.jpg",
  "https://www.pegadaian.co.id/uploads/produk/c6b5c07490e6d7aeb6c0b9a54d761aa0_thumb.jpg"
];

export default class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  about(x) {
    // Alert.alert();
    HomeRoutes.tabEmas;
  }

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{ width: BannerWidth, height: BannerHeight }}
          source={{ uri: image }}
        />
      </View>
    );
  }
  render() {
    return (
      <View>
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BannerWidth}
          containerCustomStyle={{ flex: 1 }}
          slideStyle={{ flex: 1 }}
        >
          {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.about("Tabungan Emas")}>
            <View style={styles.menuBox}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/dusk/64/000000/gold-bars.png"
                }}
              />
              <Text style={styles.info}>Tabungan Emas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.about("Inquiry Harga")}>
            <View style={styles.menuBox}>
              <Image
                style={styles.icon}
                source={{
                  uri: "https://img.icons8.com/dusk/64/000000/expensive-2.png"
                }}
              />
              <Text style={styles.info}>Inquiry Harga</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.menuBox}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/dusk/64/000000/car.png"
              }}
            />
            <Text style={styles.info}>Amanah</Text>
          </View>
          <View style={styles.menuBox}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/dusk/64/000000/budget.png"
              }}
            />
            <Text style={styles.info}>Mikro</Text>
          </View>
          <View style={styles.menuBox}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/dusk/64/000000/online-store.png"
              }}
            />
            <Text style={styles.info}>MPO</Text>
          </View>
          <View style={styles.menuBox}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/dusk/48/000000/payment-history.png"
              }}
            />
            <Text style={styles.info}>Riwayat</Text>
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <TouchableOpacity>
            <Image
              style={{ width: BannerWidth, height: 200 }}
              source={{
                uri:
                  "https://www.pegadaian.co.id/uploads/slides/3a83d6d926529fbced9e3d8f8dc06eca_thumb.jpg"
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 2 }}>
          <TouchableOpacity>
            <Image
              style={{ width: BannerWidth, height: 155 }}
              source={{
                uri:
                  "https://www.pegadaian.co.id/assets/frontend/img/header/cover-cabang.jpg"
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center"
  // }

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  menuBox: {
    backgroundColor: "#DDD",
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    margin: 5
  },
  icon: {
    width: 60,
    height: 60
  },
  info: {
    fontSize: 13,
    color: "#1bac04"
  }
});
