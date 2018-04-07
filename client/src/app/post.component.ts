import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-post',
  template: `
<mat-card>
  <mat-card-header>
      <mat-card-title><h4>New Post</h4></mat-card-title>
  </mat-card-header>
  <mat-card-content>
      <form class="example-form">
          <mat-form-field style="width: 100%">
              <textarea [(ngModel)]="postMsg" name="post" matInput placeholder="Post Message"></textarea>
          </mat-form-field>
          <br>
          <button (click)="post()" mat-raised-button color="primary">Post</button>
      </form>
  </mat-card-content>
</mat-card>
`
})
export class PostComponent {
    postMsg = '';

    constructor(private apiService: ApiService) {}

    post() {
        this.apiService.postMessage({msg: this.postMsg});
    }

}
