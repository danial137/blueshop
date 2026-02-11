"use client"
import { Category } from '@/sanity.types'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { ChevronsUpDown } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'
interface Props {
    categories: Category[]
}
const CategorySelector = ({ categories }: Props) => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("");
    const router = useRouter()

    return <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
            <Button variant='outline' role='combobox' aria-expanded={open} className="w-[200px] justify-between">
                {value ? categories.find((category) => category?._id === value)?.title : 'Filter by Category'}
                <ChevronsUpDown />
            </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
            <Command>
                <CommandInput placeholder='Search category...' className='h-9' onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        const selectedCategory = categories.find((c) => c.title?.toLowerCase().includes(e.currentTarget.value.toLocaleLowerCase())
                        );
                    }
                }}
                />

                <CommandList>
                    <CommandEmpty>No Ctegory found </CommandEmpty>
                    <CommandGroup>
                        {categories?.map((category) => (
                            <CommandItem key={category?._id} value={category?.title} onSelect={() => {
                                setValue(value === category?._id ? category?._id : category?._id)
                            }}>
                                {category?.title}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>


}

export default CategorySelector