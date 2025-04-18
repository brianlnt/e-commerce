import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/lib/products"

export async function ProductGrid() {
  const products = await getProducts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
