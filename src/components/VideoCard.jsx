import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
	return (
		<li className='videoCard'>
			<img src={thumbnails.medium.url} alt={title} />
			<div>
				<h2>{title}</h2>
				<p>{channelTitle}</p>
				<p>{formatAgo(publishedAt, 'ko')}</p>
			</div>
		</li>
	);
}
