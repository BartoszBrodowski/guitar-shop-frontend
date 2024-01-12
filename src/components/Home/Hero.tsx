import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Hero = () => {
	return (
		<div className='grid grid-cols-2 items-center mb-12'>
			<div className='flex justify-center items-center'>
				<Image
					className='rotate-45 w-auto h-auto'
					width='300'
					height='450'
					src='/HeroGuitar.png'
					alt='Les Paul type guitar drawing'
				/>
			</div>
			<div className='flex flex-col items-start justify-center gap-2 mt-16'>
				<h1 className='text-primary-black font-semibold text-6xl break-words font-cal-sans'>
					Serenade Strings
				</h1>
				<p className='text-gray-500 mb-4 text-xl'>
					Strum Your Passion! Elevate Your Sound with SerenadeStrings.
				</p>
				<Link href='/shop/guitars'>
					<Button className='w-[200px] text-md' size={'lg'}>
						Shop now
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
