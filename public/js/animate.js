function animateElement(element, delay) {
  setTimeout(() => {
    requestAnimationFrame(() => {
      element.classList.add('show');
    });
  }, delay);
}

function animate() {
  document.querySelectorAll('.animate').forEach((element, index) => {
    animateElement(element, index * 150);
  });
}