import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Rule of Thumb</title>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta http-equiv='X-UA-Compatible' content='ie=edge' />
				<link href='css/main.css' rel='stylesheet' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
