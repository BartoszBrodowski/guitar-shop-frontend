'use client';

import { Checkbox } from '@nextui-org/react';
import { $Enums } from '@prisma/client';
import { FunctionComponent } from 'react';

interface FilterCheckboxesProps {
	guitarKinds: {
		type: $Enums.Type;
	}[];
}

const FilterCheckboxes: FunctionComponent<FilterCheckboxesProps> = ({ guitarKinds }) => {
	return (
		<>
			{guitarKinds.map((kind, index) => {
				return (
					<Checkbox key={index} value={kind.type}>
						{kind.type}
					</Checkbox>
				);
			})}
		</>
	);
};

export default FilterCheckboxes;
