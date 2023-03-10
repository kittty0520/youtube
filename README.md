# Youtube Clone Coding

## ✍목적

> API를 이용하여 사이트를 구현해보는 연습을 하기 위해 Youtube 클론코딩을 하였습니다.

<br>

## 🚀기능

1. 가장 인기 있는 동영상 목록을 가져온다.

2. 사용자가 콘텐츠를 검색하면 그에 맞는 재생목록들을 보여준다.

3. 채널의 상세내용, 연관된 비디오들, **코멘트**(내가 추가로 시도해 본 항목)리스트를 보여준다.
   <br/>

- 시연 영상

      ![youtube_working](https://user-images.githubusercontent.com/105909450/224295728-d58a7c2f-d2d0-4bcc-9fd0-4a51a241c1ec.gif)

  <br/>

## 📌배운 점

- API Reference를 읽는 방법

<br/>

- HTTP 요청 / 응답

  - HTTP 요청

    1. MOCK data
    2. 실제 Youtube API에 요청
    3. fetch /Axios (해당 프로젝트에 적용된 방법)

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
