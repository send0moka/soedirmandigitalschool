export function initWaveText() {
  const texts = document.getElementsByClassName("wave-text")
  Array.from(texts).forEach(text => {
    if (text && text.textContent) {
      text.innerHTML = text.textContent.replace(/\S/g, "<span class='wave-letter'>$&</span>")
      const letters = text.querySelectorAll(".wave-letter")
      letters.forEach((letter, index) => {
        if (letter instanceof HTMLElement) {
          letter.style.animationDelay = `${index * 0.1}s`
        }
      })
    }
  })
}