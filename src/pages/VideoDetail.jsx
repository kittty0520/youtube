import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
	const { keyword } = useParams();

	return <div>VideoDetail</div>;
}
