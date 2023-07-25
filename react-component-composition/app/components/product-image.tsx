import { useProductCardContext } from "./product-card-context";

export default function ProductImage () {
    const {product} = useProductCardContext()
    return (
        <img src={product.image} alt="Product Img"/>
    )
}
