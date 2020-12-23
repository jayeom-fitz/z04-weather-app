import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "3fbb90dddb217cfc9d5815d9df974453";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  
  getWeather = async (latitude, longitude) => {
    try {
      const {data} = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      console.log(data);
    } catch(error) {
      Alert.alert("Error.");
    }
  };
  
  getLocation = async () => {
    try{
      await Location.requestPermissionsAsync();
      const { 
        coords: { latitude, longitude } 
      } = await  Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch(error) {
      Alert.alert("Can't find your Location.");
    }
  };
  
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null ;
  };
}
