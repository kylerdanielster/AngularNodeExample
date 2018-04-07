import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  template: `
        <div *ngFor="let message of apiService.messages">
            <mat-card>{{message.msg}}</mat-card>
        </div>
    `
})
export class MessagesComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params.id;
    this.apiService.getMessages(userId);
  }
}
