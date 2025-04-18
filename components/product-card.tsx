import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/types"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/products/${product.id}`} className="block aspect-square relative">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        {/* Make product name and price more prominent */}
        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        <p className="font-semibold text-lg text-primary mb-2">${product.price.toFixed(2)}</p>

        {/* Move description below price and limit its height */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 h-10 overflow-hidden">{product.description}</p>

        <div className="mt-2">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}
