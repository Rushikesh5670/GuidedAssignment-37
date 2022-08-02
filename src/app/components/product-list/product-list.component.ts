import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]
  constructor(private service: ManagementServiceService, private route:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfProducts()
  
  }

  listOfProducts(){
    this.service.getAllProducts().subscribe(data=>{
      console.log(data)
    this.products=data
    })
  }

  addProduct(){
    this.route.navigateByUrl("/shop");
  }
}
