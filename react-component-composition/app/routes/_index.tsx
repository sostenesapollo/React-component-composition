import ProductCardComposed from "~/components/product-card-composed";
import type { Product } from "~/types";

const product: Product = {
  id: '1',
  image: 'https://source.unsplash.com/random/300x300',
  title: 'The image title'
}

export default function Index() {
  return (
    <>

      {/* Instead of this */}
      {/* <ProductCard
        image="https://source.unsplash.com/random/300x300"
        title="Random Image"
        id={'1'}
      /> */}

      <ProductCardComposed
        // id={<ProductCardComposed.Image/>}
        image={<ProductCardComposed.Title/>}
        // title={<ProductCardComposed.Id/>}
        product={product}
      />
      
      {/* <ProductCardComposed.Image/> */}

    </>
  );
}
