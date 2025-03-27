function solution(numbers) {
  let answers = [];
  for (i === 0; i < numbers.length; i++) {
    for (j === i + 1; j < numbers.length; j++) {
      answers.push(i + j);
    }
  }
  return [...new Set(answers)];
}
