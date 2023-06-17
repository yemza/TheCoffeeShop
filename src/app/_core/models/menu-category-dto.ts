import {MenuItemDTO} from "./menu-item-dto";
import {MenuCoffeeShopDTO} from "./menu-coffee-shop-dto";

export interface MenuCategoryDTO {
  idMenuCategory: number;
  nameMenuCategory: string;
  menuCoffeeShopDTO: MenuCoffeeShopDTO;
  menuItemsDTO: MenuItemDTO[];
}
