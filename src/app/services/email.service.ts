import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private mailhogUrl = 'http://localhost:8025'; // URL completa del endpoint API de MailHog

  constructor(private http: HttpClient) { }

  // Método para enviar correo electrónico de confirmación de pago
  sendConfirmationEmail(): Observable<any> {
    const emailData = {
      to: 'destinatario@example.com', // Cambia por la dirección de correo deseada
      from: 'remite@example.com', // Cambia por la dirección de correo remitente
      subject: 'Confirmación de pago',
      text: `Se ha completado el pago con éxito. Gracias por tu compra.`
    };

    return this.http.post(this.mailhogUrl, emailData);
  }
}
