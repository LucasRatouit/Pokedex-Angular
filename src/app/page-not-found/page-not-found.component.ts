import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="flex flex-col items-center text-white">
      <img
        class="w-60 h-60 fly"
        src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png"
      />
      <p class="font-medium text-6xl pt-10">This page doesn't exist !</p>
      <p
        (click)="goToHomePage()"
        class="pt-6 cursor-pointer hover:text-yellow-300"
      >
        Click here to return home
      </p>
    </div>
  `,
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['']);
  }
}
