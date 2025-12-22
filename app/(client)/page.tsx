import Container from "@/components/Container";
import DiscountBanner from "@/components/DiscountBanner";
import { Button } from "@/components/ui/button";
import { getAllproducts, getSale } from "@/sanity/helper";


export default async function Home() {
  const products = await getAllproducts()
  const sales = await getSale()
  return (
    <div>
      <DiscountBanner sales={sales} />

    </div>

  );
}
