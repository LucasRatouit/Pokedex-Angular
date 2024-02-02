import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon-service.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService
        .getPokemonById(+pokemonId)
        .then((res) => {
          this.pokemon = res;
          console.log(res);
        })
        .catch((err) => {
          console.error('Aucune Pokémon trouvé sur cette id: ', err);
        });
    }
  }

  goBack() {
    this.router.navigate(['pokemons']);
  }
}
