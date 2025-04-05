import { AccountService } from './../_services/account.service';
import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private readonly accountService = inject(AccountService);
  usersFormHomeComponent = input.required<any>();
  cancelRegister = output<boolean>();
  model: any = {};
  register() {
    this.accountService.register(this.model).subscribe((res) => {
      console.log(res);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
