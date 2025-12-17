"use client"
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <Link href={"/cart"} className='flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none'>

            <ShoppingBag />
            <div className='flex flex-col'>
                <p>
                    <span>0</span>items
                </p>
                <p>cart</p>
            </div>
        </Link>
    )
}

export default CartIcon