import React from 'react';
import { formatAgo } from '../util/date';

export default function Comment({ comment }) {
	const {
		textOriginal,
		authorDisplayName,
		authorProfileImageUrl,
		publishedAt,
		updatedAt,
	} = comment.snippet.topLevelComment.snippet;
	return (
		<>
			<li key={comment.id} className='flex flex-row items-center mb-4'>
				<img
					className='flex rounded-full mr-2'
					src={authorProfileImageUrl}
					alt={authorDisplayName}
				/>
				<div className='flex flex-col w-full'>
					<p className='mb-1 font-semibold'>
						<span className='text-sm inline-block'>{authorDisplayName}</span>
						<span className='text-xs font-light ml-3'>
							{formatAgo(
								publishedAt === updatedAt
									? publishedAt
									: `${updatedAt}(수정됨)`,
								'ko'
							)}
						</span>
					</p>
					<p>{textOriginal}</p>
				</div>
			</li>
		</>
	);
}
