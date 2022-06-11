import type { NextPage } from 'next';
import { NavBar } from '../src/components/NavBar';
import { Header } from '../src/components/Header';
import { Banner } from '../src/components/Banner';
import { SuggestBanner } from '../src/components/SuggestBanner';
import { Footer } from '../src/components/Footer';

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<div className='max-centered'>
				<Banner />
			</div>
			<SuggestBanner />
			<hr role='separator' />
			<Footer />
		</div>
	);
};

export default Home;
