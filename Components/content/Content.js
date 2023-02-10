import React, { useState, useEffect } from 'react';
import {  View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './ContentStyle';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



const Content = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const nav = useNavigation();

  useEffect(() => {
    (async () => {
      await axios({ method: 'get', url: 'https://pokeapi.co/api/v2/pokemon?limit=50' }).then(async (res) => {
        let newListPokemon = [];
        for (const result of res.data.results) {
          const url = result.url;
          await axios({ method: 'get', url: url }).then(res => {
            if (res.data.id) {
              const pokemon = { id: res.data.id, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.data.id}.png`,  name: result.name, height: res.data.height, weight: res.data.weight }
              newListPokemon.push(pokemon);
            }
          }
          );
        }
        const results = await Promise.all(newListPokemon);
        setListPokemon(newListPokemon);
      }).catch(error => { })
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView Style={{ flexGrow: 1 }} >
        {
          listPokemon.map((pokemon, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => { nav.navigate('Detail', {id: pokemon.id}); }}>
              <Image source={{ uri: pokemon.img }} style={{ width: 200, height: 200 }}/>
              <Text style={styles.name} key={index} > {pokemon.name} </Text>
            </TouchableOpacity>
          )
          )
        }
      </ScrollView>
    </View>
  );
};


export default Content;
