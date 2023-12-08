import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-usersregister',
  templateUrl: './usersregister.component.html',
  styleUrls: ['./usersregister.component.css']
})
export class UsersregisterComponent {

  UsersregisterComponent: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.UsersregisterComponent = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{2}-[0-9]{2}-[0-9]{4}$')]],
      motDePasse: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      pays: ['', [Validators.required]],
      adresse: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.UsersregisterComponent.valid) {
      // Traitement du formulaire
    }
  }

}


      
  

  


