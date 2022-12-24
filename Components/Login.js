import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const axios = require('axios').default;
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = () => {
    // navigation.replace('Home');
    // axios.get('api link', {
    //     email:email,
    //     password:password

    // })
    //   .then(function (response) {

    //     console.log("login",response.data)
    //     if(response.status==200){
    //         navigation.replace('Home'),
    //         AsyncStorage.setItem('user_id', response.data.id)
    //     } else if(response.status==201) {
    //         alert(response.data)
    //     } else{
    //         console.log("no ")
    //     }
    //   })
    //   .catch(function (error) {
    //   });
    axios
      .post("http://localhost:3000/api/v1/users/login", {
        data: {
          email: email,
          password: password,
        },
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
      .then(function (res) {
        console.log("login", res.data);
        if (res.status == 200) {
          navigation.replace("Home");
          AsyncStorage.setItem("user_id", res.data.id);
        } else if (res.status == 201) {
          console.log(res.data.user);
          alert(res.data);
        } else {
          console.log("no ");
        }
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View>
      <SafeAreaView>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.select({
            ios: () => 0,
            android: () => 2,
          })()}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          //   style={{ flex: 1 }}
          enabled
        >
          <ScrollView>
            <Text style={styles.heading}>Welcome to InMin</Text>
            <Image
              style={styles.image}
              source={require("../assets/onboard.png")}
            />

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your Email"
            />

            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
            />

            <TouchableOpacity style={{ marginLeft: 120 }}>
              <Text style={{ color: "green", fontWeight: "600", margin: 10 }}>
                {" "}
                Forgot Password ?
              </Text>
            </TouchableOpacity>

            <View style={styles.container}>
              <TouchableOpacity style={styles.buttons} onPress={signin}>
                <Text style={styles.buttontext}> Login </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text style={{ color: "green", fontWeight: "600", margin: 10 }}>
                  {" "}
                  Dont have account Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    height: 50,
    margin: 13,
    borderWidth: 2,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 9,
    borderColor: "green",
  },
  buttons: {
    width: 340,
    height: 50,
    backgroundColor: "#5EC401",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttontext: {
    color: "black",
    fontWeight: "500",
    fontSize: 20,
  },
  heading: {
    color: "black",
    fontWeight: "700",
    fontSize: 25,
    margin: 10,
    alignContent: "center",
  },
  image: {
    margin: 30,

    // width: 300,
    // height: 390,
  },
});
