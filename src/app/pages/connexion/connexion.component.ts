import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private $auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginSubmit(form: NgForm) {
    this.$auth.signIn(form.value.loginToken).subscribe(
      () => {
        this.router.navigateByUrl("/articles")
      },
      (error) => {     
        alert(error.error.message)
      }
    )
  }

}
