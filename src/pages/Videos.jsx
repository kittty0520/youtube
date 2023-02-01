import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import FakeYoutube from '../api/fakeYoutube';
export default function Videos() {
	const { keyword } = useParams();
	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(['videos', keyword], () => {
		const youtube = new FakeYoutube();
		return youtube.search(keyword);
	});

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
