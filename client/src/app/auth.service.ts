import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {
    TOKEN_KEY = 'token';

    messages = [];
    path = environment.path + '/auth';

    constructor(private http: HttpClient) {}

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    registerUser(registrationData) {
        this.http.post<any>(this.path + 'register', registrationData).subscribe(res => {
            this.saveToken(res.token);
        });
    }

    loginUser(loginData) {
        this.http.post<any>(this.path + 'login', loginData).subscribe(res => {
            this.saveToken(res.token);
        });
    }

    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }
}
