import React, { FC, useReducer, useState } from 'react';
import { CardsCollectionProps } from '../types/types';
import { Card } from './Card';
import { celebsReducer } from '../reducer/index';
import { server } from '../config/server';

export const CardsCollection: FC<CardsCollectionProps> = ({ cards }) => {
	const [view, setView] = useState<'list' | 'grid'>('grid');
	const [celebs, dispatch] = useReducer(celebsReducer, cards);

	const handleChangeView = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		setView(value as 'grid' | 'list');
	};

	const handleSubmit = async (_id: string, votes: { positive: number; negative: number }, type: string) => {
		try {
			const request = await fetch(`${server}/api/post-vote`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					_id,
					votes,
				}),
			});

			if (request.status === 200) {
				dispatch({
					type,
					payload: _id,
				});
			}
		} catch (e) {
			console.log({ e });
		}
	};

	return (
		<section className='cards__section'>
			<div>
				<h3>Previous Rulings</h3>
				<select value={view} onChange={handleChangeView}>
					<option value='list'>List</option>
					<option value='grid'>Grid</option>
				</select>
			</div>
			<div data-testid='collection_container' className='cards__container'>
				{celebs.map((celeb, index) => (
					<Card {...celeb} onSubmit={handleSubmit} key={celeb._id} view={view} />
				))}
			</div>
		</section>
	);
};
