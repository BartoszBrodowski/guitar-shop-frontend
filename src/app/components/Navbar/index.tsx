'use client';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { HomeIcon, User, UserRound } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
// import SignInButton from './SignIn';

const Navbar = () => {
	return (
		<div className='flex justify-center fixed w-full h-20 blur-background z-30 border-b-[1px]'>
			<div className='flex justify-center items-center w-full'>
				<div className='flex justify-start basis-2/6'>
					<Link className='ml-8 ' href='/'>
						<HomeIcon className='w-8 h-8' />
					</Link>
				</div>
				<div className='flex w-3/5 justify-center items-center p-8'>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className='text-xl'>Shop</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid grid-cols-2 gap-3 p-6 md:w-[400px] lg:w-[500px]'>
										<div className='col-span-1'>
											<NavigationMenuLink href='/shop/guitars'>
												<h2 className='text-2xl font-semibold'>Guitars</h2>
											</NavigationMenuLink>
											<ul className='flex flex-col'>
												<NavigationMenuLink
													href='/guitars/fender'
													className='w-full hover:bg-gray-100 rounded p-1 text-muted-foreground'>
													Fender
												</NavigationMenuLink>
												<NavigationMenuLink className='w-full hover:bg-gray-100 rounded p-1 text-muted-foreground'>
													Gibson
												</NavigationMenuLink>
												<NavigationMenuLink className='w-full hover:bg-gray-100 rounded p-1 text-muted-foreground'>
													Gretsch
												</NavigationMenuLink>
											</ul>
										</div>
										<div>
											<NavigationMenuLink href='/shop/strings'>
												<h2 className='text-2xl font-semibold'>Strings</h2>
											</NavigationMenuLink>
											<ul className='flex flex-col'>
												<NavigationMenuLink
													href='/guitars/fender'
													className='w-full hover:bg-gray-100 rounded p-1 text-muted-foreground'>
													Fender
												</NavigationMenuLink>
												<NavigationMenuLink className='w-full hover:bg-gray-100 rounded p-1 text-muted-foreground'>
													Gibson
												</NavigationMenuLink>
												<NavigationMenuLink className='w-full hover:bg-gray-100 rounded p-1 text-muted-foreground'>
													Gretsch
												</NavigationMenuLink>
											</ul>
										</div>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/about' legacyBehavior passHref>
									<NavigationMenuLink
										href='/'
										className={'text-xl ' + navigationMenuTriggerStyle()}>
										About
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href='/contact' legacyBehavior passHref>
									<NavigationMenuLink
										href='/'
										className={'text-xl ' + navigationMenuTriggerStyle()}>
										Contact
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className='flex justify-end basis-2/6'>
					<Link className='mr-8' href='/signin'>
						<UserRound className='w-8 h-8' />
					</Link>
				</div>
			</div>
		</div>
	);
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}>
						<div className='text-md font-medium leading-none mb-2'>{title}</div>
						<div className='text-sm leading-snug text-muted-foreground'>{children}</div>
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = 'ListItem';

export default Navbar;
