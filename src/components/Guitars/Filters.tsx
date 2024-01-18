import { Guitar } from '@prisma/client';
import { FunctionComponent } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import SortingDropdown from './SortingDropdown';
import { serverClient } from '@/app/_trpc/serverClient';
import FilterCheckboxes from './FilterCheckboxes';

const Filters: FunctionComponent = async () => {
	const guitarKinds = await serverClient.getGuitarKinds();
	console.log(guitarKinds);
	return (
		<Card className='h-fit min-w-[250px]'>
			<CardHeader className='text-2xl font-cal-sans py-4'>Filters</CardHeader>
			<CardContent>
				<FilterCheckboxes guitarKinds={guitarKinds} />
				<h2 className='text-muted-foreground mt-4 mb-2'>Sort</h2>
				<SortingDropdown />
			</CardContent>
		</Card>
	);
};

export default Filters;
