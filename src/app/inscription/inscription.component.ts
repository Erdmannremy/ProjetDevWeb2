import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {constructor(private http: HttpClient) { }

ngOnInit() { }

onSubmit() {
  // Récupère les données d'inscription du formulaire
  const data = {
    email: this.emailInput.value,
    password: this.passwordInput.value,
  };

  // Soumet les données d'inscription au serveur
  this.http.post('/api/inscription', data)
    .subscribe((response) => {
      if (response.status === 200) {
        // L'inscription a réussi
        this.router.navigate(['/compte']);
      } else {
        // L'inscription a échoué
        alert('Erreur lors de l\'inscription');
      }
    });
}

}


