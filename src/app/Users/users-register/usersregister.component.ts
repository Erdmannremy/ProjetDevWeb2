import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-usersregister',
  templateUrl: './usersregister.component.html',
  styleUrls: ['./usersregister.component.css']
})
export class UsersregisterComponent {
  usersregister:FormGroup;

  constructor(private fb: FormBuilder){
    this.usersregister = this.fb.group({
      firstName:['',Validators.required],
      lastName :['',Validators.required],
      birthDate:['',Validators.required],
      country:['',Validators.required],
      city:['',Validators.required],
      adress:['',Validators.required],
      adressNumber:['',Validators.required],
      codepostal:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phoneNumber:['',Validators.required],
    });
  }

}
