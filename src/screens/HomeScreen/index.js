import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './styles.js'
import NewOrderPopup from "../../components/NewOrderPopup";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const origin = {latitude:12.96652374097535, longitude: -16.260845};
const destination = {latitude: 12.96652374097535, longitude:77.6758468};
const GOOGLE_MAPS_APIKEY = 'AIzaSyAC3SHgmHPIYDFhySZqnrO2S05e2m6WXho';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [myPosition, setMyPosition] = useState(null);
  const [order, setOrder] = useState(null)
  const [newOrder, setNewOrder] = useState({
    id: '1',
    type: 'suresh',

    originLatitude: 12.96652374097537,
    oreiginLongitude:77.63448163997789,
     
    destLatitude: 12.959749457580495,
    destLongitude: 77.65452362094445,

    user: {
      rating: 4.8,
      name: 'suresh maradi',
    }
  })

  const onDecline = () => {
    setNewOrder(null);
  }

  const onAccept = (newOrder) => {
    setOrder(newOrder);
    setNewOrder(null);
  }

  const onGoPress = () => {
    setIsOnline(!isOnline);
  }

  const onUserLocationChange = (event) => {
    setMyPosition(event.nativeEvent.coordinate);
  }

  const onDirectionFound = (event) => {
    console.log("Direction found: ", event);
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 0.2,
        isFinished: order.pickedUp && event.distance < 0.2,
      })
    }
  }

  const getDestination = () => {
    if (order && order.pickedUp) {
      return {
        latitude: order.destLatitude,
        longitude: order.destLongitude,
      }
    }
    return {
      latitude: order.originLatitude,
      longitude: order.oreiginLongitude,
    }
  }

  const renderBottomTitle = () => {
    if (order && order.isFinished) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center', backgroundColor: '#cb1a1a', width: 200, padding: 10,  }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Accept and Exchange {order.type}</Text>
          </View>
          <Text style={styles.bottomText}>{order.user.name}</Text>
        </View>
      )
    }

    if (order && order.pickedUp) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View style={{ backgroundColor: '#d41212', marginHorizontal: 10, width: 30, height: 30, alignItems:'center', justifyContent: 'center', borderRadius: 20}}>
              <FontAwesome name={"user"} color={"white"} size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
          </View>
          <Text style={styles.bottomText}>On the way to {order.user.name}</Text>
        </View>
      )
    }

    if (order) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View style={{ backgroundColor: '#1e9203', marginHorizontal: 10, width: 30, height: 30, alignItems:'center', justifyContent: 'center', borderRadius: 20}}>
              <FontAwesome name={"user"} color={"white"} size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
          </View>
          <Text style={styles.bottomText}>{order.user.name}'s request</Text>
        </View>
      )
    }
    if (isOnline) {
      return (
        <Text style={styles.bottomText}>You're online</Text>
      )
    }
    return (<Text style={styles.bottomText}>You're offline</Text>);
  }

  return (
    <View>
      <MapView
        style={{width: '100%', height: Dimensions.get('window').height - 150}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude:12.96652374097535,
          longitude: 77.63448163997789,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        {order && (
          <MapViewDirections
            origin={myPosition}
            onReady={onDirectionFound}
            destination={getDestination()}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
          />
        )}
      </MapView>

      <Pressable
        onPress={() => console.warn('Chat Support')}
        style={styles.balanceButton}>
        <Text style={styles.balanceText}>
          <Text style={{ color: 'green' }}></Text>
          {' '}
          chat
        </Text>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {top: 10, left: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {top: 10, right: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('lo')}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={onGoPress}
        style={styles.goButton}>
        <Text style={styles.goText}>
          {isOnline ? 'END' : 'GO'}
        </Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name={"md-stats-chart"} size={30} color="#4a4a4a"/>
          {renderBottomTitle()}
      
      </View>

      {newOrder && <NewOrderPopup
        newOrder={newOrder}
        duration={2}
        distance={0.5}
        onDecline={onDecline}
        onAccept={() => onAccept(newOrder)}
      />}
    </View>
  );
};

export default HomeScreen;
