function solution(players, callings) {
  const result = new Map();
  players.forEach((str, index) => result.set(str, index));

  for (call of callings) {
    const currentIndex = result.get(call);

    const prevIndex = currentIndex - 1;
    const prevString = players[prevIndex];

    [players[currentIndex], players[prevIndex]] = [
      players[prevIndex],
      players[currentIndex],
    ];

    result.set(call, prevIndex);
    result.set(prevString, currentIndex);
  }

  const finalResult = [...result.entries()]
    .sort((a, b) => a[1] - b[1])
    .map((entry) => entry[0]);
  return finalResult;
}
