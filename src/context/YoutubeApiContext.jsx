import { createContext, useContext } from 'react';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import FakeYoutube from '../api/fakeYoutubeClient';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext();

const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
	return (
		<YoutubeApiContext.Provider value={{ youtube }}>
			{children}
		</YoutubeApiContext.Provider>
	);
}

export function useYoutubeApi() {
	return useContext(YoutubeApiContext);
}
