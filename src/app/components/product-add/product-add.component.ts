import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit{

  id: number = 0;
  code : string = '';
  name : string = '';
  description : string = '';
  price : number = 0;
  urlImage : string = '';
  quantity : number = 0;
  stock_min : number = 0;
  stock_max : number = 0;
  dateCreated: Date = new Date();
  dateUpdated: Date = new Date();
  categoryId: number = 0;
  userId: string = '';
  categoryID: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit():void {
    
  }
  addProduct(): void {
   const formData = new FormData();
   formData.append('id', this.id.toString());
    formData.append('code', this.code);
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('price', this.price.toString());
    formData.append('urlImage', this.urlImage);
    formData.append('quantity', this.quantity.toString());
    formData.append('stock_min', this.stock_min.toString());
    formData.append('stock_max', this.stock_max.toString());
    formData.append('dateCreated', this.dateCreated.toString());
    formData.append('dateUpdated', this.dateUpdated.toString());
    formData.append('categoryId', this.categoryId.toString());
    formData.append('userId', this.userId);
    console.log(formData);
  }
}
