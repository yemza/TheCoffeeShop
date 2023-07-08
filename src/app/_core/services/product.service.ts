import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {MenuItemDTO} from "../models/menu-item-dto";

@Injectable({
  providedIn : "root"
})
export class ProductService {

  constructor(private http  : HttpClient) {
  }


  /**
   * get All Product
   * */
  getAllProducts():Observable<MenuItemDTO[]>{
    return this.http.get<MenuItemDTO[]>(environment.ApiURL.concat("items"));
  }
}
