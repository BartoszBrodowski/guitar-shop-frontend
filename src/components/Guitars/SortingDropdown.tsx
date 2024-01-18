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

interface SortingDropdownProps {
	guitarList: Guitar[];
	sortGuitarList: (field: string) => Guitar[];
}

const filters = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Best Selling'];

const SortingDropdown: FunctionComponent<SortingDropdownProps> = ({
	guitarList,
	sortGuitarList,
}) => {
	const [sort, setSort] = useState<string>('Newest');

	const changeSortField = async (field: string) => {
		setSort(field);
		sortGuitarList(field);
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
						{filters.map((field, index) => {
							return (
								<DropdownMenuRadioItem
									onClick={async () => await sortGuitarList(field)}
									value={field}
									className='hover:cursor-pointer w-full'
									key={index}>
									{field}
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
