import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons  } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house"
  },
  Drizzle: {
    iconName: "weather-pouring",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no."
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on."
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "Smoke",
    subtitle: "..."
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
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "Fog",
    subtitle: "..."
  },
  Sand: {
    iconName: "weather-hazy",
    gradient: ["#666600", "#999966"],
    title: "Sand",
    subtitle: "Thanks a lot China 🖕🏻"
  },
  Ash: {
    iconName: "weather-hazy",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Ash",
    subtitle: "..."
  },
  Squall: {
    iconName: "weather-hail",
    gradient: ["#0f0c29", "#504b83", "#44445e"],
    title: "Squall",
    subtitle: "..."
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#000000", "#777777", "#333333"],
    title: "Tornado",
    subtitle: "Is it Real...?"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient:  ["#FF7300", "#FEF253"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, fucking boring"
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