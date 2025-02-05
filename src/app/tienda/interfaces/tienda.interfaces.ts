export interface Producto {
  category:    string;
  description: string;
  id:          number;
  image:       string;
  price:       number;
  rating:      Rating;
  title:       string;
}

export interface Rating {
  count: number;
  rate:  number;
}


export interface NavBarItem{
  nombre: string;
  route: string;
}

export interface ViewProductItem {
  nombre: string;
  route: string;
}
