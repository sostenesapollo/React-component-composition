import { useProductCardContext } from "./product-card-context";

export default function ProductTitle () {
    const {product} = useProductCardContext()

    return (
        <h2>{product.title}</h2>
    )
}
