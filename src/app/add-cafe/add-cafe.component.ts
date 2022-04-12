import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CafeserviceService } from '../cafeservice.service';

@Component({
  selector: 'app-add-cafe',
  templateUrl: './add-cafe.component.html',
  styleUrls: ['./add-cafe.component.css']
})
export class AddCafeComponent implements OnInit {
  alert: boolean = false;
  addCafe = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private cafe: CafeserviceService) { }

  ngOnInit(): void {
  }
  collectCafe() {
    // console.warn(this.addCafe.value)
    this.cafe.saveCafe(this.addCafe.value).subscribe((result) => {
      console.warn(result)
      this.alert=true;
      this.addCafe.reset({})
    })
  }
  closeAlert(){
    this.alert=false;
  }
}
