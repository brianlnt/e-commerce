import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-md mx-auto">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. We&apos;ve sent a confirmation email with your order details.
        </p>
        <div className="space-y-2">
          <Button asChild className="w-full">
            <Link href="/orders">View My Orders</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
