import React, {useState, useEffect} from "react";
import {View, StyleSheet, ImageBackground, Dimensions, Text,} from "react-native";
import SearchBar from "./SearchBar";
import {hazy, rainy, snowy, sunny} from "../assets/backgrounds/index";


export default function weather({weatherData, fetchWeatherData}){

    const [backgroundImage, setBackgroundImage] = useState(null);
    
    const { 
        weather, 
        name,
        wind: {speed},
        main:{temp, humidity}
    } = weatherData;

    const [{main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImage(main));
    }, [weatherData])

    function getBackgroundImage(weather){
        if(weather === "Snow") return snowy
        if(weather === "Clear") return sunny
        if(weather === "Rain") return rainy
        if(weather === "Haze") return hazy
        return hazy;
    }

    let textColor = backgroundImage !== hazy ? "black" : "white"
    return(
        <View style={styles.container}>
        
    <ImageBackground 
    source={backgroundImage}
    style={styles.backgroundImg}
    resizeMode="cover"
    >
       <SearchBar fetchWeatherData={fetchWeatherData}/>
    <View style={{alignItems: "center"}}>
        <Text style={{...styles.headerText, color: textColor, fontWeight: "bold", fontSize: 46}}>{name}</Text>
        <Text style={{color: textColor, fontWeight: "bold", fontSize: 25}}>{main}</Text>
        <Text style={{color: textColor, fontWeight: "bold", fontSize: 25}}>{temp} °C</Text>
    </View>

    <View style={styles.extraInfo}>
    <View style={styles.info}>
        <Text style={{fontSize: 18, color: "white"}}>Humidity</Text>
        <Text style={{fontSize: 18, color: "white"}}>{humidity}%</Text>
    </View>

    <View style={styles.info}>
        <Text style={{fontSize: 18, color: "white"}}>Wind Speed</Text>
        <Text style={{fontSize: 18, color: "white"}}>{speed} m/s</Text>
    </View>
    </View>
    </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%"
       
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get("screen").width
    },
    headerText:{
        fontSize: 36,
        marginTop: 18
    },
    extraInfo:{
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between",
        padding: 10
    },
    info:{
        width: Dimensions.get("screen").width/2.5,
        backgroundColor: "rgba(0,0,0, 0.5)",
        padding: 10,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    }
})