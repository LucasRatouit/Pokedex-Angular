import { Injectable } from '@angular/core';
import axios from 'axios';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  async getPokemons() {
    const resAll: Pokemon[] = [];
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100');
    for (let i = 0; i < res.data.results.length; i++) {
      const url = res.data.results[i].url;
      const pokemonDetails = await axios.get(url);
      resAll.push(pokemonDetails.data);
    }
    return resAll;
  }

  async getPokemonById(id: number) {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.data;
  }
}
