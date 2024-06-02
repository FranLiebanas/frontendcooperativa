import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Category } from '../../common/category';
import { CategoryService } from '../../services/category.service';

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
 
  selectFile! : File;

  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private toastr:ToastrService,
    private categoryService: CategoryService,

   ) { }

  ngOnInit():void {
    this.getCategories();
    this.getProductById();
    
  }
  addProduct(): void {
    const formData = new FormData();
    formData.append('id', this.id ? this.id.toString() : '0');
    formData.append('code', this.code ? this.code : '');
    formData.append('name', this.name ? this.name : '');
    formData.append('description', this.description ? this.description : '');
    formData.append('price', this.price ? this.price.toString() : '0');
    formData.append('image', this.selectFile);
    formData.append('urlImage', this.urlImage ? this.urlImage : '');
    formData.append('stock', this.stock ? this.stock.toString() : '0');
    formData.append('stock_min', this.stock_min ? this.stock_min.toString() : '0');
    formData.append('stock_max', this.stock_max ? this.stock_max.toString() : '0');
    formData.append('dateCreated', this.dateCreated instanceof Date ? this.dateCreated.toISOString() : new Date().toISOString());
    formData.append('dateUpdated', this.dateCreated instanceof Date ? this.dateCreated.toISOString() : new Date().toISOString());
    formData.append('categoryId', this.categoryId ? this.categoryId.toString() : '0');
    
    console.log(formData);
  
    this.productService.createProduct(formData).subscribe(
      data => {
        console.log(data);
        if(this.id==0){
          this.toastr.success('Producto guardado con éxito!', 'OK', {
            timeOut: 3000
          });
         }else{
          this.toastr.success('Producto actualizado con éxito!', 'OK', {
            timeOut: 3000
          });
          }
        
        this.router.navigate(['/admin/product']);
      }
    );  
  }

  getProductById() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        console.log("El valor de la variable id es: " + id);
        this.productService.getProductById(id).subscribe(
          (data) => {
          this.id = data.id;
          this.code = data.code;
          this.name = data.name;
          this.description = data.description;
          this.price = data.price;
          this.urlImage = data.urlImage;
          this.stock = data.stock;
          this.stock_min = data.stock_min;
          this.stock_max = data.stock_max;
          this.dateCreated = data.dateCreated;
          this.dateUpdated = data.dateUpdated;
          this.categoryId = data.categoryId;
        });
      }
    });
  }
  
  onFileSelected(event: any) {
    this.selectFile = event.target.files[0];
    console.log(this.selectFile);
  }
      
    
   getCategories() {
    return this.categoryService.getCategoryList().subscribe(
      (data) => {
        this.categories = data;
      }
    );
    }

  

}
