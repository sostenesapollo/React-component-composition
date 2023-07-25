import ProductId from "./product-id";
import ProductImage from "./product-image";
import ProductTitle from "./product-title";

type Props = {
    id: string;
    image: string;
    title: string
}

export default function ProductCard ({id, image, title}: Props) {
    return (
        <>
           <ProductId id={id}/>
           <div style={{display: 'flex'}}>
            <ProductImage image={image}/>
            <ProductTitle title={title} />
           </div>
        </>
    )
}