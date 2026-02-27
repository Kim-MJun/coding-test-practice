const solution = (price, money, count) => {
  for (let i = 0; i < count; i++) {
    money -= price * (i + 1);
  }
  return money < 0 ? money * -1 : 0;
};
