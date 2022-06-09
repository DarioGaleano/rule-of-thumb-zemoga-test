import type { NextPage } from 'next';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<Header />
		</div>
	);
};

export default Home;
