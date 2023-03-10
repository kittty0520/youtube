# Youtube Clone Coding

## 목적

> API를 이용하여 사이트를 구현해보는 연습을 하기 위해 Youtube 클론코딩을 하였습니다.

## 기능

1. 가장 인기 있는 동영상 목록을 가져온다.

2. 사용자가 콘텐츠를 검색하면 그에 맞는 재생목록들을 보여준다.

3. 채널의 상세내용, 연관된 비디오들, **코멘트**(내가 추가로 시도해 본 항목)리스트를 보여준다.

## 배운 점

- API Reference를 읽는 방법

- HTTP 요청 / 응답

  - HTTP 요청

    1. MOCK dadta
    2. fetch
    3. Axios

  - HTTP 응답으로 받아온 JSON파일을 분석해서 어떤 데이터를 읽어야 하는 지를 연습 (postman에서 json 내용을 확인)

    ```json
    //예시) video 리소스를 요청했을 때 전송받은 json
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

-
