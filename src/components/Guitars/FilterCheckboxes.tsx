'use client';

import { $Enums, Type } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { FunctionComponent, useState, useEffect } from 'react';
import CheckboxFilter from './CheckboxFilter';

interface FilterCheckboxesProps {
	sortOrder: string;
	sortBy: string;
	guitarTypes: {
		type: $Enums.Type;
	}[];
}

const FilterCheckboxes: FunctionComponent<FilterCheckboxesProps> = ({
	sortOrder,
	sortBy,
	guitarTypes,
}) => {
	const [filterTypes, setFilterTypes] = useState<Type[]>([]);
	const router = useRouter();

	const changeFilter = (type: string, isSelected: boolean) => {
		setFilterTypes((prevFilterTypes) => {
			if (isSelected) {
				return [...prevFilterTypes, type as Type];
			}
			return prevFilterTypes.filter((filterType) => filterType !== type);
		});
	};

	useEffect(() => {
		const filterTypesString = filterTypes.join(',');
		router.push(`?sort-by=${sortBy}&sort-order=${sortOrder}&type=${filterTypesString}`);
	}, [filterTypes, sortBy, sortOrder, router]);

	return (
		<>
			{guitarTypes.map((type, index) => {
				return <CheckboxFilter key={index} value={type.type} changeFilter={changeFilter} />;
			})}
		</>
	);
};

export default FilterCheckboxes;
