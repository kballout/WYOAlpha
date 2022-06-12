import {
    StyleSheet,
    Text,
    Image,
    View,
    ImageBackground,
    SafeAreaView,
  } from "react-native";
  import { TouchableOpacity } from "react-native";
  import UserInput from "../../common/components/UserInput";
  import Spinner from "../../common/components/Spinner";
  import { commonStyles } from "../../common/styles";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  import { useForm } from "react-hook-form";
  import { useSelector, useDispatch } from "react-redux";
  import { login, resetState } from "../../redux/authReducer";
  import { useEffect } from "react";
  
  //Login screen
  const JobCreation1 = ({ navigation }) => {
  

    //Set variables for user input
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

   //Submit the user input
  const submitForm = (data) => {
    //check if birthday is over 18
    if (new Date().getFullYear() - date.getFullYear() >= 18) {
      data.type = "Provider";
      data.dateOfBirth = date;
      data.profilePictureURL = '';
      data.firstName = data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1)
      data.lastName = data.lastName.charAt(0).toUpperCase() + data.lastName.slice(1)
      dispatch(register(data))
      navigation.navigate('ConfirmEmail',{name: 'ConfirmEmail'})
    } else {
      setBirthdayError("You must be 18 or older to use this app");
    }
  };

    return (
      <KeyboardAwareScrollView>
        <ImageBackground
          style={commonStyles.background}
          source={require("../../assets/wyo_background.png")}
        >
          <SafeAreaView style={commonStyles.safeContainer}>
             <Text style={styles.header2}>
               Please provide information for your job request
            </Text>

            <View style={styles.inputContainer}>
              {/* job title */}
              <View style={styles.field}>
                 <UserInput
                style={styles.input}
                icon="user-circle"
                location="FontAwesome"
                name="Job title"
                rules={{ required: "Job title is Required" }}
                placeholder={"Job title"}
                control={control}
              />
              </View>

              {/* address */}
            <View style={styles.field}>
              <UserInput
                style={styles.input}
                icon="address-card-o"
                location="FontAwesome"
                name="address"
                rules={{ required: "Address is Required" }}
                placeholder={"Address"}
                control={control}
              />
              {/* city */}
              <UserInput
                style={styles.input}
                icon="location-city"
                location="MaterialIcons"
                name="city"
                rules={{
                  required: "City is Required",
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Only letters are allowed in the city name",
                  }}}
                placeholder={"City"}
                control={control}
              />
              {/* zip code */}
              <UserInput
                style={{ fontSize: 16 }}
                name="zipCode"
                icon="location-arrow"
                location="FontAwesome"
                keyboardType="numeric"
                maxLength={5}
                rules={{
                  required: "Zip Code is Required",
                  pattern: {
                    value: /\d{5}/,
                    message: 'Zip code must be a valid 5 digit code'
                  }
                }}
                placeholder={"Zip Code"}
                control={control}
              />
            </View>

            <View style={[styles.field, {flexGrow: 1}]}>
            <Text style={{fontFamily: "Montserrat-Bold"}}>Please provide a description of job request (maximum 350 words)</Text>
              {/* Description */}
              <UserInput
                style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
                name="description"
                multiline
                rules={{ 
                    required: "Description is required",
                    maxLength:{
                        value: 350,
                        message: 'Description must be 350 words or less'
                    } 
                  }}
                placeholder={"Description"}
                control={control}
              />
            </View>
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Registration", { name: "Registration" })
              }
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSubmit(submitForm)}
              style={styles.button}
            >
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>

          </SafeAreaView>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    header2: {
    fontFamily: "Montserrat-Regular",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  inputContainer: {
    alignItems: "center",
    borderColor: "rgba(0,221,255,0.7)",
    borderWidth: 1,
    backgroundColor: "rgba(0,221,255,0.7)",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    width: 300,
    height: 32,
    fontSize: 16,
  },
  field: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "Black",
    paddingBottom: 5,
    justifyContent: "space-evenly",
  },
    buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
   button: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "black",
    borderRadius: 10,
    marginVertical: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  btnText: {
    color: "white",
    fontFamily: "Montserrat-Bold",
    fontSize: 25,
  },
  });
  
  export default JobCreation1;
  