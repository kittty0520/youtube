import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video, type }) {
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
	const navigate = useNavigate();
	const isList = type === 'list';
	const handleClick = (e) => {
		e.preventDefault();
		navigate(`/videos/watch/${video.id}`, { state: { video } }); //navigate에서 경로를 쓸때 맨 앞에'/'를 붙여서 최상위 경로에서 시작하는 절대경로임을 명시해야 한다.
	};
	return (
		<li className={isList ? 'flex gap-1 m-2' : ''} onClick={handleClick}>
			<img
				className={isList ? 'w-60 mr-4' : 'w-full'}
				src={thumbnails.medium.url}
				alt={title}
			/>
			<div>
				<h2 className='font-semibold my-2 line-clamp-2'>{title}</h2>
				<p className='text-sm opacity-80 '>{channelTitle}</p>
				<p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
			</div>
		</li>
	);
}
