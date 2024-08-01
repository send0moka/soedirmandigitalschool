function onScroll() {
  const header = document.getElementById("header")
  const headerContent = document.getElementById("header-content")
  if (header && headerContent) {
    if (window.scrollY > 0) {
      header.classList.add("scrolled")
      headerContent.classList.remove("mt-5")
      headerContent.classList.add("mt-0")
    } else {
      header.classList.remove("scrolled")
      headerContent.classList.remove("mt-0")
      headerContent.classList.add("mt-5")
    }
  }
}
if (typeof document !== 'undefined') {
  document.addEventListener("scroll", onScroll)
  document.addEventListener("DOMContentLoaded", onScroll)
}