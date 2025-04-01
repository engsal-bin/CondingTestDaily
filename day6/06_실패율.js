// i)
function solution(N, stages) {
  const result = [];
  let totalPlayers = stages.length;

  for (let i = 1; i <= N; i++) {
    const count = stages.filter((stage) => stage === i).length;
    const failRate = count / totalPlayers || 0;

    result.push({ stage: i, failRate });

    totalPlayers -= count; // 다음 스테이지에 도달한 사람 줄이기
  }

  // 실패율 기준 내림차순 정렬, 같으면 스테이지 번호 오름차순
  result.sort((a, b) => {
    if (b.failRate === a.failRate) {
      return a.stage - b.stage;
    }
    return b.failRate - a.failRate;
  });

  return result.map((item) => item.stage);
}
// ii)

function solution(N, stages) {
  const counts = Array(N + 2).fill(0); // N+1까지 포함해야 하므로 N+2
  for (let stage of stages) {
    counts[stage]++;
  }

  const result = [];
  let totalPlayers = stages.length;

  for (let i = 1; i <= N; i++) {
    const fail = counts[i];
    const failRate = totalPlayers === 0 ? 0 : fail / totalPlayers;
    result.push({ stage: i, failRate });
    totalPlayers -= fail;
  }

  result.sort((a, b) => {
    if (b.failRate === a.failRate) return a.stage - b.stage;
    return b.failRate - a.failRate;
  });

  return result.map((obj) => obj.stage);
}
