import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'normal':
        color = 'bg-gray-500';
        break;
      case 'fighting':
        color = 'bg-neutral-600';
        break;
      case 'flying':
        color = 'bg-slate-400';
        break;
      case 'poison':
        color = 'bg-lime-600';
        break;
      case 'ground':
        color = 'bg-neutral-500';
        break;
      case 'rock':
        color = 'bg-stone-700';
        break;
      case 'bug':
        color = 'bg-purple-900';
        break;
      case 'ghost':
        color = 'bg-zinc-300';
        break;
      case 'steel':
        color = 'bg-zinc-600';
        break;
      case 'fire':
        color = 'bg-red-600';
        break;
      case 'water':
        color = 'bg-blue-600';
        break;
      case 'grass':
        color = 'bg-amber-800';
        break;
      case 'electric':
        color = 'bg-yellow-400';
        break;
      case 'psychic':
        color = 'bg-fuchsia-700';
        break;
      case 'ice':
        color = 'bg-cyan-500';
        break;
      case 'dragon':
        color = 'bg-slate-500';
        break;
      case 'dark':
        color = 'bg-neutral-900';
        break;
      case 'fairy':
        color = 'bg-emerald-900';
        break;
      case 'unknow':
        color = 'bg-slate-600';
        break;
      case 'shadow':
        color = 'bg-zinc-700';
        break;
      default:
        color = 'bg-stone-400';
        break;
    }

    return color;
  }
}
