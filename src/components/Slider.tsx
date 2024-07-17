import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Slider() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardContent className="flex p-0 rounded-lg overflow-hidden aspect-video items-center justify-center">
              <Image
                src="/services1.png"
                alt="Services 1"
                width={1000}
                height={1000}
              />
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <CardContent className="flex p-0 rounded-lg overflow-hidden aspect-video items-center justify-center">
              <Image
                src="/services2.png"
                alt="Services 2"
                width={1000}
                height={1000}
              />
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
