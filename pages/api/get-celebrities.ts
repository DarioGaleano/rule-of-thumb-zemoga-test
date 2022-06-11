import type { NextApiRequest, NextApiResponse } from 'next';
import { celebServices } from '../../src/api/use-cases';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'GET') {
		return res.send({
			message: 'method no allow',
		});
	}
	try {
		const celebs = await celebServices.listCelebritys();
		res.status(200).send({ message: 'Success', celebs });
	} catch (e) {
		console.log(e);
		if (e instanceof Error) {
			return res.status(400).send({
				message: e.message,
			});
		}
	}
};
