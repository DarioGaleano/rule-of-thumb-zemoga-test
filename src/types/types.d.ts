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

export interface Celebs extends Data {
	_id: ObjectId;
}

export interface Thumbs {
	id?: string;
	withBg?: boolean;
	onClick?: (type: 'positive' | 'negative') => void;
	type: 'positive' | 'negative';
	selected: boolean;
}

export interface ThumbsIconProps {
	withBg?: boolean;
	type: 'positive' | 'negative';
}

export interface CardWithId extends Card {
	_id: string;
	votes: {
		positive: number;
		negative: number;
	};
}

export interface HomeProps {
	celebs: Celebs[];
}

export interface CardsCollectionProps {
	cards: Celebs[];
}

export interface CardProps extends Data {
	view: 'list' | 'grid';
	_id: string;
	onSubmit: (_id: string, votes: { positive: number; negative: number }, type: string) => void;
}
