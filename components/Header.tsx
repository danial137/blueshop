import Image from 'next/image'
import React from 'react'
import logo from "@/images/logo.png"
import Container from './Container'
import Form from 'next/form'
import Link from 'next/link'
import CartIcon from './CartIcon'


const Header = () => {
    return (
        <header className='w-full bg-white py-4 border-b border-b-gray-400'>
            <Container className='flex items-center justify-between gap-5'>
                <Link href='/'><Image src={logo} alt='logo' className='w-24' priority /></Link>
                <Form action="/search" className='flex-1'>
                    <input type="text" name='query' placeholder='Search products...' className='w-full border-2 border-gray-200 px-4 py-2.5 rounded-md focus-visible:border-darkBlue outline-none' />
                </Form>
                <div className='flex items-center gap-5'>
                    <CartIcon />
                    <p>Order</p>
                    <p>Account</p>
                </div>
            </Container>
        </header>
    )
}

export default Header