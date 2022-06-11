import mongoose from 'mongoose';
import { Data } from '../../types/types';

export default function makeUserModel(connection: typeof mongoose) {
	const { Schema, model, models } = connection;
	const celebSchema = new Schema<Data>({
		name: { type: String },
		description: { type: String },
		category: { type: String },
		picture: { type: String },
		lastUpdated: { type: String },
		votes: {
			positive: { type: Number },
			negative: { type: Number },
		},
	});
	const collection = models.User || model<Data>('User', celebSchema);
	return collection;
}
