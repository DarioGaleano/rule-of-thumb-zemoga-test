import type { NextPage } from 'next';
import { NavBar } from '../src/components/NavBar';
import { Header } from '../src/components/Header';
import { Banner } from '../src/components/Banner';
import { SuggestBanner } from '../src/components/SuggestBanner';
import { Footer } from '../src/components/Footer';
import { CardsCollection } from '../src/components/CardsCollection';
import { HomeProps } from '../src/types/types';
import { server } from '../src/config/server';

const Home: NextPage<HomeProps> = ({ celebs }) => {
	return (
		<div>
			<NavBar />
			<Header />
			<div className='max-centered'>
				<Banner />
			</div>
			<main role='main'>
				<CardsCollection cards={celebs} />
			</main>
			<SuggestBanner />
			<hr role='separator' />
			<Footer />
		</div>
	);
};

export const getServerSideProps = async () => {
	const request = await fetch(`${server}/api/get-celebrities`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
	const response = await request.json();
	return {
		props: {
			celebs: response.celebs,
		},
	};
};

export default Home;
