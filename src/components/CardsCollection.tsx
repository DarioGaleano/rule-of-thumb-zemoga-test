import React, { FC, useReducer, useState } from 'react';
import { CardsCollectionProps } from '../types/types';
import { Card } from './Card';
import { celebsReducer } from '../reducer/index';

export const CardsCollection: FC<CardsCollectionProps> = ({ cards }) => {
	const [view, setView] = useState<'list' | 'grid'>('grid');
	const [celebs, dispatch] = useReducer(celebsReducer, cards);

	const handleChangeView = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		setView(value as 'grid' | 'list');
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
			<div className='cards__container'>
				{celebs.map((card, index) => (
					<Card onSubmit={() => {}} key={card._id} {...card} view={view} />
				))}
			</div>
		</section>
	);
};
