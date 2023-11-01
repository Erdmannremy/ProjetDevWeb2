import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategorieHommeComponent } from './categorie-homme/categorie-homme.component';
import { CategorieFemmeComponent } from './categorie-femme/categorie-femme.component';
import { CategorieEnfantComponent } from './categorie-enfant/categorie-enfant.component';
const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path: 'categorie-homme',component:CategorieHommeComponent},
  {path: 'categorie-femme',component:CategorieFemmeComponent},
  {path: 'categorie-enfant',component:CategorieEnfantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
