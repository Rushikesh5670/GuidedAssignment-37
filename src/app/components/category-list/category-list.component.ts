import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories : Category[]
  constructor(private service: ManagementServiceService,private route:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfCategories()
  }

  listOfCategories(){
    this.service.getAllCategories().subscribe(data=>{
      console.log(data)
    this.categories=data
    })
  }

  addCategory(){
    this.route.navigateByUrl("/ categoryForm");
  }

}
