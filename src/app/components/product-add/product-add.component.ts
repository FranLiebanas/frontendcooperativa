import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(
    private productService: ProductService,
    private router:Router,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit():void {
    this.getProductById();
  }
  addProduct(): void {
   const formData = new FormData();
   formData.append('id', this.id.toString());
    formData.append('code', this.code);
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('price', this.price.toString());
    formData.append('image', this.selectFile);
    formData.append('urlImage', this.urlImage);
    formData.append('stock', this.stock.toString());
    formData.append('stock_min', this.stock_min.toString());
    formData.append('stock_max', this.stock_max.toString());
    formData.append('dateCreated', this.dateCreated.toISOString());
    formData.append('dateUpdated', this.dateCreated.toISOString());
    formData.append('categoryId', this.categoryId.toString());
    
    console.log(formData);

    this.productService.createProduct(formData).subscribe(
      data => {
        console.log(data),

      this.router.navigate(['/admin/product/']);
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
      
    
    

  

}
