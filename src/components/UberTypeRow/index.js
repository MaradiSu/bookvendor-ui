import React from "react";
import { View, Image, Text } from "react-native";
import styles from './styles.js';

import Ionicons from "react-native-vector-icons/Ionicons";

const UberTypeRow = (props) => {
  const {type} = props;

  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/sample1-Copy.png');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/images/sample1-Copy.png');
    }
    return require('../../assets/images/sample1-Copy.png');
  }

  return (
    <View style={styles.container}>

      {console.log(type.uri)}
      <Image
        style={styles.image}
        source={type.uri}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name={'book'} size={16} />
          3
        </Text>
        <Text style={styles.time}>
          8:03PM drop off
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>{type.name}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
