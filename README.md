# Youtube Clone Coding

## ✍목적

> API를 이용하여 사이트를 구현해보는 연습을 하기 위해 Youtube 클론코딩(by드림코딩)을 하였습니다.

<br/>

## 🚀기능

1. 가장 인기 있는 동영상 목록을 가져온다.

2. 사용자가 콘텐츠를 검색하면 그에 맞는 재생목록들을 보여준다.

3. 채널의 상세내용, 연관된 비디오들, **코멘트**(내가 추가로 시도해 본 항목)리스트를 보여준다.
   <br/>

- 시연 영상

  ![youtube_working](https://user-images.githubusercontent.com/105909450/224287566-274d2c48-c077-4b67-b1b3-ef70bfb908d0.gif)
  <br/>

## 📌배운 점

- API Reference를 읽는 방법

<br/>

- HTTP요청시 URL에서 쿼리 매개변수 값을 설정하는 부분

  - 키워드 검색 시 API 요청에 지정된 쿼리 매개변수와 일치하는 검색결과의 모음을 반환할 때

    - URL:

      > https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=25&q=surfing&key=[YOUR_API_KEY]

    - HTTP 요청 :

      > GET https://www.googleapis.com/youtube/v3/search

    - (필수 매개변수) part

      > part 매개변수는 API 응답이 포함하는 search 리소스 속성 하나 이상의 쉼표로 구분된 목록을 지정합니다.
      > search 결과에서 snippet 속성은 결과의 제목, 설명 등을 식별하는 다른 속성을 포함합니다.

    - (선택적 매개변수) maxResults

      > maxResults 매개변수는 결과 집합에 반환해야 하는 최대 항목 수를 지정합니다.

    - (선택적 매개변수) q

      > q 매개변수는 검색할 쿼리 용어를 지정합니다.

      출처 : [Youtube > Data API > 참조](https://developers.google.com/youtube/v3/docs/search/list?hl=ko#javascript)

    <br/>

    - Javascript 코드

      ```javascript
      //Axios Instance를 만들어서 공통적으로 사용되는 config를 지정함
      export default class YoutubeClient {
      	constructor() {
      		this.httpClient = axios.create({
      			baseURL: 'https://youtube.googleapis.com/youtube/v3',
      			params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
      		});
      	}
      	async search(params) {
      		return this.httpClient.get('search', params);
      	}
      }
      ```

      ```javascript
      //지정된 config는 위에서 설정한 인스턴스 config와 결합됨.
      export default class Youtube {
      	constructor(apiClient) {
      		this.apiClient = apiClient;
      	}
      	async search(keyword) {
      		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
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
      			.then((items) =>
      				items.map((item) => ({ ...item, id: item.id.videoId }))
      			);
      	}
      }
      ```

    <br/>

  - HTTP 응답으로 받아온 JSON파일을 분석해서 어떤 데이터를 읽어야 하는 지를 연습

    - postman에서 json 내부를 확인

    - video 리소스를 요청했을 때 전송받은 json

      ```json
      {
        "kind": "youtube#videoListResponse",
        "etag": etag,
        "nextPageToken": string,
        "prevPageToken": string,
        "pageInfo": {
        "totalResults": integer,
        "resultsPerPage": integer
        },
        "items": [
        video Resource
        ]
      }
      ```

## 어려웠던 부분

- useContext()를 사용해서 useYoutubeApi()함수를 만드는 부분

<br/>

- comments.map() 부분에서 TypeError: Cannot read property 'map' of undefined 발생

  - 원인 : 첫 렌더링이 실행될 때 commnets 데이터 값이 없기 때문에 undefined이 반환

  - 해결방법:  
    'comments &&' 을 추가하여 데이터를 받아왔을 때만 실행되도록 한다.

<br/>
