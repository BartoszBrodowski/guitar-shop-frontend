import Hero from '@/components/Home';
import 'cal-sans';

export default async function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 pt-0 max-w-[1600px] mx-auto items-center'>
			<Hero />
		</main>
	);
}
