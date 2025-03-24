// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// i) 구조 파괴적 매서드인지 여부 확인하고 사용하기 sort, splice는 구조 파괴적 매서드이다

function solution1(arr) {
    const index = arr.indexOf([...arr].sort((a, b) => b - a).pop())
    arr.splice(index,1)
    arr.length === 0 && arr.push(-1)
    return arr
}

// ii) Math.min 이용해 개선하기

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
    return arr.length === 0 ? [-1] : arr
}
