import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products : Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit():void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data
        
      }
    );
  }
  deleteProductById(id: number) {
    this.productService.deleteProduct(id).subscribe(
      data => {
        console.log('Product deleted');
        this.listProducts();
      }
    );
  }



}
