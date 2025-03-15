import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  httpClient = inject(HttpClient)
  title = 'client';
  users:any;
  ngOnInit(): void {
    this.httpClient.get('https://localhost:5001/api/user')
    .subscribe({
      next: res => this.users = res,
      error: err => console.log(err),
      complete: () => console.log('Completed!')
    });
  }
}
