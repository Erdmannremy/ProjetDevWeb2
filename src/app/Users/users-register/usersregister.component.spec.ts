import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRegisterComponent } from './usersregister.component';

import { FormControl,FormGroup,Validators } from '@angular/forms';

const monchamp = new FormControl('',[
  Validators.required,      //verifier si le champ est vide
  Validators.minLength(5),  //vérifier la longueur minimale de la chaine
  Validators.email,         //vérifier si la valeur est une adresse e-mail valide
          
               //ajoutez d'autres validateurs au besoin
  ]);
               
const emailControl = new FormControl('',[
  Validators.required,      // Le champ est requis
  Validators.email,         // la valeur doit être une adresse e-mail valide 

             //ajoutez d'autres validateurs au besoin

]);



 









describe('UsersregisterComponent', () => {
  let component: UsersRegisterComponent;
  let fixture: ComponentFixture<UsersRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersRegisterComponent]
    });
    fixture = TestBed.createComponent(UsersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
