import type { NextPage } from 'next';
import { NavBar } from '../src/components/NavBar';
import { Header } from '../src/components/Header';
import { Banner } from '../src/components/Banner';

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<div className='max-centered'>
				<Banner />
			</div>
		</div>
	);
};

export default Home;
