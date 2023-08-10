import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {

  isLoading: boolean = false;
  loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    
    if (this.loginForm.value.username === 'guest' && this.loginForm.value.password === 'guest') {
      this.messageService.add({ severity: 'success', detail: 'Loggedin Successfully!' });
      this.commonService.setSessionStorageItem("isLoggedIn", "true")
      this.commonService.setSessionStorageItem("userData", JSON.stringify({username: "guest"}))
      this.router.navigate(['/contacts'])
    } else {
      this.messageService.add({ severity: 'error', detail: 'Wrong Credentials.' });
    }
  }
}
