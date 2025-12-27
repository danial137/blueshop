import Container from '@/components/Container';
import PriceView from '@/components/PriceView';
import { getProductBySlug } from '@/sanity/helper';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react'
import { LuStar } from 'react-icons/lu';

const SingleProductPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const product = await getProductBySlug(slug)

    return (
        <div>
            <Container className='flex flex-col md:flex-row gap-10 py-10'>
                {product?.image && (<div className='w-full md:w-1/2 h-auto border border-darkBlue/20 shadow-md rounded-md group'>
                    <Image src={urlFor(product?.image).url()} alt='product'
                        width={700}
                        height={700}
                        className='w-full max-h-[550px] object-cover group-hover:scale-110 rounded-md hoverEffect'
                    />
                </div>
                )}
                <div className='w-full md:w-1/2 flex flex-col gap-5'>
                    <div>
                        <p className='text-4xl font-bold mb-2'>{product?.name}</p>
                        <div className='flex gap-2 items-center'>
                                   <div className="flex items-center text-gray-500 gap-1">
                                                    {Array.from({ length: 5 }).map((_, index) => {
                                                        const isLastStar = index === 4
                                                        return <LuStar fill={!isLastStar ? "#fca99b" : "transparent"} key={index} className={`${isLastStar ? "text-gray-300" : 'text-yellow-400'}`} />
                                                    })}
                                                </div>
                            <p className='text-sm font-medium text-gray-500 '>{`(25 review )`}</p>
                        </div>
                    </div>
                    <PriceView price={product?.price} discount={product?.discount} label={product?.label}  className='text-lg font-bold'/>
                </div>
            </Container>
        </div>
    )
}

export default SingleProductPage