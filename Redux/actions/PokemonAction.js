import { ADD_POKEMON, DELETE_POKEMON, EDITNAME_POKEMON } from "../constants";
export function addPokemon(data) {
    return {
        type: ADD_POKEMON,
        payload: data,
    }
}
export function deletePokemon(data) {
    return {
        type: DELETE_POKEMON,
        payload: data,
    }
}
export function EditNamePokemon(data) {
    return {
        type: EDITNAME_POKEMON,
        payload: data,
    }
}