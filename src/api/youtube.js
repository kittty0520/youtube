export default class Youtube {
	constructor(apiClient) {
		this.apiClient = apiClient;
	}
	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}
	async channelImageURL(id) {
		return this.#channel(id);
	}
	async relatedVideos(id) {
		return this.#related(id);
	}
	async #searchByKeyword(keyword) {
		return this.apiClient
			.search({
				params: {
					part: 'snippet',
					maxResults: 25,
					type: 'video',
					q: keyword,
				},
			})
			.then((res) => res.data.items)
			.then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
		// id객체에 videoId값을 덮어씌움
	}
	async #mostPopular() {
		return this.apiClient
			.videos({
				params: {
					part: 'snippet',
					maxResults: 25,
					chart: 'mostPopular',
				},
			})
			.then((res) => res.data.items);
	}
	async #channel(id) {
		return this.apiClient
			.channels({
				params: {
					part: 'snippet',
					id: id,
				},
			})
			.then((res) => res.data.items[0].snippet.thumbnails.default.url);
	}
	async #related(id) {
		return this.apiClient
			.search({
				params: {
					part: 'snippet',
					maxResults: 25,
					type: 'video',
					relatedToVideoId: id,
				},
			})
			.then((res) =>
				res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
			);
	}
}
