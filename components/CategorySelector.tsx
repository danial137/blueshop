"use client"
import { Category } from '@/sanity.types'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Popover } from './ui/popover'
interface Props {
    categories: Category[]
}
const CategorySelector = ({ categories }: Props) => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("");
    const router = useRouter()

    return <Popover>
        
    </Popover>


}

export default CategorySelector