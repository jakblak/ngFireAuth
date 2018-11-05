import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ng7-auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider;
  constructor(private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
  }

  success(content: any) {
    console.log(content);
    this.snackBar.open(`Welcome ${content.displayName}!`, 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    this.router.navigate(['/user/profile']);
  }

}
