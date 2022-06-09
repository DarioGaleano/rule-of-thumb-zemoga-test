import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='es'>
				<Head>
					<meta name='theme-color' content={'#000'} />
					<link rel='icon' href='/favicon.ico' />
					<link href='https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap' rel='stylesheet' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
