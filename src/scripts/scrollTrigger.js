export function handleSmoothScroll() {
  const daftarButton = document.querySelector("a[href='#courses']")
  const header = document.getElementById("header")
  if (daftarButton && header) {
    daftarButton.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")?.substring(1)
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const headerHeight = header.offsetHeight
          const windowWidth = window.innerWidth
          const mobileOffset = 40
          const desktopOffset = 20
          const additionalOffset = windowWidth <= 768 ? mobileOffset : desktopOffset
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - additionalOffset
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          })
        }
      }
    })
  }
}