import {PhoneNumberDTO} from "./phone-number-dto";
import {OrderDTO} from "./order-dto";
import {RoleDTO} from "./role-dto";
import {CityDTO} from "./city-dto";

export interface UserDTO {
  idUser: number;
  firstName: string;
  lastName: string;
  address: string;
  identityImage: string;
  image: string;
  city: CityDTO;
  phoneNumbers: PhoneNumberDTO[];
  roles: RoleDTO[];
  orders: OrderDTO[];
  cni: string;
}
