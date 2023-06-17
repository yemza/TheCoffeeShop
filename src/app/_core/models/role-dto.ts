import {UserDTO} from "./user-dto";

export interface RoleDTO {
  idRole: number;
  role: string;
  user: UserDTO;
}
