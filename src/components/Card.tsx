import React, { FC, useState } from 'react';
import { CardProps } from '../types/types';
import { ThumbsButton } from './ThumbsButton';
import { differenceInCalendarYears } from 'date-fns';
import { getPercentage } from '../helpers/getPercentage';
import { ThumbsIcon } from './icons/ThumbsIcon';
import { actions } from '../config/actions';

export const Card: FC<CardProps> = ({
	onSubmit,
	_id,
	name,
	description,
	category,
	picture,
	lastUpdated,
	votes: { positive, negative },
	view,
}) => {
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

	const onVote = (type: 'positive' | 'negative' | null) => {
		setVoteType(type);
	};

	const handleSubmit = async () => {
		setVoted(true);

		if (voteType) {
			onSubmit(
				_id,
				{
					positive: voteType === 'positive' ? positive + 1 : positive,
					negative: voteType === 'negative' ? negative + 1 : negative,
				},
				voteType === 'positive' ? actions.toggleUp : actions.toggleDown
			);
		}
	};

	const handleReset = () => {
		setVoted(false);
		setVoteType(null);
	};

	return (
		<article className={`card__view-${view}`}>
			<div className={`card__container-${view}`}>
				<ThumbsButton withBg type='positive' onClick={onVote} selected={voteType === 'positive'} />
				<ThumbsButton withBg type='negative' onClick={onVote} selected={voteType === 'negative'} />

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
				<button onClick={voted ? handleReset : handleSubmit} disabled={voteType === null} className='card__vote_now'>
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
