// i) 최종 위치 좌표를 구하는 함수
function getFinalPosition(commands) {
  let x = 0;
  let y = 0;

  for (let cmd of commands) {
    if (cmd === "U") y += 1;
    else if (cmd === "D") y -= 1;
    else if (cmd === "R") x += 1;
    else if (cmd === "L") x -= 1;
  }

  return [x, y];
}

console.log(getFinalPosition("ULURRDLLU"));

// ii) 중복 없이 이동한 경로 수를 구하는 함수
function countUniquePaths(commands) {
  const visited = new Set();
  let x = 0,
    y = 0;

  for (let cmd of commands) {
    let nx = x,
      ny = y;

    if (cmd === "U") ny += 1;
    else if (cmd === "D") ny -= 1;
    else if (cmd === "R") nx += 1;
    else if (cmd === "L") nx -= 1;

    const path = `${x},${y}->${nx},${ny}`;
    const reversePath = `${nx},${ny}->${x},${y}`;

    if (!visited.has(path) && !visited.has(reversePath)) {
      visited.add(path);
    }

    x = nx;
    y = ny;
  }

  return visited.size;
}

console.log(countUniquePaths("ULURRDLLU"));
