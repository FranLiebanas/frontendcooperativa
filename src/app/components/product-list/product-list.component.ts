import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: "¿Está seguro?",
      text: "No puede revertir los cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProductById(id).subscribe(
          () => this.listProducts()
          
        );
        Swal.fire({
          title: "Producto borrado!",
          text: "Producto eliminado correctamente.",
          icon: "success"
        });
      }
    });
    
  }



}
