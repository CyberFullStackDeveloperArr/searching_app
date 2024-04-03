export function renderAnimatedTitle(animationData, containerSelector) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = '';

  animationData.forEach(({ char, delay }) => {
    const charSpan = document.createElement('span');
    charSpan.textContent = char;
    charSpan.style.animationDelay = delay;
    container.appendChild(charSpan);
  });
}
export function renderAnimatedTitle1(animationData1, containerSelector1) {
  const container1 = document.querySelector(containerSelector1);
  container1.innerHTML = '';

  animationData1.forEach(({ char, delay }) => {
    const charSpan1 = document.createElement('span');
    charSpan1.textContent = char;
    charSpan1.style.animationDelay = delay;
    container1.appendChild(charSpan1);
  });
}