import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { CafeserviceService } from '../cafeservice.service';
@Component({
  selector: 'app-register-cafe',
  templateUrl: './register-cafe.component.html',
  styleUrls: ['./register-cafe.component.css']
})
export class RegisterCafeComponent implements OnInit {

  alert: boolean = false;
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private cafe: CafeserviceService) { }

  ngOnInit(): void {
  }
  collection() {
    console.warn(this.register.value)
    this.cafe.registerCafe(this.register.value).subscribe((result) => {
      console.warn(result)
      this.alert = true;
      this.register.reset({})
    })
  }
  closeAlert() {
    this.alert = false;
  }
}
