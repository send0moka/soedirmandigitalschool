class SmoothScroll {
  constructor() {
    this.current = 0;
    this.target = 0;
    this.ease = 0.03;
    this.container = document.querySelector('[data-scroll-container]');
    this.height = 0;
    if (!this.container) {
      return;
    }
    this.init();
  }
  init() {
    try {
      this.setHeight();
      this.events();
      this.raf();
    } catch (error) {
    }
  }
  setHeight() {
    document.body.style.height = `${this.container.getBoundingClientRect().height}px`;
  }
  events() {
    window.addEventListener('resize', this.setHeight.bind(this));
    window.addEventListener('scroll', this.scroll.bind(this));
  }
  scroll() {
    this.target = window.scrollY;
  }
  raf() {
    this.current = lerp(this.current, this.target, this.ease);
    this.current = parseFloat(this.current.toFixed(2));
    this.container.style.transform = `translateY(${-this.current}px)`;
    requestAnimationFrame(this.raf.bind(this));
  }
}
function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}
document.addEventListener('DOMContentLoaded', () => {
  new SmoothScroll();
});