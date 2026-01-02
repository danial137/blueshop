import { searchProductsByName } from "@/sanity/helper";

interface Props {
    searchParams: {
        query: string
    }
}

const SearchPage = async ({ searchParams }: Props) => {
    const { query } = await searchParams;
    const product = await searchProductsByName(query)
    if (!product.length) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
                    <h1>no product found for <span>{query}</span> </h1>
                    <p>try searching with different keyword </p>
                </div>
            </div>
        )
    }

    return (
        <div>SearchPage</div>
    )
}

export default SearchPage