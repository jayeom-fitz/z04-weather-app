import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";
import { Ionicons, MaterialCommunityIcons  } from "@expo/vector-icons";

export default function Weather({temp, condition}) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Ionicons name="rainy" size={84} color="black" />
        <Text style={styles.temp}>
          {temp}
          <MaterialCommunityIcons name="temperature-celsius" size={36} color="black" />
        </Text>
      </View>
      <View style={styles.halfContainer}>

      </View>
    </View>
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
    fontSize: 36
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});