import Container from "@/components/Container";
import DiscountBanner from "@/components/DiscountBanner";
import { Button } from "@/components/ui/button";
import { getSale } from "@/sanity/helper";


export default async function Home() {
  const sales = await getSale()
  console.log(sales)
  return (
    <div>
      <DiscountBanner sales={sales} />
    </div>

  );
}
