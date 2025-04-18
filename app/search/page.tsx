"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { SearchBar } from "@/components/search-bar";
import { searchProducts } from "@/lib/products";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    const results = await searchProducts(searchQuery);
    setProducts(results);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      <SearchBar onSearch={handleSearch} />

      {query ? (
        <>
          <p className="mb-6">
            {products.length} results for &quot;{query}&quot;
          </p>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">No products found</h2>
              <p className="text-muted-foreground">
                Try a different search term or browse our categories.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">Enter a search term</h2>
          <p className="text-muted-foreground">
            Search for products by name, description, or category.
          </p>
        </div>
      )}
    </div>
  );
}