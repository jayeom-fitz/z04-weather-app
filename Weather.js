import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons  } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "",
    subtitle: ""
  },
  Drizzle: {
    iconName: "weather-pouring",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "",
    subtitle: ""
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "",
    subtitle: ""
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "",
    subtitle: ""
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "",
    subtitle: ""
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: ""
  },  
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  },
  Dust: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "",
    subtitle: ""
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "",
    subtitle: ""
  },
  Sand: {
    iconName: "weather-hazy",
    gradient: ["#666600", "#999966"],
    title: "",
    subtitle: ""
  },
  Ash: {
    iconName: "weather-hazy",
    gradient: ["#606c88", "#3f4c6b"],
    title: "",
    subtitle: ""
  },
  Squall: {
    iconName: "weather-hail",
    gradient: ["#0f0c29", "#504b83", "#44445e"],
    title: "",
    subtitle: ""
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#000000", "#777777", "#333333"],
    title: "",
    subtitle: ""
  },
  Clear: {
    iconName: "weather-sunny",
    gradient:  ["#FF7300", "#FEF253"],
    title: "",
    subtitle: ""
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "",
    subtitle: ""
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
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>
          {weatherOptions[condition].title}
        </Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
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
    fontWeight: "300",
    fontSize: 36,
  },
  subtitle: {
    color: 'white',
    fontWeight: "700",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  }
});