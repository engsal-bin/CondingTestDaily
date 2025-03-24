// 10min O(NlogN)
// 제약 조건
// • 경수 배열의 깊이는 2 이상 10' 이하입니다.
// • 경수 배열의 각 테이터 값은 -100.000 이상 100.000 이하입니다.

const solution = (numberArray) => {
    return numberArray.sort((a,b) => a - b)
}

console.log(solution([1, -5, 2, 4, 3]))
