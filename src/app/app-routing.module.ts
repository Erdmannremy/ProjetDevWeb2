import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategorieHommeComponent } from './categorie-homme/categorie-homme.component';
import { CategorieFemmeComponent } from './categorie-femme/categorie-femme.component';
import { CategorieEnfantComponent } from './categorie-enfant/categorie-enfant.component';
import { VesteHommeComponent } from './veste-homme/veste-homme.component';
import { PullHommeComponent } from './pull-homme/pull-homme.component';
import { TeeShirtHommeComponent } from './tee-shirt-homme/tee-shirt-homme.component';
import { ChemiseHommeComponent } from './chemise-homme/chemise-homme.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SuppressionComponent } from './suppression/suppression.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path: 'categorie-homme',component:CategorieHommeComponent},
  {path: 'categorie-femme',component:CategorieFemmeComponent},
  {path: 'categorie-enfant',component:CategorieEnfantComponent},
  {path:'veste-homme',component:VesteHommeComponent},
  {path:'pull-homme',component:PullHommeComponent},
  {path:'tee-shirt',component:TeeShirtHommeComponent},
  {path:'chemise-homme',component:ChemiseHommeComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'suppression', component: SuppressionComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
