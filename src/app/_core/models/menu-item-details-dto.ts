import {MenuItemDTO} from "./menu-item-dto";

export interface MenuItemDetailsDTO {
  idMenuItemDetails: number;
  size: string;
  price: number;
  menuItemDTO: MenuItemDTO;
}

