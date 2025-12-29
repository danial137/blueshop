import { searchProductsByName } from "@/sanity/helper";

interface Props {
    searchParams: {
        query: string
    }
}

const SearchPage = async ({ searchParams }: Props) => {
    const { query } = await searchParams;
    const product = await searchProductsByName
    console.log(product)

    return (
        <div>page</div>
    )
}

export default SearchPage