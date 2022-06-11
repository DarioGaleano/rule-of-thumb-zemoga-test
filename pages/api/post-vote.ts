import type { NextApiRequest, NextApiResponse } from 'next';
import { celebServices } from '../../src/api/use-cases';
export default async function postVote(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.send({
			message: 'method no allow',
		});
	}
	try {
		const voteInfo = req.body;
		await celebServices.addVote({ ...voteInfo });
		res.status(200).send({ message: 'Vote saved succesfully' });
	} catch (e) {
		if (e instanceof Error) {
			return res.status(400).send({
				message: e.message,
			});
		}
	}
}
