function solution(s) {
  const regex = /[A-Z]|[a-z]/g;
  return (s.length === 4 || s.length === 6) && !s.match(regex);
}
