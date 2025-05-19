import { Flight } from "../Flight/Flight.model";

export interface Serie {
  id: string;
  airlineName: string;
  country: string;
  city: string;
  address: string;
  identityColor: string;
  slogan: string;
  flights: Flight[];
}

  