// 문제 05 행렬의 곱셈
// 정답율 63% |  40분
// 제약 조건
// • 행렬 arrl. arr2 의 행과 열의 길이는 2 이상 100 이하입니다.
// • 0업 arrl. ar2의 테어터는 -10 이상 20 이타인 자연수입니다.
// • 꼽할 수 있는 배일만 주어집니
// 2차원 행렬 arr 1 과 arr2 입력받아 arTl 이 arr2 분 곱한 결과를 반환하는 solution() 함수를 완
// 성하세요

function solution(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}
