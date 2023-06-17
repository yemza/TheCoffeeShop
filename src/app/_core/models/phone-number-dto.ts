import {UserDTO} from "./user-dto";
import {CoffeeShopDTO} from "./coffee-shop-dto";

export interface PhoneNumberDTO {
  idPhoneNumber: number;
  phoneNumber: number;
  coffeeShop: CoffeeShopDTO;
  user: UserDTO;
}
