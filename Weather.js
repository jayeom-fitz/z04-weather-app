import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons  } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#00416A", "#799F0C", "#FFE000"],
    mention: ""
  },
  Drizzle: {
    iconName: "weather-pouring",
    gradient: ["#2193b0", "#2193b0"],
    mention: ""
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#a8c0ff", "#3f2b96"],
    mention: ""
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#bdc3c7", "#2c3e50"],
    mention: ""
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    mention: ""
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: "",
    mention: ""
  },  
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#8e9eab", "#eef2f3"],
    mention: ""
  },
  Dust: {
    iconName: "weather-hazy",
    gradient: ["#636363", "#a2ab58"],
    mention: ""
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    mention: ""
  },
  Sand: {
    iconName: "weather-hazy",
    gradient: ["#666600", "#999966"],
    mention: ""
  },
  Ash: {
    iconName: "weather-hazy",
    gradient: ["#606c88", "#3f4c6b"],
    mention: ""
  },
  Squall: {
    iconName: "weather-hail",
    gradient: ["#0f0c29", "#504b83", "#44445e"],
    mention: ""
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#000000", "#777777", "#333333"],
    mention: ""
  },
  Clear: {
    iconName: "weather-sunny",
    gradient:  ["#f12711", "#f5af19"],
    mention: ""
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#2c3e50", "#bdc3c7"],
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
  },

  title: {
    color: 'white',
    fontWeight: "500",
    fontSize: 36,
  },

  subtitle: {
    color: 'white',
    fontWeight: "300",
    fontSize: 24,
  },
});