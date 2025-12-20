import Container from "@/components/Container";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      <Container className="py-4">
        <h2>Eccomerce website</h2>
        <Button variant={"destructive"}>Click me</Button>
      </Container>

    </div>

  );
}
