import { Product } from "@/sanity.types"


interface Props {
    products: Product[]
    title?: boolean
}

const ProductList = ({ products, title }: Props) => {
    return (
        <div>ProductList</div>
    )
}

export default ProductList