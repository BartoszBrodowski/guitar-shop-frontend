'use client';

import { ChevronsUpDown } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import React, { FunctionComponent, useState } from 'react';
import { Button } from '../ui/button';
import { Guitar } from '@prisma/client';
import { useRouter } from 'next/navigation';

enum Filter {
	Newest = 'Newest',
	PriceLowToHigh = 'Price: Low to High',
	PriceHighToLow = 'Price: High to Low',
	BestSelling = 'Best Selling',
}

enum FilterField {
	CreatedAt = 'createdAt',
	Price = 'price',
	SoldAmount = 'soldAmount',
}

enum SortOrder {
	Asc = 'asc',
	Desc = 'desc',
}

type FilterOption = {
	label: string;
	field: FilterField;
	sortOrder: SortOrder;
};

const filterOptions: FilterOption[] = [
	{ label: 'Newest', field: FilterField.CreatedAt, sortOrder: SortOrder.Desc },
	{ label: 'Price: Low to High', field: FilterField.Price, sortOrder: SortOrder.Asc },
	{ label: 'Price: High to Low', field: FilterField.Price, sortOrder: SortOrder.Desc },
	{ label: 'Best Selling', field: FilterField.SoldAmount, sortOrder: SortOrder.Desc },
];

const SortingDropdown: FunctionComponent = () => {
	const [sort, setSort] = useState<string>('Newest');
	const router = useRouter();
	const changeSort = (label: string, kind: FilterField, sortOrder: SortOrder) => {
		setSort(label);
		router.push(`?sort-by=${kind}&sort-order=${sortOrder}`);
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className='flex justify-between w-full'>
					{sort}
					<ChevronsUpDown size={16} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuRadioGroup value={sort}>
				<DropdownMenuContent className='w-[230px]'>
					<ul className='flex flex-col'>
						{filterOptions.map((option, index) => {
							return (
								<DropdownMenuRadioItem
									onClick={() => changeSort(option.label, option.field, option.sortOrder)}
									value={option.label}
									className='hover:cursor-pointer w-full'
									key={index}>
									{option.label}
								</DropdownMenuRadioItem>
							);
						})}
					</ul>
				</DropdownMenuContent>
			</DropdownMenuRadioGroup>
		</DropdownMenu>
	);
};

export default SortingDropdown;
