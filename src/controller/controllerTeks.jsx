import { animateTitle } from '../model/modelTeks';
import { animateTitle1 } from '../model/modelTeks';
import { renderAnimatedTitle } from '../view/viewTeks';
import { renderAnimatedTitle1 } from '../view/viewTeks';

export function initializeAnimation(containerSelector) {
  const judul = document.querySelector(containerSelector);
  const text = judul.textContent;
  const animationData = animateTitle(text);
  renderAnimatedTitle(animationData, containerSelector);
}

export function initializeAnimation1(containerSelector1) {
  const judul1 = document.querySelector(containerSelector1);
  const text1 = judul1.textContent;
  const animationData1 = animateTitle1(text1);
  renderAnimatedTitle1(animationData1, containerSelector1);
}
