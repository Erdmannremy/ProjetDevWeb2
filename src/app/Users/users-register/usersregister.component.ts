import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-usersregister',
  templateUrl: './usersregister.component.html',
  styleUrls: ['./usersregister.component.css'],
})
export class UsersRegisterComponent  {
   
      usersregisterComponent: FormGroup;
   
   
   constructor (private formGroup:FormGroup ) {
     this.usersregisterComponent = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dateNaissance: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      motDePasse: new FormControl('', [Validators.required, Validators.minLength(8)]),
      pays: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (!this.usersregisterComponent.valid) {
      // Display validation errors
      console.error('Form is not valid');
      return;
    }

    // Handle successful form submission
    console.log('Form submitted successfully');
  }
}
