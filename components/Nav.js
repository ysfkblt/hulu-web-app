import { useRouter } from 'next/router';
import requests from '../utility/requests';

export default function Nav() {
	const router = useRouter();

	return (
		<nav className='relative'>
			<div className='flex  sm:px-20 px-10 text-2xl  space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide whitespace-nowrap w-screen'>
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						key={key}
						onClick={() => router.push(`/?genre=${key}`)}
						className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-[#1ce783]  last:pr-16 first:-ml-4  '
					>
						{title}
					</h2>
				))}
			</div>
			<div className='absolute top-0 right-0 bg-gradient-to-r from-[#183949]  h-10 w-20 blur-md ' />
		</nav>
	);
}
/* bg-gradient-to-r from-[#040405] to-[#183949] */
