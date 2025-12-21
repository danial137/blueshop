import { SALE_QUERY_RESULT } from '@/sanity.types'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const DiscountBanner = ({ sales }: { sales: SALE_QUERY_RESULT }) => {
  return (
    <Carousel className="w-full max-w-(--breakpoint-xl) mx-auto mt-10 mb-5">
      <CarouselContent>
        {sales?.map((sale) => (
          <CarouselItem key={sale?._id}>
            <Card>
              <CardContent className='p-0'>
                <div className='flex flex-col md:flex-row items-center '>
                  <div className='flex-1 p-6 md:px-12'>
                    <Badge variant='secondary' className='mb-2 md:mb-4'>
                      {sale?.badge} {sale?.discountAmount} %
                      Off
                    </Badge>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 md:mb-4'>{sale?.title}</h2>
                    <p className='text-muted-foreground'>{sale?.description}</p>
                  </div>
                  {sale?.image && (
                    <div className='w-full md:w-1/2 h-auto flex itesm-center justify-center py-2'>
                      <Image src={urlFor(sale?.image).url()} alt="bannerImage" width={500} height={500} objectFit='cover' className='h-full transition-transform hover:scale-105 ease-in-out ' />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute left-2' />
      <CarouselNext className='absolute right-2' />
    </Carousel>
  )
}

export default DiscountBanner