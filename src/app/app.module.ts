import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PageNotFoundComponent,
    PokemonDetailsComponent,
    PokemonTypeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
