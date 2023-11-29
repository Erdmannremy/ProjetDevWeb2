import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  login (data: any) {
    return this._http.post('http://localhost:8080/api/auth/login', data);
  }

  getAllArticles () {
    return this._http.get('http://localhost:8080/api/articles/getAll');
  }

  getOneArticle (id: any) {
    return this._http.get(`http://localhost:8080/api/articles/${id}`);
  }
}
