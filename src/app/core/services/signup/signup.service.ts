import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SignupForm } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private endpointURL = `${environment.API_URL}register`;

  constructor(private http: HttpClient) { }

  public signUp(signupForm: SignupForm) {
    this.http.post(this.endpointURL, signupForm)
    .subscribe(response => {
      console.log(response);
    }, err => console.error(err));
  }
}
