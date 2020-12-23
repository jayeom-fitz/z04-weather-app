import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons  } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: "",
    mention: ""
  },
  Drizzle: {
    iconName: "weather-pouring",
    gradient: "",
    mention: ""
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: "",
    mention: ""
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: "",
    mention: ""
  },
  Mist: {
    iconName: "",
    gradient: "",
    mention: ""
  },
  Smoke: {
    iconName: "",
    gradient: "",
    mention: ""
  },  
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#8e9eab", "#eef2f3"],
    mention: ""
  },
  Dust: {
    iconName: "",
    gradient: "",
    mention: ""
  },
  Fog: {
    iconName: "weather-fog",
    gradient: "",
    mention: ""
  },
  Sand: {
    iconName: "",
    gradient: "",
    mention: ""
  },
  Ash: {
    iconName: "",
    gradient: "",
    mention: ""
  },
  Squall: {
    iconName: "weather-hail",
    gradient: "",
    mention: ""
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: "",
    mention: ""
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: "",
    mention: ""
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: "",
    mention: ""
  }
};

export default function Weather({temp, condition}) {
  return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
      <StatusBar barStyle="light-content" />
      
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons 
          name={weatherOptions[condition].iconName} 
          size={84} color="white" />
        <Text style={styles.temp}>
          {temp}
          <MaterialCommunityIcons name="temperature-celsius" size={36} color="white" />
        </Text>
      </View>
      <View style={styles.halfContainer}>

      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm", 
    "Drizzle", 
    "Rain", 
    "Snow", 
    "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado",
    "Clear", 
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  temp: {
    fontSize: 36,
    fontWeight: "600",
    color: 'white'
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});