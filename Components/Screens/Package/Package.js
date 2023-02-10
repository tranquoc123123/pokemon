import React, { useState, useEffect } from 'react';
import {  View, Text,  Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './PackageStyle';
import { useSelector } from 'react-redux';
import { usePokemonList } from '../../../Redux/reducers/PokemonReducer';
import { useDispatch } from 'react-redux';
import { deletePokemon, EditNamePokemon } from '../../../Redux/actions/PokemonAction';
import DialogEdit from '../../popup/DialogeEdit';

const Package = () => {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.pokemonList);

  const handleDelete = (id) => {
    dispatch(deletePokemon({ id: id }));
  }
  const handleEditName = (id, name) => {
    dispatch(EditNamePokemon({ id: id , name: name}));
  }
  const handleShowEditDialog = (id, name) => {
    setId(id);
    setName(name);
    setVisible(true);
  }

  const submitEditName = (id, name) => {
    handleEditName(id, name);
    setVisible(false);
    setId('');
    setName('');
  }
  const oncancel = (id, name) => {
    // setId(id);
    // setName(name);
    //handleEditName(id, name);
    setVisible(false);
    setId('');
    setName('');
  }

  useEffect(() => {

  }, [pokemonList, dispatch]);
  return (
    <ImageBackground source={require("./background.png")} style={styles.container}>
      <ScrollView >
        {
          pokemonList.map(pokemon => (
            <View key={pokemon.id} style={styles.card}>
              <Image source={{ uri: pokemon.img }} style={{ width: 200, height: 200 }} />
              <TouchableOpacity onPress={()=>handleShowEditDialog(pokemon.id, pokemon.name)}>
                <Text style={styles.name}>{pokemon.name}</Text>
              </TouchableOpacity>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.title}>Height: </Text>
                  <Text style={styles.value}>{pokemon.height}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.title}>Weight: </Text>
                  <Text style={styles.value}>{pokemon.weight}</Text>
                </View>
              </View>
              {/* <Text>{pokemon.id}</Text> */}
              <TouchableOpacity onPress={() => handleDelete(pokemon.id)} style={styles.button} >
                <Text style={{ color: "white" }}>RELEASE</Text>
              </TouchableOpacity>
            </View>
          )
          )
        }
      </ScrollView>
      <DialogEdit visible={visible} id={id} value={name} title={"Edit Name"} onPressHandle={(id, name)=>submitEditName(id, name)} onTouchOutside= {()=> oncancel()}/>
    </ImageBackground>
  );
};

export default Package;