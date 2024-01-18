import { serverClient } from '@/app/_trpc/serverClient';
import { FunctionComponent } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import FilterCheckboxes from './FilterCheckboxes';
import SortingDropdown from './SortingDropdown';

interface FiltersProps {
	sortOrder: string;
	sortBy: string;
}

const Filters: FunctionComponent<FiltersProps> = async ({ sortOrder, sortBy }) => {
	const guitarTypes = await serverClient.getGuitarTypes();
	console.log(guitarTypes);
	return (
		<Card className='h-fit min-w-[250px]'>
			<CardHeader className='text-2xl font-cal-sans py-4'>Filters</CardHeader>
			<CardContent>
				<FilterCheckboxes sortOrder={sortOrder} sortBy={sortBy} guitarTypes={guitarTypes} />
				<h2 className='text-muted-foreground mt-4 mb-2'>Sort</h2>
				<SortingDropdown />
			</CardContent>
		</Card>
	);
};

export default Filters;
