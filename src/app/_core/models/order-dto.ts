import {OrderDetailsDTO} from "./order-details-dto";
import {UserDTO} from "./user-dto";
import {CoffeeShopDTO} from "./coffee-shop-dto";

export interface OrderDTO {
  idOrder: number;
  date: Date;
  coffeeShopDTO: CoffeeShopDTO;
  userDTO: UserDTO;
  orderDetailsDTO: OrderDetailsDTO[];
}
