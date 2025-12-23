import { Category, Product } from "@/sanity.types"


interface Props {
    products: Product[]
    title?: boolean;
    categories:Category[]
}

const ProductList = ({ products, title, categories }: Props) => {
    return (
        <div>ProductList</div>
    )
}

export default ProductList