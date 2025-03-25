// 10min 정수 배열을 하나 받습니다. 배열의 중복값을 제거하고 남은 수를 내림차 순으로 정렬한 배열을 반환하는 solution() 함수를 구현하세요.

function solution(numbers) {
  const answer = [...new Set(numbers)].sort((a, b) => b - a);
  return answer;
}
console.log(solution([4, 2, 2, 1, 3, 4]));
