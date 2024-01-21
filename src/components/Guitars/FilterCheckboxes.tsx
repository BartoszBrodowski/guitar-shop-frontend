'use client';

import { $Enums } from '@prisma/client';
import { FunctionComponent } from 'react';
import CheckboxFilter from './CheckboxFilter';

interface FilterCheckboxesProps {
	guitarTypes: {
		type: $Enums.Type;
		amount: number;
	}[];
}

const FilterCheckboxes: FunctionComponent<FilterCheckboxesProps> = ({ guitarTypes }) => {
	return (
		<div className='flex flex-col gap-2'>
			{guitarTypes.map((type, index) => {
				return <CheckboxFilter key={index} value={type.type} amount={type.amount} />;
			})}
		</div>
	);
};

export default FilterCheckboxes;
