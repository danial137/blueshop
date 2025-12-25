import { Product } from "@/sanity.types"
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
    product: Product;
    className?: string
}

const AddToCartButton = ({ product, className }: Props) => {
    return <Button className={cn('bg-dark-blue/10')}>Add to Cart</Button>
}

export default AddToCartButton