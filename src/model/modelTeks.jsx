export function animateTitle(text) {
  return text.split('').map((char, idx) => ({
    char,
    delay: `${idx  * 0.1}s`
  }));
}
export function animateTitle1(text) {
  return text.split('').map((char, idx) => ({
    char,
    delay: `${idx * 0.1}s`
  }));
}
  