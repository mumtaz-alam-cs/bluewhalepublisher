import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  createCompany = (name: string, email: string, phone: string, message: string): Observable<string> => {
    const payload = {
      name,
      email,
      phone,
      message,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this
      .http
      .post<string>(
        `endpoint will be here`,
        {
          ...payload
        },
        options)
  }
}
