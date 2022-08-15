import React, {useState} from "react";
import {View, TextInput, StyleSheet, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


export default function SearchBar( {fetchWeatherData} ){

    const [cityName, setCityName] = useState("");
    return(
    <View style={styles.searchBar}>
        <TextInput
        placeholder="Enter City Name" 
        value={cityName}
        size="large"
        onChangeText={(text) => setCityName(text)}
        />
        <Icon name="search" size={15} color="black" onPress={() => fetchWeatherData(cityName)}/>
    </View>)
}

const styles = StyleSheet.create({
    searchBar:{
        marginTop: 150,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("screen").width - 60,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 30,
        backgroundColor: "white",
        borderColor: "white",
        paddingHorizontal: 15
    }
});