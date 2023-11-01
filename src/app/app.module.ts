import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CategorieHommeComponent } from './categorie-homme/categorie-homme.component';
import { CategorieFemmeComponent } from './categorie-femme/categorie-femme.component';
import { CategorieEnfantComponent } from './categorie-enfant/categorie-enfant.component';
import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    DirectivesComponent,
    PipesComponent,
    ServicesComponent,
    NavbarComponent,
    HomeComponent,
    CategorieHommeComponent,
    CategorieFemmeComponent,
    CategorieEnfantComponent,
    ImagesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
