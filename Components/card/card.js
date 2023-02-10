import React, {useState} from 'react';
import {Button, View, Text, Image} from 'react-native';
import styles from './CardStyle';
const Card = () => {

  return (
    <View style={styles.container} >
        <Image
          style={styles.tinyLogo}
          source={{uri:'../img/background.png'}}
        />
        <Text>Base experience:  </Text>
        <Text>Weight:  </Text>
        <Text>Height:  </Text>
    </View>
  );
};

export default Card;
