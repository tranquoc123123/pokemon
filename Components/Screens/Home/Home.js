import React, { useState } from 'react';
import {  View, ImageBackground } from 'react-native';
import Content from '../../content/Content';
import styles from './HomeStyle';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1}} >
      <ImageBackground style={styles.backgroundImage} source={require('./background.png')} >
        <Content />
      </ImageBackground>
    </View>
  );
};

export default Home;