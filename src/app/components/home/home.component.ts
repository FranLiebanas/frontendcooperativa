import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  products: Product[] = [];
  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data
      
    );
  }

}