import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { getSale } from "@/sanity/helper";


export default async function Home() {
  const sales = await getSale()
  console.log(sales)
  return (
    <div>
      <Container className="py-20">
        <h2>Eccomerce website</h2>
        <Button variant={"destructive"}>Click me</Button>
       
      </Container>

    </div>

  );
}
