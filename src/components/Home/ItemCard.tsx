import { Guitar } from '@prisma/client';
import { FunctionComponent } from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { BaggageClaim } from 'lucide-react';

interface ItemCardProps {
	simple?: boolean;
	item: Guitar;
	className?: string;
}

const ItemCard: FunctionComponent<ItemCardProps> = ({ simple, item, className }) => {
	const availability = () => {
		return item.stockAmount > 0 ? 'In stock' : 'Out of stock';
	};
	return (
		<div className={className}>
			<Card className='relative'>
				<CardContent className='flex aspect-square items-center justify-center p-6'>
					<Image src={item.imageUrl} alt={item.name} width={200} height={200} />
				</CardContent>
				{/* <p className='text-xl absolute bottom-2 right-2'>{item.price}$</p> */}
			</Card>
			<div className='p-2'>
				<h1 className='text-lg'>{item.name}</h1>
				<h2 className='text-muted-foreground'>{item.manufacturerName}</h2>
				{simple && <h2>{availability()}</h2>}
				{!simple && (
					<div className='flex items-center justify-between mt-1 text-muted-foreground'>
						<p className='flex items-center gap-1'>
							<BaggageClaim size={20} />
							{item.stockAmount} in stock
						</p>
						<p className='text-xl'>${item.price}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ItemCard;
