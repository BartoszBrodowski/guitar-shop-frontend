'use client';

import { Pagination } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FunctionComponent } from 'react';

interface PaginationControlProps {
	page: number;
	perPage: number;
	totalPages: number;
}

const PaginationControl: FunctionComponent<PaginationControlProps> = ({
	page,
	perPage,
	totalPages,
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const changePage = (clickedPage: number) => {
		router.push(`?page=${clickedPage}&per_page=${perPage}`);
	};

	return (
		<>
			<Pagination
				showControls
				total={totalPages}
				initialPage={1}
				page={page}
				onChange={(page) => changePage(page)}
			/>
		</>
	);
};

export default PaginationControl;
