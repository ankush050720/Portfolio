import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

function typeWriter(textElement, words, delay) {
  const element = document.getElementById(textElement);
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let currentWord = '';

  function type() {
    const word = words[currentWordIndex];

    if (isDeleting) {
      element.innerHTML = word.substring(0, currentCharIndex) + '<span class="pipe-character">|</span>';
      currentCharIndex--;
    } else {
      element.innerHTML = word.substring(0, currentCharIndex) + '<span class="pipe-character">|</span>';
      currentCharIndex++;
    }

    if (currentCharIndex === -1) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      currentWord = words[currentWordIndex];
    }

    if (!isDeleting && currentCharIndex === word.length) {
      isDeleting = true;
      setTimeout(type, delay * 2);
    } else {
      setTimeout(type, delay);
    }
  }

  type();
}
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
const words = [
    "Engineer",
    "MERN Stack Developer",
    "Tech Enthusiast",
    "Blogger",
    "Gamer"
  ];
  const delay = 100;
  typeWriter("typewriter", words, delay);