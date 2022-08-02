import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Category } from '../common/category';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {

  producturl = "http://localhost:8080/api/product"
  categoryurl = "http://localhost:8080/api/category"

  constructor(private httpClient : HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    
    console.log(this.httpClient.get<getProductResponse>(this.producturl).pipe(map(response => response._embedded.products)))

    return this.httpClient.get<getProductResponse>(this.producturl).pipe(map(response => response._embedded.products))
  }

  getAllCategories() : Observable<Category[]>{
    
    console.log(this.httpClient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.categories)))

    return this.httpClient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.categories))
  }

  saveProduct(product : Product) : Observable<Product>{
    console.log(product)

    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
        return this.httpClient.post<Product>(this.producturl,product,httpOptions);
  }

  saveCategory(category : Category) : Observable<Category>{
    console.log(category)

    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    };
        return this.httpClient.post<Category>(this.categoryurl,category,httpOptions);
  }
}

interface getProductResponse{
  _embedded :{
    products : Product[]
  }
}

interface getCategoryResponse{
  _embedded :{
    categories : Category[]
  }
}
