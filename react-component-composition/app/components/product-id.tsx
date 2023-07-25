import { useProductCardContext } from "./product-card-context"

export default function ProductId () {
    const {product} = useProductCardContext()

    return (
        <h1>{product.id}</h1>
    )
}
