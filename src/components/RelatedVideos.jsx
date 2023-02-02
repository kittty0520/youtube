import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';

export default function RelatedVideos({ id }) {
	const { youtube } = useYoutubeApi();
	const {
		error,
		isLoading,
		data: videos,
	} = useQuery(
		['videos', id],
		() => {
			return youtube.relatedVideos(id);
		},
		{ staleTime: 1000 * 60 * 5 }
	);
	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>Something is wrong...</p>}
			{videos && (
				<ul className='grid grid-cols-1 gap-2 gap-y-4'>
					{videos.map((video) => (
						<VideoCard key={videos.id} video={video} type='list' />
					))}
				</ul>
			)}
		</>
	);
}
