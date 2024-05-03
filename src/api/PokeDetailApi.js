import axios from "axios";

export async function fetchPokeDetail(pokeName) {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        return res?.data
    } catch (error) {
        return Promise.reject(error)
    }
}