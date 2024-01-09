import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Hero = () => {
	return (
		<div className='grid grid-cols-2 items-center h-screen'>
			<div className='flex justify-center items-center'>
				<Image
					className='rotate-45 w-auto h-auto'
					width='400'
					height='500'
					src='/HeroGuitar.png'
					alt='Les Paul type guitar drawing'
				/>
			</div>
			<div className='flex flex-col items-start justify-center gap-2'>
				<h1 className='text-primary-black font-semibold text-6xl break-words'>START STRUMMING</h1>
				<p className='text-gray-500 mb-4 text-2xl'>Can&apos;t strum without a proper guitar...</p>
				<Link href='/shop/guitars'>
					<Button className='w-[200px]' size={'lg'}>
						Shop now
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
