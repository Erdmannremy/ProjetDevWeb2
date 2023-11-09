import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './PageAccueil/home/home.component';
import { CategorieHommeComponent } from './Homme/categorie-homme/categorie-homme.component';
import { CategorieFemmeComponent } from './Femme/categorie-femme/categorie-femme.component';
import { CategorieEnfantComponent } from './Enfant/categorie-enfant/categorie-enfant.component';
import { VesteHommeComponent } from './Homme/veste-homme/veste-homme.component';
import { PullHommeComponent } from './Homme/pull-homme/pull-homme.component';
import { TeeShirtHommeComponent } from './Homme/tee-shirt-homme/tee-shirt-homme.component';
import { ChemiseHommeComponent } from './Homme/chemise-homme/chemise-homme.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SuppressionComponent } from './suppression/suppression.component';
import { PantalonHommeComponent } from './Homme/pantalon-homme/pantalon-homme.component';
import { VesteEnfantComponent } from './Enfant/veste-enfant/veste-enfant.component';
import { PullEnfantComponent } from './Enfant/pull-enfant/pull-enfant.component';
import { TeeShirtEnfantComponent } from './Enfant/tee-shirt-enfant/tee-shirt-enfant.component';
import { ChemiseEnfantComponent } from './Enfant/chemise-enfant/chemise-enfant.component';
import { PantalonEnfantComponent } from './Enfant/pantalon-enfant/pantalon-enfant.component';
import { VesteFemmeComponent } from './Femme/veste-femme/veste-femme.component';
import { PullFemmeComponent } from './Femme/pull-femme/pull-femme.component';
import { TeeShirtFemmeComponent } from './Femme/tee-shirt-femme/tee-shirt-femme.component';
import { ChemiseFemmeComponent } from './Femme/chemise-femme/chemise-femme.component';
import { PantalonFemmeComponent } from './Femme/pantalon-femme/pantalon-femme.component';
import { PromotionComponent } from './Article-promotion/promotion/promotion.component';



const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path: 'categorie-homme',component:CategorieHommeComponent,children:[
   {path:'veste-homme',component:VesteHommeComponent},
   {path:'pull-homme',component:PullHommeComponent},
   {path:'tee-shirt-homme',component:TeeShirtHommeComponent},
   {path:'chemise-homme',component:ChemiseHommeComponent },
   {path:'pantalon-homme',component:PantalonHommeComponent},]},
   {path: 'categorie-enfant',component:CategorieEnfantComponent,children:[
   {path:'veste-enfant',component:VesteEnfantComponent},
   {path:'pull-enfant',component:PullEnfantComponent},
   {path:'tee-shirt-enfant',component:TeeShirtEnfantComponent},
   {path:'chemise-enfant',component:ChemiseEnfantComponent},
   {path:'pantalon-enfant',component:PantalonEnfantComponent}]},
   {path: 'categorie-femme',component:CategorieFemmeComponent,children:[
   {path:'veste-femme',component:VesteFemmeComponent},
   {path:'pull-femme',component:PullFemmeComponent},
   {path:'tee-shirt-femme',component:TeeShirtFemmeComponent},
   {path:'chemise-femme',component:ChemiseFemmeComponent},
   {path:'pantalon-femme',component:PantalonFemmeComponent}]},
   {path:'promotion',component:PromotionComponent},
  
  
  
  
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'suppression', component: SuppressionComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
