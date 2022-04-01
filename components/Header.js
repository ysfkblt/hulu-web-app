import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';

export default function Header() {
	return (
		<header className='flex flex-col sm:flex-row mr-10 ml-5 my-10 justify-between items-center sm:items-start h-auto'>
			<div className='flex flex-grow justify-around max-w-2xl'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			<img className='h-7' src='/logo_green.svg' alt='hulu logo' />
		</header>
	);
}
