import Hero from '@/components/Hero';

export default async function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between px-24'>
			<Hero />
		</main>
	);
}
