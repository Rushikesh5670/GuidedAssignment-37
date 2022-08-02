import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category : Category = new Category(0,"");
  constructor(private service: ManagementServiceService, private route:Router) { }
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.service.saveCategory(this.category).subscribe(data=>{
      console.log(data)
    this.category=data;
    this.route.navigateByUrl("/categories");
    })
  }
}
