import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  constructor(private _authService: ServiceService) {}

  connection(login: string, password: string) {

    this._authService.login({login, password}).subscribe({
      next: response => console.log(response),
      error: error => console.error(error),
      complete: () => console.log('DONE!')
    })
  }

}
