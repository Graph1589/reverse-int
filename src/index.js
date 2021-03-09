module.exports = function reverse (n) {
  const result = String(Math.abs(n)).split('').filter((n) => n >= 0 && n <= 9).reduce((acc, number) => [number, ...acc], []).join('').toString();
  return Number(`${result}`);
}
