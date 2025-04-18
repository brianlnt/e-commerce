import type { Product } from "@/types"

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Features noise cancellation and 20-hour battery life.",
    price: 149.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    description:
      "Work in comfort with our ergonomic office chair. Adjustable height, lumbar support, and breathable mesh back.",
    price: 249.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    category: "Furniture",
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    description:
      "Track your fitness goals with our smart fitness watch. Features heart rate monitoring, GPS, and water resistance.",
    price: 99.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    description: "Stay comfortable with our organic cotton t-shirt. Soft, breathable, and eco-friendly.",
    price: 29.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    category: "Clothing",
  },
  {
    id: "5",
    name: "Stainless Steel Water Bottle",
    description:
      "Stay hydrated with our stainless steel water bottle. Keeps drinks cold for 24 hours and hot for 12 hours.",
    price: 24.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    category: "Kitchen",
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    description: "Charge your devices wirelessly with our sleek charging pad. Compatible with all Qi-enabled devices.",
    price: 39.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
  },
  {
    id: "7",
    name: "Leather Wallet",
    description:
      "Organize your essentials with our genuine leather wallet. Features multiple card slots and RFID protection.",
    price: 49.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
  },
  {
    id: "8",
    name: "Smart Home Security Camera",
    description:
      "Keep your home safe with our smart security camera. Features motion detection, night vision, and two-way audio.",
    price: 129.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
  },
]

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Get all products
export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await delay(500)
  return products
}

// Get product by ID
export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate API delay
  await delay(300)
  return products.find((product) => product.id === id)
}

// Search products
export async function searchProducts(query: string): Promise<Product[]> {
  // Simulate API delay
  await delay(500)

  const lowercaseQuery = query.toLowerCase()

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery),
  )
}

// Get products by category
export async function getProductsByCategory(category: string): Promise<Product[]> {
  // Simulate API delay
  await delay(500)

  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}
