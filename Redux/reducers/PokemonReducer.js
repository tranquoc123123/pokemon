import { ADD_POKEMON, DELETE_POKEMON, EDITNAME_POKEMON } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';


const initState = {
    pokemonList: [],
};

const rootReducer = (state = initState, action) => {
    //console.log(state, action);
    switch (action.type) {
        case ADD_POKEMON:
            return {
                ...state,
                pokemonList: [
                    ...state.pokemonList,
                    action.payload,
                ],
            };
        case DELETE_POKEMON:
            const newPokemonList = state.pokemonList.filter(pokemon => pokemon.id !== action.payload.id);
            return {
                ...state,
                pokemonList: newPokemonList,
            };
        case EDITNAME_POKEMON:
            const newPokemonListEdit = [...state.pokemonList];
            const index = newPokemonListEdit.findIndex(pokemon => pokemon.id === action.payload.id);
            newPokemonListEdit[index].name = action.payload.name;
            return {
                ...state,
                pokemonList: newPokemonListEdit,
            };
        //return state;
        default:
            return state;
    }
};


export default rootReducer;
