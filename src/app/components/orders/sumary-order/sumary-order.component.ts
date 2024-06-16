import { Component, OnInit } from "@angular/core";
import { DataPayment } from "../../../common/data-payment";
import { ItemCart } from "../../../common/item-cart";
import { Order } from "../../../common/order";
import { OrderProduct } from "../../../common/order-product";
import { OrderState } from "../../../common/order-state";
import { CartService } from "../../../services/cart.service";
import { OrderService } from "../../../services/order.service";
import { PaymentService } from "../../../services/payment.service";
import { SessionStorageService } from "../../../services/session-storage.service";
import { UserService } from "../../../services/user.service";


@Component({
  selector: 'app-sumary-order',
  templateUrl: './sumary-order.component.html',
  styleUrls: ['./sumary-order.component.css']
})
export class SumaryOrderComponent implements OnInit {
  items: ItemCart[] = [];
  totalCart: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: string = '';
  orderProducts: OrderProduct[] = [];
  userId: number = 0;
  loading: boolean = false; // Variable para controlar la visualización del spinner

  constructor(private cartService: CartService,
    private userService: UserService,
    private orderService: OrderService,
    private paymentService: PaymentService,
    private sessionStorage: SessionStorageService
    
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
    this.userId = this.sessionStorage.getItem('token').id;
    this.getUserById(this.userId);
    setTimeout(() => {
      this.sessionStorage.removeItem('token');
    }, 600000);
  }

  generateOrder() {
    this.loading = true; // Mostrar spinner cuando se inicia la generación de la orden y pago

    this.items.forEach(item => {
      let orderProduct = new OrderProduct(null, item.productId, item.quantity, item.price);
      this.orderProducts.push(orderProduct);
    });

    let order = new Order(null, new Date(), this.orderProducts, this.userId, OrderState.CANCELLED);
    console.log('Order: ' + order.orderState);
    this.orderService.createOrder(order).subscribe(
      data => {
        console.log('Order creada con id: ' + data.id);
        this.sessionStorage.setItem('order', data);

        // Redirección y pago con PayPal
        let urlPayment;
        let dataPayment = new DataPayment('PAYPAL', this.totalCart.toString(), 'USD', 'COMPRA');

        console.log('Data Payment:', dataPayment);

        this.paymentService.getUrlPaypalPayment(dataPayment).subscribe(
          data => {
            urlPayment = data.url;
            console.log('Respuesta exitosa...');
            window.location.href = urlPayment;
          },
          error => {
            console.error('Error en el pago con PayPal:', error);
            this.loading = false; // Ocultar spinner en caso de error
          }
        );
      },
      error => {
        console.error('Error al crear la orden:', error);
        this.loading = false; // Ocultar spinner en caso de error
      }
    );
  }

  deleteItemCart(productId: number) {
    this.cartService.deleteItemCart(productId);
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(
      data => {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.address = data.address;
      }
    );
  }
}