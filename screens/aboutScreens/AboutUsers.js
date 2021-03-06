import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { commonStyles } from "../../common/styles";

//Information screen about the users
const AboutUsers = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView>
    <ImageBackground
      style={commonStyles.background}
      source={require("../../assets/wyo_background.png")}
    >
      <SafeAreaView style={commonStyles.safeContainer}>
        <Text style={styles.header1}>User Information</Text>
        <View style={styles.logoContainer}>
        <Image
          style={commonStyles.logo}
          source={require("../../assets/Logo.png")}
        />
        </View>
        <Text style={styles.header2}>About the User</Text>

        <Text style={styles.header3}>While You’re Out Services LLC, offers users the opportunity to connect with someone in their local community to come and sit at their home or place of business to wait for service providers. We wait for you. Because you have things to do. Schedule a WYO provider today.</Text>
      </SafeAreaView>
    </ImageBackground>
    </KeyboardAwareScrollView>
  );
};


const styles = StyleSheet.create({
  header1: {
    fontFamily: "Montserrat-Bold",
    fontSize: 50,
    textAlign: "center",
    marginTop: 10,
  },
  header2: {
    fontFamily: "Montserrat-Regular",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: -15,
    alignSelf: 'center',
    borderBottomWidth: 1
  },
  header3: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: -15,
    marginTop: 35,
    marginHorizontal: 10,
  },
  logoContainer: {
    alignItems: "center",
  },
});

export default AboutUsers;