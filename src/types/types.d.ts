import { Types } from 'mongoose';

export interface Data {
	name: string;
	description: string;
	category: string;
	picture: string;
	lastUpdated: string;
	votes: {
		positive: number;
		negative: number;
	};
}
