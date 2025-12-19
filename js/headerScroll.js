const headerScroll = () => {
  // Hämta element från DOM
  const siteHeader = document.querySelector(".site-header")

  let prevScrollPosition = window.scrollY

  // Toggle-funktion för synlighet header
  const toggleVisibility = () => {
    const currentScrollPosition = window.scrollY

    if (currentScrollPosition > prevScrollPosition) {
      siteHeader.classList.add("site-header--hidden")
    } else {
      siteHeader.classList.remove("site-header--hidden")
    }

    prevScrollPosition = currentScrollPosition
  }

  //   interaktion
  window.addEventListener("scroll", toggleVisibility)
}

headerScroll()
