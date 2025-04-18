import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ShopHero() {
  return (
    <div className="relative bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Discover Our Latest Products</h1>
          <p className="text-xl text-muted-foreground">
            Shop the newest arrivals with exclusive deals and limited-time offers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#products">Shop Now</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden bg-muted-foreground/10">
          {/* Hero image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Hero Image</div>
        </div>
      </div>
    </div>
  )
}
