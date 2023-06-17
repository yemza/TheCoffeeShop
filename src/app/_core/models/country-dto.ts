import {CityDTO} from "./city-dto";

export interface CountryDTO {
  idCountry: number;
  name: string;
  citiesDTO: CityDTO[];
}
