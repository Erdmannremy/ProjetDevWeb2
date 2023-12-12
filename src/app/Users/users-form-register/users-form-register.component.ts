import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-users-form-register',
  templateUrl: './users-form-register.component.html',
  styleUrls: ['./users-form-register.component.css']
})
export class UsersFormRegisterComponent {


  usersformregisterComponent: FormGroup;
   
   
   constructor ( private formGroup:FormBuilder ) {
     this.usersformregisterComponent = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dateNaissance: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
        Validators.minLength(10),
        Validators.maxLength(10),
        
      ]),
      adresseEmail: new FormControl('',[Validators.required]), 
      motDePasse: new FormControl('', [Validators.required, Validators.minLength(8)]),
      pays: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (!this.usersformregisterComponent.valid) {
      // Display validation errors
      console.error('Form is not valid');
      return;
    }

    // Handle successful form submission
    console.log('Form submitted successfully');

    
    
  }
}



