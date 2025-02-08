'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.jsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { toast } from 'sonner';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h2>Accordion</h2>
      <div>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent className='bg-red-400'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <h2>Sonar</h2>
      <button
        onClick={() => {
          toast.success('Success');
        }}
      >
        Toggle sonar
      </button>
      <h2>Carousal</h2>
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="bg-red-200 h-20">1</CarouselItem>
            <CarouselItem className="bg-blue-200 h-20">2</CarouselItem>
            <CarouselItem className="bg-yellow-200 h-20">3</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
