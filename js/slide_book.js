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
        const querys = ['돈과 경제', '지금도 늦지 않았어 사랑해', '진짜의 마인드', '사랑하는 나의 ㅎㅎ에게'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            //썸네일이 빈 문자열인것은 제외
            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            $('.mWSbook li .book').eq(i).append(`
                <img src="${book[0].thumbnail}">
                <h5>${book[0].title}</h5>
                <p>${book[0].authors}</p>
            `);
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

// bookData();


async function mWSbook() {
    try {
        const querys = ['경제', '레시피', '베스트셀러', '성경', '요리', '모바일', '세일', '어린이'];

        querys.forEach(async (query, i) => {
            const data = await fetchBooks(query);

            const origin = data.documents;
            let book = origin.filter((val) => {
                return val.thumbnail != '' && val.contents != '';
            })

            for (let j = 0; j < 4; j++) {
                $('.mWSbook li').eq(i).append(`
                    <div class="box">
                        <img src="${book[j].thumbnail}">
                        <h5>${book[j].title}</h5>
                        <p>${book[j].authors[0]}</p>
                    </div>
                `);
            }
        })
    } catch (error) {
        console.log('에러발생', error);
    }
}

$(document).ready(function () {
    let index

    $('.tab_menu').click(function () {
        index = $(this).index();
        $('.mWSbook li').eq(index).fadeIn().siblings().hide();

        $(this).addClass("active").siblings().removeClass("active");
    });
});

$(document).ready(function () {
    let index

    $('.tab1_menu').click(function () {
        index = $(this).index();
        $('.tab1_sub').eq(index).show().siblings().hide();

        $(this).addClass("active").siblings().removeClass("active");
    });

});


mWSbook();

