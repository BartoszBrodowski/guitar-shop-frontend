import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';

const FeaturedItems = () => {
	return (
		<div className='w-full'>
			<h1 className='text-3xl font-semibold font-cal-sans'>Best Sellers!</h1>
			<p className='text-muted-foreground text-sm mb-4'>
				That&apos;s what our customers like the most.
			</p>
			<Carousel className='w-full'>
				<CarouselContent className='w-full'>
					{Array.from({ length: 10 }).map((_, index) => (
						<CarouselItem key={index} className='max-w-xs'>
							<div className='p-1'>
								<Card>
									<CardContent className='flex aspect-square items-center justify-center p-6'>
										<span className='text-4xl font-semibold'>{index + 1}</span>
									</CardContent>
								</Card>
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
