import { StyleSheet, Text, View, Image } from "react-native";
import MainButton from "./src/components/MainButton";
import MainLogo from "./src/components/MainLogo";
import MainInput from "./src/components/MainInput";

const Bai6_Login = () => (
  <View style={styles.main}>
    <Image source={require("./assets/login.png")} />

    <MainLogo txt="Welcome to your" />

    <Text style={{ marginTop: 30, textAlign: "center" }}>
      Welcome to your app. Build your own social network in minutes.
    </Text>

    <MainButton
      backgroundColor="#3975e8"
      borderColor="#3975e8"
      txtcolor="white"
      txt="Log In"
    />

    <MainButton
      backgroundColor="white"
      borderColor="#3975e8"
      txtcolor="#3975e8"
      txt="Sign Up"
    />
  </View>
);

const Bai6_Signup = () => (
  <View style={{ marginTop: 70 }}>
    <MainLogo txt="Create new account" />

    <MainInput placeholder="Full Name" />
    <MainInput placeholder="Phone Number" />
    <MainInput placeholder="E-mail Adress" />
    <MainInput placeholder="Password" />

    <View
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <MainButton
        backgroundColor="#3b5998"
        borderColor="#3b5998"
        txtcolor="white"
        txt="Sign Up"
      />
    </View>
  </View>
);

const Bai6_Signin = () => (
  <View style={{ marginTop: 70 }}>
    <MainLogo txt="Sign in" />

    <MainInput placeholder="E-mail or Phone Number" />
    <MainInput placeholder="Password" />

    <View
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <MainButton
        backgroundColor="#3975e8"
        borderColor="#3975e8"
        txtcolor="white"
        txt="Log In"
      />

      <Text style={{ fontSize: 20, color: "grey", marginTop: 30 }}>OR</Text>

      <MainButton
        backgroundColor="#3b5998"
        borderColor="#3b5998"
        txtcolor="white"
        txt="Facebook Login"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 700,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Bai6_Signup;
