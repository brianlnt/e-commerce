export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface User {
  id: string
  name: string
  email: string
}

export interface Order {
  userId: string
  items: CartItem[]
  total: number
  shippingDetails: {
    name: string
    email: string
    address: string
    city: string
    zipCode: string
    country: string
  }
}
