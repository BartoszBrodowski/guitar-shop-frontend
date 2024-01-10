import React from 'react';
import Hero from './Hero';
import FeaturedItems from './FeaturedItems';
import { serverClient } from '@/app/_trpc/serverClient';

const index = async () => {
	const bestSellingItems = await serverClient.findBestSellingItems();
	return (
		<>
			<Hero />
			<FeaturedItems featuredItems={bestSellingItems} />
		</>
	);
};

export default index;
