import { Component, OnInit } from '@angular/core';
import { CafeserviceService } from '../cafeservice.service';
@Component({
  selector: 'app-list-cafe',
  templateUrl: './list-cafe.component.html',
  styleUrls: ['./list-cafe.component.css']
})
export class ListCafeComponent implements OnInit {

  constructor(private cafe: CafeserviceService) { }
  collection: any = {}
  ngOnInit(): void {
    this.cafe.getList().subscribe((data) => {
      console.warn(data)
      this.collection = data;
    })
  }
  deleteCafe(item:any) {
    this.collection.splice(item-1, 1)
    this.cafe.deleteCafe(item).subscribe((result:any)=>{
      console.warn("result",result)
    })
  }
}
