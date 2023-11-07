import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CategorieHommeComponent } from './categorie-homme/categorie-homme.component';
import { CategorieFemmeComponent } from './categorie-femme/categorie-femme.component';
import { CategorieEnfantComponent } from './categorie-enfant/categorie-enfant.component';
import { ImagesComponent } from './images/images.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SuppressionComponent } from './suppression/suppression.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { NavbarHommeComponent } from './navbar-homme/navbar-homme.component';
import { VesteHommeComponent } from './veste-homme/veste-homme.component';
import { PullHommeComponent } from './pull-homme/pull-homme.component';
import { TeeShirtHommeComponent } from './tee-shirt-homme/tee-shirt-homme.component';
import { ChemiseHommeComponent } from './chemise-homme/chemise-homme.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    DirectivesComponent,
    PipesComponent,
    NavbarComponent,
    HomeComponent,
    CategorieHommeComponent,
    CategorieFemmeComponent,
    CategorieEnfantComponent,
    ImagesComponent,
    InscriptionComponent,
    ConnexionComponent,
    SuppressionComponent,
    Navbar2Component,
   
    VesteHommeComponent,
    PullHommeComponent,
    TeeShirtHommeComponent,
    NavbarHommeComponent,
    ChemiseHommeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
