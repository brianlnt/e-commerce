"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash } from "lucide-react"
import { useCart } from "@/context/cart-context"
import type { CartItem as CartItemType } from "@/types"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateItemQuantity, removeItem } = useCart()

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number.parseInt(e.target.value)
    if (newQuantity > 0) {
      updateItemQuantity(item.id, newQuantity)
    }
  }

  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="relative w-24 h-24 flex-shrink-0">
        <Link href={`/products/${item.id}`}>
          <Image src={item.imageUrl || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded-md" />
        </Link>
      </div>
      <div className="flex-1 flex flex-col">
        <Link href={`/products/${item.id}`} className="font-medium hover:underline">
          {item.name}
        </Link>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-4 mt-auto">
          <div className="flex items-center">
            <Input type="number" min="1" value={item.quantity} onChange={handleQuantityChange} className="w-16 h-8" />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-0 h-auto"
          >
            <Trash className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>
      <div className="flex-shrink-0 font-medium">${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  )
}
