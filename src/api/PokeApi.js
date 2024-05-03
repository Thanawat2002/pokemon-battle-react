import axios from "axios"

export async function fetchPoke() {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10`)
        return res?.data
    } catch (error) {
        return Promise.reject(error)
    }
}

