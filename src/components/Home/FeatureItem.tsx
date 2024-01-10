import { Guitar } from '@prisma/client';
import { FunctionComponent } from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

interface FeaturedItemProps {
	item: Guitar;
}

const FeaturedItem: FunctionComponent<FeaturedItemProps> = ({ item }) => {
	const availability = () => {
		return item.stockAmount > 0 ? 'In stock' : 'Out of stock';
	};
	return (
		<div>
			<Card className='relative'>
				<CardContent className='flex aspect-square items-center justify-center p-6'>
					<Image src={item.imageUrl} alt={item.name} width={200} height={200} />
				</CardContent>
				<p className='text-xl absolute bottom-2 right-2'>{item.price}$</p>
			</Card>
			<div className='p-2'>
				<h1 className='text-lg'>{item.name}</h1>
				<h2 className='text-muted-foreground'>{item.manufacturerName}</h2>
				<h3>{availability()}</h3>
			</div>
		</div>
	);
};

export default FeaturedItem;
