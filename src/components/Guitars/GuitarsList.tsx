import { Guitar } from '@prisma/client';
import { FunctionComponent } from 'react';
import ItemCard from '../Home/ItemCard';
import Filters from './Filters';

interface GuitarsListProps {
	sortOrder: string;
	sortBy: string;
	guitarsList: Guitar[];
}

const GuitarsList: FunctionComponent<GuitarsListProps> = ({ sortOrder, sortBy, guitarsList }) => {
	return (
		<div className='flex gap-4 min-w-[300px]'>
			<Filters sortOrder={sortOrder} sortBy={sortBy} />
			<div className='grid grid-cols-3 gap-x-4 gap-y-4 items-stretch'>
				{guitarsList.map((guitar) => {
					return <ItemCard className='max-w-[300px]' key={guitar.id} item={guitar} />;
				})}
			</div>
		</div>
	);
};

export default GuitarsList;
