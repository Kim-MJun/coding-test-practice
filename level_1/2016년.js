function solution(a, b) {
  const dateValue = `2016-${a}-${b}`;
  const dayNumber = new Date(dateValue).getDay();
  const result = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
  };
  return result[dayNumber];
}
