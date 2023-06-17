import {CoffeeShopDTO} from "./coffee-shop-dto";
import {CountryDTO} from "./country-dto";
import {UserDTO} from "./user-dto";

export interface CityDTO {
  idCity: number;
  name: string;
  countryDTO: CountryDTO;
  coffeeShopsDTO: CoffeeShopDTO[];
  usersDTO: UserDTO[];
}
