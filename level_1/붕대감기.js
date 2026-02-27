function solution(bandage, health, attacks) {
  let result = health;
  let seriesCount = 0;
  let t = bandage[0],
    x = bandage[1],
    y = bandage[2];
  let j = 0;

  for (let i = 0; i < attacks[attacks.length - 1][0]; i++) {
    if (result <= 0) break;

    if (attacks[j][0] === i + 1) {
      // 공격시간
      result -= attacks[j][1];
      seriesCount = 0;
      j++;
      continue;
    } else {
      if (result + x >= health) {
        result = health;
      } else {
        result += x;
      }

      seriesCount++;
      if (seriesCount === t) {
        if (result + y >= health) {
          result = health;
        } else {
          result += y;
        }
        seriesCount = 0;
      }
    }
  }

  return result <= 0 ? -1 : result;
}
