import Container from "@/components/Container";
import DiscountBanner from "@/components/DiscountBanner";
import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import { getAllCategories, getAllproducts, getSale } from "@/sanity/helper";


export default async function Home() {
  const products = await getAllproducts()
  const sales = await getSale()
  const categories = await getAllCategories()
 

  return (
    <div>
      <Container>
        <DiscountBanner sales={sales} />
        <ProductList products={products} title={true} categories={categories} />
     </Container>
      

    </div>

  );
}
