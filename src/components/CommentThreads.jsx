import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import Comment from './Comment';

export default function CommentThreads({ id }) {
	const { youtube } = useYoutubeApi();
	const {
		error,
		isLoading,
		data: comments,
	} = useQuery(
		['comments', id],
		() => {
			return youtube.commentThreads(id);
		},
		{ staleTime: 1000 * 60 * 5 }
	);
	console.log(id);

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>Something is wrong...</p>}
			{comments && (
				<ul>
					{comments.map((comment) => (
						<Comment key={comment.id} comment={comment} />
					))}
				</ul>
			)}
		</>
	);
}
