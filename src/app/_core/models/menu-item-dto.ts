import {MenuItemDetailsDTO} from "./menu-item-details-dto";
import {OrderDetailsDTO} from "./order-details-dto";
import {MenuCategoryDTO} from "./menu-category-dto";

export interface MenuItemDTO {
  idMenuItem: number;
  name: string;
  ingredient: string;
  menuItemDetailsDTO: MenuItemDetailsDTO[];
  menuCategoryDTO: MenuCategoryDTO;
  orderDetailsDTO: OrderDetailsDTO[];
}
