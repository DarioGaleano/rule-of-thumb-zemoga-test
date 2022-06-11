import { CardWithId } from '../types/types';
import { actions } from '../config/actions';

export const celebsReducer = (state: CardWithId[], action: { type: string; payload: any }) => {
	switch (action.type) {
		case actions.add:
			return [...state, action.payload];
		case actions.toggleUp:
			return state.map((celeb) =>
				celeb._id === action.payload ? { ...celeb, votes: { positive: celeb.votes.positive + 1, negative: celeb.votes.negative } } : celeb
			);
		case actions.toggleDown:
			return state.map((celeb) =>
				celeb._id === action.payload ? { ...celeb, votes: { positive: celeb.votes.positive, negative: celeb.votes.negative + 1 } } : celeb
			);
		default:
			return state;
	}
};
