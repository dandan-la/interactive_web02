// console.log(document.querySelectorAll(".link-tree li"))
// console.log(Math.round(Math.random() * (window.innerWidth - 100) + 100));

// 1. HTML DOM엘리먼트를 불러오기
const links = document.querySelectorAll(".link-tree li")
// 2. Random Position 값을 구하기
// console.log(Math.round(Math.random() * (window.innerWidth - 0) + 0));
// 3. HTML DOM 엘리먼트 스타일에 Random Position 적용하기

const getRandomPosition = (min, max) =>{
    return Math.round(Math.random() * (max - min) + min)
}

for(let i = 0; i < links.length; i ++ ){
    // 반복 실행
    links[i].style.top = `${getRandomPosition(0, window.innerHeight)}px`
    links[i].style.left = `${getRandomPosition(0, window.innerWidth)}px`
}