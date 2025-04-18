import { ProductGrid } from "@/components/product-grid"
import { SearchBar } from "@/components/search-bar"
import { ShopHero } from "@/components/shop-hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ShopHero />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
        <SearchBar />
        <ProductGrid />
      </div>
    </main>
  )
}
