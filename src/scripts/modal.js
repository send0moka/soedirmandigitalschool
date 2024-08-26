export function openModal(modal) {
  if (modal) {
    modal.classList.remove("hidden")
    document.body.style.overflow = "hidden"
  }
}

export function closeModal(modal) {
  if (modal) {
    modal.classList.add("hidden")
    document.body.style.overflow = ""
  }
}

export function initializeModal(modalId) {
  const modal = document.getElementById(modalId)
  if (!modal) return
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal)
    }
  })
  const closeButton = modal.querySelector(".modal-close")
  if (closeButton) {
    closeButton.addEventListener("click", () => closeModal(modal))
  }
}