// types that may be reused

export interface Quote {
  id: number;
  departure_location: string;
  destination_location: string;
  departure_date_time: string;
  return_date_time: string;
  num_travellers: number;
  transportation: string;
  price: number;
  contact_name: string;
  contact_email: string;
}
