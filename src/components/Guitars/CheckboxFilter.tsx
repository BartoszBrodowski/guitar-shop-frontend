import { Checkbox } from '@nextui-org/react';
import { Type } from '@prisma/client';
import React, { FunctionComponent, useState } from 'react';

interface CheckboxFilterProps {
	value: string;
	changeFilter: (type: string, isSelected: boolean) => void;
}

const CheckboxFilter: FunctionComponent<CheckboxFilterProps> = ({ value, changeFilter }) => {
	const [isSelected, setIsSelected] = useState(false);
	const handleSelect = (changedIsSelected: boolean) => {
		setIsSelected(!isSelected);
		changeFilter(value, changedIsSelected);
		console.log(handleSelect);
	};
	return (
		<Checkbox isSelected={isSelected} value={value} onChange={() => handleSelect(!isSelected)}>
			{value}
		</Checkbox>
	);
};

export default CheckboxFilter;
