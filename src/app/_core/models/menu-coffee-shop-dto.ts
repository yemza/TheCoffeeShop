import {CoffeeShopDTO} from "./coffee-shop-dto";
import {MenuCategoryDTO} from "./menu-category-dto";

export interface MenuCoffeeShopDTO {
  idMenuCoffeeShop: number;
  menuCoffeeShopsDTO: MenuCategoryDTO[];
  coffeeShopDTO: CoffeeShopDTO;
}
