import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@rneui/themed";
import { RNCarousel } from "react-native-carousel-cards";
import Icon from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import Category from "./Category";
import axios from "axios";

const data = [
  {
    id: 1,
    name: "Fresh Fruits",
    position: "CEO",
    image: "https://cdn-icons-png.flaticon.com/512/3194/3194766.png",
  },
  {
    id: 1,
    name: "Fresh Vegitable",
    position: "CTO",
    image: "https://cdn-icons-png.flaticon.com/512/2805/2805947.png",
  },
  {
    id: 2,
    name: "Soft Drinks & Juices",
    position: "Creative designer",
    image: "https://bootdey.com/img/Content/avatar/avatar6.png",
  },
  {
    id: 3,
    name: "BiscuitsSS",
    position: "Front-end dev",
    image: "https://bootdey.com/img/Content/avatar/avatar5.png",
  },
  {
    id: 4,
    name: "Srick Tree",
    position: "Backend-end dev",
    image: "https://bootdey.com/img/Content/avatar/avatar4.png",
  },
  {
    id: 5,
    name: "John Doe",
    position: "Creative designer",
    image: "https://bootdey.com/img/Content/avatar/avatar3.png",
  },
  {
    id: 6,
    name: "John Doe",
    position: "Manager",
    image: "https://bootdey.com/img/Content/avatar/avatar2.png",
  },
  {
    id: 8,
    name: "John Doe",
    position: "IOS dev",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png",
  },
  {
    id: 9,
    name: "John Doe",
    position: "Web dev",
    image: "https://bootdey.com/img/Content/avatar/avatar4.png",
  },
];

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState(null);

  const updateSearch = (search) => {
    setSearch(search);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" +
          location.coords.latitude +
          "&lon=" +
          location.coords.longitude +
          "&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29"
      )
      .then((response) => {
        console.log(response.data.city.name);
        setCity(response.data.city.name);
        // text = JSON.stringify(response.data);
        // console.log("text",text)
      });
    // text = JSON.stringify(response.data);

    // console.log(location.coords.latitude)
  }

  return (
    <View>
      <SafeAreaView>
        <Text>HomeScreen</Text>
        <SearchBar
          placeholder="Search any thing"
          lightTheme
          containerStyle={styles.search}
          inputContainerStyle={styles.inputContainerStyle}
          onChangeText={updateSearch}
          value={search}
        />
        <View style={styles.location}>
          <Text> </Text>
          <Icon name="location" size={20}></Icon>
          <Text style={{ fontWeight: "500" }}> Delivering to {city}</Text>
        </View>
        <View>
          <RNCarousel
            data={[
              { url: "https://i.postimg.cc/pT8vsnv2/Rectangle-11.png" },
              {
                url: "https://blog.grabon.in/wp-content/uploads/2021/07/Online-Grocery-Stores-in-india.jpg",
              },
              {
                url: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618548899692/groceries-offers.jpg",
              },
            ]}
            height={150}
          />
        </View>

        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={data}
            horizontal={false}
            numColumns={3}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("CategoryProduct", {
                      itemId: item.name,
                    });
                  }}
                >
                  <View style={styles.card}>
                    <Image
                      style={styles.userImage}
                      source={{ uri: item.image }}
                    />
                  </View>
                  <View
                    style={{ alignContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.itemtext}> {item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  search: {
    margin: 10,
    backfaceVisibility: "hidden",
    // height:19
  },
  inputContainerStyle: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 1,
    height: 35,
  },
  location: {
    margin: 4,
    flexDirection: "row",
  },
  container: {
    //   flex:1,
    marginTop: 10,
  },

  /*** card *****/
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,

    marginVertical: 3,
    backgroundColor: "white",
    //   flexBasis: '46%',
    marginHorizontal: 8,
    height: 90,
    width: 105,
    borderRadius: 10,
  },

  userImage: {
    height: 80,
    width: 85,

    alignSelf: "center",

    margin: 5,
  },

  itemtext: {
    fontSize: 12,
    fontWeight: "500",
  },
});
