import React, { FC, useState } from 'react';
import { CardProps } from '../types/types';
import { ThumbsButton } from './ThumbsButton';
import { differenceInCalendarYears } from 'date-fns';
import { getPercentage } from '../helpers/getFormatedDate';
import { ThumbsIcon } from './icons/ThumbsIcon';

export const Card: FC<CardProps> = ({ name, description, category, picture, lastUpdated, votes: { positive, negative }, view }) => {
	const [voteType, setVoteType] = useState<'positive' | 'negative' | null>(null);
	const [voted, setVoted] = useState(false);
	const total = positive + negative;
	const percentageP = getPercentage(positive, total);
	const percentageN = getPercentage(negative, total);

	const getImage = () => {
		if (view === 'grid') return picture;
		const [name, ext] = picture.split('.');
		return `${name}-small.${ext}`;
	};

	return (
		<article className={`card__view-${view}`}>
			<div className={`card__container-${view}`}>
				<ThumbsButton withBg type='positive' onClick={() => {}} selected={voteType === 'positive'} />
				<ThumbsButton withBg type='negative' onClick={() => {}} selected={voteType === 'negative'} />

				{percentageP > percentageN ? <ThumbsIcon type='positive' withBg /> : <ThumbsIcon type='negative' withBg />}
				<img src={`../../assets/img/${getImage()}`} />
				<h1>{name}</h1>
				<span>{description}</span>
				<span>
					{voted
						? 'Thank you for your vote!'
						: `about ${differenceInCalendarYears(new Date(), new Date(lastUpdated))} year ago in ${
								category.charAt(0).toUpperCase() + category.slice(1)
						  }`}
				</span>
				<button onClick={() => {}} disabled={voteType === null} className='card__vote_now'>
					{voted ? 'Vote Again' : 'Vote Now'}
				</button>
				<div className='card__status-bar'>
					<div className='card__status-positive' style={{ width: `${percentageP}%` }}>
						<ThumbsIcon type='positive' />
						<span>{percentageP}%</span>
					</div>
					<div className='card__status-negative' style={{ width: `${percentageN}%` }}>
						<span>{percentageN}%</span>
						<ThumbsIcon type='negative' />
					</div>
				</div>
			</div>
		</article>
	);
};
