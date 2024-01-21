import { Checkbox } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';

interface CheckboxFilterProps {
	value: string;
	amount: number;
}

const CheckboxFilter: FunctionComponent<CheckboxFilterProps> = ({ value, amount }) => {
	const [isSelected, setIsSelected] = useState<boolean>(false);
	const router = useRouter();
	const currentPathname = usePathname();
	const searchParams = useSearchParams();
	const typeFilters = new URLSearchParams(Array.from(searchParams.entries()));

	useEffect(() => {
		if (typeFilters.toString().includes(value)) {
			setIsSelected(true);
		}
	}, []);

	const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
		setIsSelected(!isSelected);

		if (typeFilters.toString().includes(event.target.value)) {
			typeFilters.delete('type', event.target.value);
		} else {
			typeFilters.append('type', event.target.value);
		}

		const search = typeFilters.toString();
		const query = search ? `?${search}` : '';
		router.push(`${currentPathname}${query}`);
	};

	return (
		<Checkbox isSelected={isSelected} value={value} onChange={(e) => onSelect(e)}>
			{value.charAt(0) + value.toLowerCase().slice(1) + ` (${amount})`}
		</Checkbox>
	);
};

export default CheckboxFilter;
