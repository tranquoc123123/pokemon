import React, { useState, useEffect } from 'react';
import {  View, Text, Image, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './DetailStyle';
import axios from 'axios';
import {  useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../../../Redux/actions/PokemonAction';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import DialogCustom from '../../popup/Dialog';


const Detail = () => {
  const route = useRoute();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [height, setHeight] = useState('0');
  const [weight, setWeight] = useState('0');
  const dispatch = useDispatch();


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleclick = async () => {
    setIsPress(true);
    await sleep(2000);
    // console.log('getRandomInt(2): ', getRandomInt(2))
    if (getRandomInt(2) === 0) {
      setMessage('Successful capture!');
      dispatch(addPokemon({
        id: uuidv4(),
        name: name,
        height: height,
        weight: weight,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params.id}.png`,
      }));
    } else{
      setMessage('Fail capture!');
    }
    setIsPress(false);
    setVisible(true);
  };

  const getDetail = async () => {
    await axios({ method: "get", url: `https://pokeapi.co/api/v2/pokemon/${route.params.id}/` }).then(res => {
      if (res.data.name) {
        setName(res.data.name);
      }
      if (res.data.height) {
        setHeight(res.data.height);
      }
      if (res.data.weight) {
        setWeight(res.data.weight);
      }
    }).catch(Err => { console.log(Err) });
  };

  useEffect(() => {
    const getDetail = async () => {
      await axios({ method: "get", url: `https://pokeapi.co/api/v2/pokemon/${route.params.id}/` }).then(res => {
        if (res.data.name) {
          setName(res.data.name);
        }
        if (res.data.height) {
          setHeight(res.data.height);
        }
        if (res.data.weight) {
          setWeight(res.data.weight);
        }
      }).catch(Err => { console.log(Err);});
    };
    getDetail()
  }, [route.params.id])

  return (
    <ImageBackground style={styles.container} source={require('./background.png')}>
      <View style={styles.card}>
        <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params.id}.png` }} style={{ width: 200, height: 200 }} />
        <Text style={styles.name}>{name}</Text>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.title}>Height: </Text>
            <Text style={styles.value}>{height}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.title}>Weight: </Text>
            <Text style={styles.value}>{weight}</Text>
          </View>
        </View>
        {/* <Pressable onPress={handleclick}> <Text>ADd</Text> */}
        {/* </Pressable> */}
        {
        isPress ?
          <View style={{ width: 75, height: 75 , justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size="large" color="#90EE90" /> 
          </View> :
          <TouchableOpacity onPress={handleclick}>
            <Image source={require('./ball.png')} style={{ width: 75, height: 75 }} />
          </TouchableOpacity>
        }
      </View>
      <DialogCustom  message={message} onPressHandle={()=>setVisible(false)} visible={visible} title={"Result"}/>
    </ImageBackground>
  );
};

export default Detail;