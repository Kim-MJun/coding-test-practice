const solution = (park, routes) => {
  let result = [];
  let w, h; // 공원 크기 NxN
  let x, y; // 로봇 위치 업데이트

  for (let i = 0; i < park.length; i++) {
    const findSArray = park[i].split('');
    y = findSArray.indexOf('S');
    if (y >= 0) {
      x = i;
      h = park.length;
      w = findSArray.length;
      break;
    }
  }

  const isMoveJudgment = (direction, number) => {
    const intNumber = Number(number);
    let isPossible = true;
    for (let i = 0; i < intNumber; i++) {
      switch (direction) {
        case 'E': {
          // 동쪽 -> w++
          if (y + intNumber >= w) isPossible = false;
          else if (park[x][y + i + 1] === 'X') isPossible = false;
          break;
        }
        case 'W': {
          // 서쪽 -> w--
          if (y - intNumber < 0) isPossible = false;
          else if (park[x][y - i - 1] === 'X') isPossible = false;
          break;
        }
        case 'S': {
          // 남쪽 -> h++
          if (x + intNumber >= h) isPossible = false;
          else if (park[x + i + 1][y] === 'X') isPossible = false;
          break;
        }
        case 'N': {
          // 북쪽 -> h--
          if (x - intNumber < 0) isPossible = false;
          else if (park[x - i - 1][y] === 'X') isPossible = false;
          break;
        }
        default:
          break;
      }
      if (!isPossible) break;
    }

    if (isPossible) {
      if (direction === 'E') y += intNumber;
      if (direction === 'W') y -= intNumber;
      if (direction === 'S') x += intNumber;
      if (direction === 'N') x -= intNumber;
    }

    return isPossible;
  };

  for (const route of routes) {
    const [direction, number] = route.split(' ');
    const isMove = isMoveJudgment(direction, number);
  }

  return [x, y];
};
