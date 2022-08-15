import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const CoverScreen = (props)=> {
      const navigation = useNavigation();
      return (
    <View style={styles.container}>
      
          <Image
            source={require("../assets/wat1.png")}
            style={styles.imagecontainer}
            resizeMode="cover"
          />
        <StatusBar barStyle="light-content"/>
        <Text style={styles.text}>Weather</Text>
        <Text style={styles.textt}>Forecast App.</Text>
        <View style={styles.textview}>
        <Text style={styles.texttt}>
          It's the newest weather app that describes the weather of a location, city, country searched for by the user.
        </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SearchWeather")}>
        <View >
          <Text style={styles.buttontext}>Get Started</Text>
        </View>
        </TouchableOpacity>
      </View>
      
      );
    }
  
  
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000133",
      paddingTop: 20,
     
    },
    textview: {
      height: 200,
      width: "90%"
    },
    imagecontainer: {
      height: 250,
      width: "57%",
      alignItems: "center",
      marginTop: 100,
      marginLeft: 70
    },
    image: {
      height: "250",
      width: "30%",
    },
      text: {
        color: "#fcc200",
        fontSize: 50,
        alignItems: "flex-start",
        marginTop: 50,
        fontWeight: "bold",
        padding: 20,
      },
      textt: {
        color: "white",
        fontSize: 45,
        alignItems: "flex-start",
        padding: 20,
        marginTop: -40,
        fontWeight: "bold"
      },
      texttt: {
        color: "white",
        fontSize: 15,
        marginTop: -20,
        alignItems: "baseline",
        alignContent: "space-between",
        padding: 20,
        paddingTop: 15,
      },
      button: {
        padding: 16,
        width: 200,
        alignItems: "center",
        borderRadius: 24,
        backgroundColor: "#fcc200",
        marginBottom: 40,
        marginLeft: 20,
        marginTop: -120
        
      },
      buttontext: {
        color: "white",
        fontSize: 17
      }
  });
    

 export default CoverScreen; 