import { serverClient } from '@/app/_trpc/serverClient';
import GuitarsList from '@/components/Guitars/GuitarsList';
import PaginationControl from '@/components/PaginationControl';
import { Type } from '@prisma/client';

const Guitars = async ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const page = Number(searchParams['page'] ?? '1');
	const perPage = Number(searchParams['per-page'] ?? '9');
	const sortBy = (searchParams['sort-by'] as string) ?? 'createdAt';
	const sortOrder = (searchParams['sort-order'] as string) ?? 'desc';
	const typeFilters = searchParams['type']
		? Array.isArray(searchParams['type'])
			? searchParams['type']
			: [searchParams['type']]
		: ['ACOUSTIC', 'ELECTRIC', 'BASS'];

	const { guitars, totalGuitarsCount } = await serverClient.getGuitarPage({
		page: page,
		perPage: perPage,
		sortField: sortBy as string,
		sortOrder: sortOrder as string,
		typeFilters: typeFilters as Type[],
	});
	const totalPages = Math.ceil(totalGuitarsCount / perPage);

	return (
		<div className='flex justify-center my-16 mx-auto gap-8'>
			<div className='flex flex-col items-center w-fit'>
				<h1 className='text-4xl font-semibold font-cal-sans text-left w-full mb-2'>
					Guitars ({totalGuitarsCount})
				</h1>
				<GuitarsList guitarsList={guitars} />
				<PaginationControl page={page} perPage={perPage} totalPages={totalPages} />
			</div>
		</div>
	);
};

export default Guitars;
