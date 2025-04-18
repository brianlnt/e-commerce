"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const { itemCount } = useCart()
  const { user, isAuthenticated, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="border-b bg-background sticky top-0 z-40">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            ShopNow
          </Link>

          <nav className="ml-10 hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/categories"
              className={`text-sm font-medium transition-colors ${
                pathname === "/categories" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Categories
            </Link>
            <Link
              href="/deals"
              className={`text-sm font-medium transition-colors ${
                pathname === "/deals" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Deals
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                pathname === "/about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm">Hi, {user?.name}</span>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:block">
              <Button asChild variant="ghost" size="sm">
                <Link href="/login">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
            </div>
          )}

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-medium py-2 ${pathname === "/" ? "text-foreground" : "text-muted-foreground"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/categories"
              className={`text-sm font-medium py-2 ${
                pathname === "/categories" ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/deals"
              className={`text-sm font-medium py-2 ${
                pathname === "/deals" ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Deals
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium py-2 ${
                pathname === "/about" ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {isAuthenticated ? (
              <div className="flex flex-col gap-2 border-t pt-4 mt-2">
                <span className="text-sm">Hi, {user?.name}</span>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="border-t pt-4 mt-2">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
