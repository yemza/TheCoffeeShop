import {PhoneNumberDTO} from "./phone-number-dto";
import {ImageCoffeeShopDTO} from "./image-coffee-shop-dto";
import {OrderDTO} from "./order-dto";
import {CityDTO} from "./city-dto";
import {MenuCoffeeShopDTO} from "./menu-coffee-shop-dto";

export interface CoffeeShopDTO {
    idCoffeeShop: number;
    licenceNumber: number;
    coffeeShopName: string;
    address: string;
    logoCoffeeShop: string;
    cityDTO: CityDTO;
    phonesNumbersDTO: PhoneNumberDTO[];
    coffeeShopImagesDTO: ImageCoffeeShopDTO[];
    menuCoffeeShopsDTO: MenuCoffeeShopDTO[];
    ordersDTO: OrderDTO[];
}
