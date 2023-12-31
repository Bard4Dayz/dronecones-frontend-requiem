export type Drone = {
  display_name: string;
  is_active: boolean;
  drone_size: number;
  earnings: number;
  num_orders: number;
  serial_number: string;
  id?: number;
};

export type FullCone = {
  drone_id?: number;
  products: Product[];
};

export type Order = {
  cones: FullCone[];
  total_price: number;
  employee_cut?: number;
  profit?: number;
  order_time?: string;
  id?: number;
  customer_id?: number;
};

export type Product = {
  display_name: string;
  stock?: number;
  //ppu is the Price the customer will pay for a unit of this Product
  price_per_unit?: number;
  //cpu is the Cost we pay as the vendor to supply a unit of this Product
  cpu?: number;
  img?: File;
  product_type: ProductType;
  id?: number;
};

export enum ProductType {
  ICECREAM = "IceCream",
  CONE = "Cone",
  TOPPING = "Topping",
}

export type User = {
  username: string;
  user_type: UserType;
  is_active: boolean;
  id?: number;
};

export enum UserType {
  CUSTOMER = "Customer",
  EMPLOYEE = "Employee",
  MANAGER = "Manager",
  GUEST = "Guest",
}

export type Time = {
  minutes: number;
  seconds: number;
};
