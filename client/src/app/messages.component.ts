import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-messages',
  template: `
        <div *ngFor="let message of apiService.messages">
            <mat-card>{{message.title}}</mat-card>
        </div>
    `
})
export class MessagesComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.apiService.getMessages();
  }
}
