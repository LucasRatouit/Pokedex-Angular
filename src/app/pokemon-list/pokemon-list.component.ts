import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon-service.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private router: Router) {}

  pokemonList: Pokemon[] | undefined;

  ngOnInit() {
    this.pokemonService
      .getPokemons()
      .then((res) => {
        this.pokemonList = res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  pokemonAsClicked(pokemonId: number) {
    this.router.navigate([`/pokemon/${pokemonId}`]);
  }
}
