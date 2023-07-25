import type { ReactNode } from "react";
import ProductCardContext from "./product-card-context";
import type { Product } from "~/types";
import ProductImage from "./product-image";
import ProductTitle from "./product-title";
import ProductId from "./product-id";

type Props = {
    id?: ReactNode;
    image?: ReactNode;
    title?: ReactNode;
    product: Product
}

function ProductCardComposed ({id, image, title, product}: Props) {
    return (
        <>
            <ProductCardContext.Provider value={{product}}>
                {id}
                <div style={{display: 'flex'}}>
                    {image}
                    {title}
                </div>
            </ProductCardContext.Provider>
        </>
    )
}

ProductCardComposed.Image = ProductImage;
ProductCardComposed.Title = ProductTitle;
ProductCardComposed.Id = ProductId;

export default ProductCardComposed;