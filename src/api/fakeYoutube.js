import axios from 'axios';

export default class FakeYoutube {
	constructor() {}
	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}
	async #searchByKeyword(keyword) {
		return axios
			.get(`/data/${keyword ? 'search' : 'popular'}.json`)
			.then((res) => res.data.items)
			.then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
		// id객체에 videoId값을 덮어씌움
	}
	async #mostPopular(keyword) {
		return axios
			.get(`/data/${keyword ? 'search' : 'popular'}.json`)
			.then((res) => res.data.items);
	}
}
