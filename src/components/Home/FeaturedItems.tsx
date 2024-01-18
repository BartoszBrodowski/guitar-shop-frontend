import { Guitar } from '@prisma/client';
import { FunctionComponent } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel';
import ItemCard from './ItemCard';

interface FeaturedItemsProps {
	featuredItems: Guitar[];
}

const FeaturedItems: FunctionComponent<FeaturedItemsProps> = ({ featuredItems }) => {
	return (
		<div className='w-full'>
			<h1 className='text-3xl font-semibold font-cal-sans'>Best Sellers!</h1>
			<p className='text-muted-foreground text-sm mb-4'>
				That&apos;s what our customers like the most.
			</p>
			<Carousel className='w-full'>
				<CarouselContent className='w-full'>
					{featuredItems.map((item, index) => (
						<CarouselItem key={index} className='max-w-xs'>
							<div className='p-1'>
								<ItemCard item={item} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default FeaturedItems;
