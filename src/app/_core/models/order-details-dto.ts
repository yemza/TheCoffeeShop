import {MenuItemDTO} from "./menu-item-dto";
import {OrderDTO} from "./order-dto";

export interface OrderDetailsDTO {
  idOrderDetails: number;
  quantity: number;
  orderDTO: OrderDTO;
  menuItemDTO: MenuItemDTO;
}
