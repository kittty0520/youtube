import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
	return (
		<li className='videoCard'>
			<img className='w-full' src={thumbnails.medium.url} alt={title} />
			<div>
				<h2 className='font-semibold my-2 line-clamp-2'>{title}</h2>
				<p className='text-sm opacity-80 '>{channelTitle}</p>
				<p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
			</div>
		</li>
	);
}
