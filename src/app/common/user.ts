import { UserType } from "./user-type";

export class User {
  constructor(
    public id: number, // Clave primaria, autoincremental
    public username: string,
    public password: string,
    public dni: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public cellPhone: string,
    public userType: UserType,
    public street: string,
    public number: number,
    public floor: string,
    public postalCode: string,
    public city: string,
    public province: string,
    // public shoppingCart: JsonNode // Atributo para almacenar el carrito como JSON
  ) {}
}
