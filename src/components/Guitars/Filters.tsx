import { Guitar } from '@prisma/client';
import { FunctionComponent } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import SortingDropdown from './SortingDropdown';
import { serverClient } from '@/app/_trpc/serverClient';
import FilterCheckboxes from './FilterCheckboxes';

interface FiltersProps {
	guitarsList: Guitar[];
}

const Filters: FunctionComponent<FiltersProps> = async ({ guitarsList }) => {
	const sortGuitars = (field: string) => {
		switch (field) {
			case 'Newest':
				return guitarsList.sort((a, b) => {
					return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
				});
			case 'Price: Low to High':
				return guitarsList.sort((a, b) => {
					return a.price - b.price;
				});
			case 'Price: High to Low':
				return guitarsList.sort((a, b) => {
					return b.price - a.price;
				});
			case 'Best Selling':
				return guitarsList.sort((a, b) => {
					return b.soldAmount - a.soldAmount;
				});
			default:
				return guitarsList;
		}
	};
	const guitarKinds = await serverClient.getGuitarKinds();
	return (
		<Card className='h-fit min-w-[250px]'>
			<CardHeader className='text-2xl font-cal-sans py-4'>Filters</CardHeader>
			<CardContent>
				<FilterCheckboxes guitarKinds={guitarKinds} />
				<h2 className='text-muted-foreground mt-4 mb-2'>Sort</h2>
				<SortingDropdown guitarList={guitarsList} sortGuitarList={sortGuitars} />
			</CardContent>
		</Card>
	);
};

export default Filters;
