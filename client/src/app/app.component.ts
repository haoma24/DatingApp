import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-root',
  imports: [NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly accountService = inject(AccountService);

  ngOnInit(): void {
    this.setCurrentUser();
  }
  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
}
