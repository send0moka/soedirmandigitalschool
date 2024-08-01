class SmoothScroll {
  constructor() {
    this.current = 0;
    this.target = 0;
    this.ease = 0.03;
    this.container = document.querySelector('[data-scroll-container]');
    this.height = 0;
    if (!this.container) {
      console.error('No element with [data-scroll-container] found');
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
      console.error('Error in init:', error);
    }
  }
  setHeight() {
    document.body.style.height = `${this.container.getBoundingClientRect().height}px`;
    console.log('Set body height:', document.body.style.height);
  }
  events() {
    window.addEventListener('resize', this.setHeight.bind(this));
    window.addEventListener('scroll', this.scroll.bind(this));
  }
  scroll() {
    this.target = window.scrollY;
    console.log('Scroll target:', this.target);
  }
  raf() {
    this.current = lerp(this.current, this.target, this.ease);
    this.current = parseFloat(this.current.toFixed(2));
    this.container.style.transform = `translateY(${-this.current}px)`;
    console.log('Current scroll position:', this.current);
    requestAnimationFrame(this.raf.bind(this));
  }
}
function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  new SmoothScroll();
});