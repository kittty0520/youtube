import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

export default function Videos() {
	const { keyword } = useParams();
	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(
		['videos', keyword],
		async () => {
			console.log('fetching...');
			return fetch(`/data/${keyword ? 'search' : 'popular'}.json`)
				.then((res) => res.json())
				.then((data) => data.items);
		},
		{
			staleTime: 1000 * 60 * 24,
		}
	);

	return (
		<main>
			<div>videos: {keyword ? `😊${keyword}` : '🔥Hot trends'};</div>
			{isLoading && <p>Loading...</p>}
			{error && <p>Something is wrong...</p>}
			{videos && (
				<ul>
					{videos.map((video) => (
						<VideoCard key={videos.id} video={video} />
					))}
				</ul>
			)}
		</main>
	);
}
