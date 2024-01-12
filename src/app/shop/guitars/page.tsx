import { serverClient } from '@/app/_trpc/serverClient';
import PaginationControl from '@/components/PaginationControl';
import React from 'react';

const Guitars = async ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const page = Number(searchParams['page'] ?? '1');
	const perPage = Number(searchParams['per_page'] ?? '5');

	const { guitars, totalGuitarsCount } = await serverClient.getGuitarPage({
		page: page,
		perPage: perPage,
	});

	const totalPages = Math.ceil(totalGuitarsCount / perPage);

	return (
		<div>
			{guitars.map((guitar) => {
				return (
					<div key={guitar.id}>
						<h2>{guitar.name}</h2>
						<p>{guitar.id}</p>
					</div>
				);
			})}
			<PaginationControl page={page} perPage={perPage} totalPages={totalPages} />
		</div>
	);
};

export default Guitars;
