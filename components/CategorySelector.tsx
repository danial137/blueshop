import { Category } from '@/sanity.types'
import React from 'react'
interface Props {
    categories: Category[]
}
const CategorySelector = ({categories}:Props) => {
    return (
        <div>CategorySelector</div>
    )
}

export default CategorySelector