import { searchProductsByName } from "@/sanity/helper";

interface Props {
    searchParams: {
        query: string
    }
}

const SearchPage = async ({ searchParams }: Props) => {
    const { query } = await searchParams;
    const product = await searchProductsByName(query)
    console.log(product)

    return (
        <div>SearchPage</div>
    )
}

export default SearchPage