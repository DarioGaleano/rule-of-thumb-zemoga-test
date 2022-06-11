import React, { FC } from 'react';
import { ThumbsIcon } from './icons/ThumbsIcon';
import { Thumbs } from '../types/types';

export const ThumbsButton: FC<Thumbs> = ({ onClick, type, selected }) => {
	const handleClick = () => {
		onClick && onClick(type);
	};

	return (
		<button className={`card__button ${selected ? 'card__border' : ''}`} onClick={handleClick}>
			{type === 'positive' ? <ThumbsIcon withBg type='positive' /> : <ThumbsIcon withBg type='negative' />}
		</button>
	);
};
