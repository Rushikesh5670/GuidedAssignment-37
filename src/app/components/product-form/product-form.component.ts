import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  categories : Category[]

  product : Product = new Product(0,"","",0,"",0,new Date(),new Date(),0);
  constructor(private service: ManagementServiceService, private route:Router) { }
  
  ngOnInit(): void {
    this.listOfCategories()
  }
  
  listOfCategories(){
    this.service.getAllCategories().subscribe(data=>{
      console.log(data)
    this.categories=data
    })
  }
  onSubmit(){
   // console.log(this.product);
    this.service.saveProduct(this.product).subscribe(()=>{
    this.route.navigateByUrl("/");
    })
  }

}
