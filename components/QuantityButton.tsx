import { Product } from "@/sanity.types"
import { Button } from "./ui/button";
import { HiMinus, HiPlus } from "react-icons/hi2"
import toast from "react-hot-toast";

interface Props {
    product: Product;
    className?: string
    borderStyle?: string
}

const QuantityButton = ({ product, className, borderStyle }: Props) => {
    const handleRemoveProduct = () => {
        toast.success('remove product successfully')
    }
    return (
        <div>
            <Button variant={'outline'} size='icon' className="w-6 h-6" onClick={handleRemoveProduct}><HiPlus /></Button>
        </div>
    )
}

export default QuantityButton