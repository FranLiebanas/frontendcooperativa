import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit{

  id: number = 0;
  code : string = 'ACEITE'+ // el siguiente número se generará automáticamente
  Math.floor(Math.random() * 100) + 1;
  name : string = '';
  description : string = '';
  price : number = 0;
  urlImage : string = '';
  stock : number = 0;
  stock_min : number = 0;
  stock_max : number = 0;
  dateCreated: Date = new Date();
  dateUpdated: Date = new Date();
  categoryId: number = 0;
 
  

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
    formData.append('stock', this.stock.toString());
    formData.append('stock_min', this.stock_min.toString());
    formData.append('stock_max', this.stock_max.toString());
    formData.append('dateCreated', this.dateCreated.toISOString());
    formData.append('dateUpdated', this.dateCreated.toISOString());
    formData.append('categoryId', this.categoryId.toString());
    
    console.log(formData);

    this.productService.createProduct(formData).subscribe(
      data => console.log(data),
    );
  }
}
