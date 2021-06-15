import React from "react";
import { View, Text, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from './styles.js';

const NewOrderPopup = ({ newOrder, onAccept, onDecline, duration, distance }) => {

  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineButton}>
        <Text style={styles.declineText}>Decline</Text>
      </Pressable>

      <Pressable onPress={onAccept} style={styles.popupContainer}>

        <View style={styles.row}>
          <Text style={styles.uberType}>{newOrder.type}</Text>

        </View>
        <View style={styles.row}>
         

          <Text style={styles.uberType}>
            <AntDesign name={"user"} size={18}/>
            {newOrder.user.name}
          </Text>
        </View>
        <Text style={styles.minutes}>Dur:{duration} min</Text>
        <Text style={styles.distance}>At the distance of : {distance} mi</Text>

      </Pressable>
    </View>
  );
};

export default NewOrderPopup;
