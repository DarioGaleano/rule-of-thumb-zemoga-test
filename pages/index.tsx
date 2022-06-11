import type { NextPage } from 'next';
import { NavBar } from '../src/components/NavBar';
import { Header } from '../src/components/Header';

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<Header />
		</div>
	);
};

export default Home;
