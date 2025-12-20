import { SALE_QUERY_RESULT } from '@/sanity.types'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Card, CardContent, CardHeader } from './ui/card'

const DiscountBanner = ({ sales }: { sales: SALE_QUERY_RESULT }) => {
  return (
    <Carousel className='w-full max-h-screen-xl max-auto my-10'>
      <CarouselContent>
        {sales?.map((sale) => (
          <CarouselItem key={sale?._rev}>
            <Card>
              <CardContent>
                <div>
                  <div>
                    <p>{sale?.title}</p>
                  </div>
                </div>

              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default DiscountBanner