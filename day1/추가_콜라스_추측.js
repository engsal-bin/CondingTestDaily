// i) while + count 초과 여부를 매번 확인
function solution(num) {
    let count = 0
    while (num !== 1) {
        if (count === 500) {
            count = -1;
            break
        }
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        count ++
    }
    return count
}

// ii) while + count 초과 여부를 while 조건에 넣고 식을 간단하게 함
function solution(num) {
    let count = 0
    while (num !== 1 && count !==500) {
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        count ++
    }
    return count === 500 ? -1 : count // 다른 풀이를 보니 count === 500 여부를 비교하기보다는 num === 1 ? 로 비교하는 게 깔끔해 보임
}
