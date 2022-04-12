import { Component, OnInit } from '@angular/core';
import { CafeserviceService } from '../cafeservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-cafe',
  templateUrl: './login-cafe.component.html',
  styleUrls: ['./login-cafe.component.css']
})
export class LoginCafeComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;

  addCafe = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  constructor(private cafe: CafeserviceService) {

  }

  ngOnInit(): void {

  }

  // logInUser() {
  //   if (this.email == "admin@test.com" && this.password == "12345") {
  //     console.log("welcome to dashboard")
  //   }
  //   else {
  //     console.log("Unauthorized User")
  //   }

  // }

}
