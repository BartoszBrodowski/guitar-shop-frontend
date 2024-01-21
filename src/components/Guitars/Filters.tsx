import { serverClient } from '@/app/_trpc/serverClient';
import { FunctionComponent } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import FilterCheckboxes from './FilterCheckboxes';
import SortingDropdown from './SortingDropdown';

const Filters: FunctionComponent = async () => {
	const guitarTypes = await serverClient.getGuitarTypes();
	return (
		<Card className='h-fit min-w-[250px]'>
			<CardHeader className='text-2xl font-cal-sans py-4'>Filters</CardHeader>
			<CardContent>
				<FilterCheckboxes guitarTypes={guitarTypes} />
				<h2 className='text-muted-foreground mt-4 mb-2'>Sort</h2>
				<SortingDropdown />
			</CardContent>
		</Card>
	);
};

export default Filters;
