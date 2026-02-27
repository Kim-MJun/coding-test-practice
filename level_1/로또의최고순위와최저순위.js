const solution = (lottos, win_nums) => {
  let result = [];
  const rank = {
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };

  const zeroCount = lottos.filter((item) => item === 0).length;
  let matchCount = 0;

  lottos.forEach((item) => {
    if (win_nums.includes(item)) matchCount++;
  });

  return [rank[matchCount + zeroCount] || 6, rank[matchCount] || 6];
};
