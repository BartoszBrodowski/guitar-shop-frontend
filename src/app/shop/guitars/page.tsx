import { serverClient } from '@/app/_trpc/serverClient';
import GuitarsList from '@/components/Guitars/GuitarsList';
import PaginationControl from '@/components/PaginationControl';

const Guitars = async ({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const page = Number(searchParams['page'] ?? '1');
	const perPage = Number(searchParams['per_page'] ?? '9');

	const { guitars, totalGuitarsCount } = await serverClient.getGuitarPage({
		page: page,
		perPage: perPage,
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
