import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-usersregister',
  templateUrl: './usersregister.component.html',
  styleUrls: ['./usersregister.component.css']
})
export class UsersregisterComponent {

  UsersregisterComponent: FormGroup

  constructor(private fb: FormBuilder){
    this.UsersregisterComponent = this.fb.group({
      FirstName: ['',Validators.required],
      LastName:  ['',Validators.required],
      birthDate: ['',Validators.required],
      country:   ['',Validators.required],


    
    })
  }
  

};
      
  

  


