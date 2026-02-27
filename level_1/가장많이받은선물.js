const solution = (friends, gifts) => {
  let answer = 0;

  const exchangeGiftInfo = {};
  friends.forEach((item) => {
    const result = {};
    friends.forEach((resultItem) => (result[resultItem] = 0));
    result['nextMonthGetNum'] = 0;

    exchangeGiftInfo[item] = result;
  });
  const totalGiftInfo = friends.map((item) => ({
    name: item,
    giveGiftNum: 0,
    getGiftNum: 0,
    giftResult: 0,
  }));

  gifts.forEach((item) => {
    const toGift = item.split(' ');
    const giveGiftIndex = totalGiftInfo.findIndex(
      (element) => element.name === toGift[0],
    );
    const getGiftIndex = totalGiftInfo.findIndex(
      (element) => element.name === toGift[1],
    );

    exchangeGiftInfo[toGift[0]][toGift[1]]++;

    totalGiftInfo[giveGiftIndex].giveGiftNum++;
    totalGiftInfo[getGiftIndex].getGiftNum++;
  });

  const resultGiftInfo = totalGiftInfo.map((item) => ({
    ...item,
    giftResult: item.giveGiftNum - item.getGiftNum,
  }));

  resultGiftInfo.forEach(
    (item) => (exchangeGiftInfo[item.name]['giftResult'] = item.giftResult),
  );

  for (const [key, value] of Object.entries(exchangeGiftInfo)) {
    for (const [detailKey, detailValue] of Object.entries(value)) {
      if (detailKey === 'giftResult' || detailKey === 'nextMonthGetNum')
        continue;
      if (key === detailKey) continue;

      if (
        detailValue === 0 ||
        detailValue === exchangeGiftInfo[detailKey][key]
      ) {
        if (detailValue < exchangeGiftInfo[detailKey][key]) continue;
        if (
          exchangeGiftInfo[key]['giftResult'] >
          exchangeGiftInfo[detailKey]['giftResult']
        ) {
          exchangeGiftInfo[key]['nextMonthGetNum']++;
        }
      } else if (detailValue > exchangeGiftInfo[detailKey][key]) {
        exchangeGiftInfo[key]['nextMonthGetNum']++;
      }
    }

    if (value['nextMonthGetNum'] > answer) answer = value['nextMonthGetNum'];
  }

  return answer;
};
