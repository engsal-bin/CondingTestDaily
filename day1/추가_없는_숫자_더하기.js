// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// i) 1~9 합에서 있는 숫자 빼기

function solution1(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0)
}

// ii) include
function solution(numbers) {
    let answer = 0
    for (i = 0 ; i <= 9; i++) {
        if(!numbers.includes(i)) answer += i
    }
    return answer
}