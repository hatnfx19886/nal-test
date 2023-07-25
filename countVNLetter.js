function countLetter(s) {
  const telex = ['aw', 'aa', 'dd', 'ee', 'oo', 'ow'];
  const l = s.length;
  let count = 0;
  for (let i = 0; i < l; i++) {
    if (telex.includes(s[i] + s[i + 1])) {
      count++;
      i++;
      continue;
    }
    if (s[i] === 'w' && s[i - 1] !== 'a' && s[i - 1] !== 'o') count++;
  }
  return count;
}
