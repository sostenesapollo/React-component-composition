import { createContext, useContext } from "react"
import type { Product } from "~/types"

const ProductCardContext = createContext<{product: Product} | null>(null)

export function useProductCardContext () {
    const context = useContext(ProductCardContext)

    if(!context) {
        throw new Error('ProductCard.* component must be rendered as a child of ProductCard Component')
    }
    
    return context
}

export default ProductCardContext