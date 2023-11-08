import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { NavbarComponent } from './PageAccueil/home/navbar/navbar.component';
import { HomeComponent } from './PageAccueil/home/home.component';
import { CategorieHommeComponent } from './Homme/categorie-homme/categorie-homme.component';
import { CategorieFemmeComponent } from './Femme/categorie-femme/categorie-femme.component';
import { CategorieEnfantComponent } from './Enfant/categorie-enfant/categorie-enfant.component';
import { ImagesComponent } from './images/images.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SuppressionComponent } from './suppression/suppression.component';
import { Navbar2Component } from './PageAccueil/home/navbar2/navbar2.component';
import { NavbarHommeComponent } from './Homme/navbar-homme/navbar-homme.component';
import { VesteHommeComponent } from './Homme/veste-homme/veste-homme.component';
import { PullHommeComponent } from './Homme/pull-homme/pull-homme.component';
import { TeeShirtHommeComponent } from './Homme/tee-shirt-homme/tee-shirt-homme.component';
import { ChemiseHommeComponent } from './Homme/chemise-homme/chemise-homme.component';
import { PantalonHommeComponent } from './Homme/pantalon-homme/pantalon-homme.component';
import { NavbarFemmeComponent } from './Femme/navbar-femme/navbar-femme.component';
import { NavbarEnfantComponent } from './Enfant/navbar-enfant/navbar-enfant.component';
import { VesteFemmeComponent } from './Femme/veste-femme/veste-femme.component';
import { ChemiseFemmeComponent } from './Femme/chemise-femme/chemise-femme.component';
import { PullFemmeComponent } from './Femme/pull-femme/pull-femme.component';
import { TeeShirtFemmeComponent } from './Femme/tee-shirt-femme/tee-shirt-femme.component';
import { PantalonFemmeComponent } from './Femme/pantalon-femme/pantalon-femme.component';
import { VesteEnfantComponent } from './Enfant/veste-enfant/veste-enfant.component';
import { ChemiseEnfantComponent } from './Enfant/chemise-enfant/chemise-enfant.component';
import { PullEnfantComponent } from './Enfant/pull-enfant/pull-enfant.component';
import { TeeShirtEnfantComponent } from './Enfant/tee-shirt-enfant/tee-shirt-enfant.component';
import { PantalonEnfantComponent } from './Enfant/pantalon-enfant/pantalon-enfant.component';






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
    PantalonHommeComponent,
    NavbarFemmeComponent,
    NavbarEnfantComponent,
    VesteFemmeComponent,
    ChemiseFemmeComponent,
    PullFemmeComponent,
    TeeShirtFemmeComponent,
    PantalonFemmeComponent,
    VesteEnfantComponent,
    ChemiseEnfantComponent,
    PullEnfantComponent,
    TeeShirtEnfantComponent,
    PantalonEnfantComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
