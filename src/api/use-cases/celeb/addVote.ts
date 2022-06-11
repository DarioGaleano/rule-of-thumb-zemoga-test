import { Types } from 'mongoose';
import { celebsModel } from '../../models';

export default function makeAddVote() {
	return async ({ _id, votes } = { _id: Types.ObjectId, votes: { positive: Number, negative: Number } }) => {
		await celebsModel?.updateOne({ _id }, { $set: { votes } });
		return {
			message: 'Celebrity updated succesfull',
		};
	};
}
