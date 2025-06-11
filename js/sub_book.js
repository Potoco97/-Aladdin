async function fetchBooks(query) {
    const params = new URLSearchParams({
        target: "title",
        query,
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: "KakaoAK 7241377875d83e56ab51ad47c8a93bc3"
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
}

async function bookData() {
    try {
        const querys = ['데미안', '소시지와 광기', '카타리나 블룸의 잃어버린 명예', '유리알 유희 1','독일인의 사랑'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            //썸네일이 빈 문자열인것은 제외
            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            console.log(book)

            $('.mang_list1').append(`
                <div class="box">
                    <img src="${book[0].thumbnail}">
                    <h5>${book[0].title}</h5>
                    <p>${book[0].authors[0]}</p>
                </div>
            `);
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData()