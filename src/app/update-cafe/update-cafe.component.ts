import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CafeserviceService } from '../cafeservice.service';

@Component({
  selector: 'app-update-cafe',
  templateUrl: './update-cafe.component.html',
  styleUrls: ['./update-cafe.component.css']
})
export class UpdateCafeComponent implements OnInit {

  alert: boolean = false;
  cafedata: any = {}
  editCafe = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  constructor(private route: ActivatedRoute, private cafe: CafeserviceService) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params['id'])
    this.cafe.getcurrentCafe(this.route.snapshot.params['id']).subscribe((result) => {
      console.warn(result)
      this.cafedata = result;

      this.editCafe = new FormGroup({
        name: new FormControl(this.cafedata.name),
        email: new FormControl(this.cafedata.email),
        address: new FormControl(this.cafedata.address)
      })
    })
  }
  collection() {
    this.cafe.updateCafe(this.route.snapshot.params['id'], this.editCafe.value).subscribe((result) => {
      console.log(result)
      this.alert = true;
      this.editCafe.reset({})
    })
  }
  closeAlert() {
    this.alert = false;
  }
}
