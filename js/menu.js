const responsiveMenu = () => {
  // Läsa in element från DOM
  const menuButton = document.querySelector("#menu-button")
  const menu = document.querySelector("#responsive-menu")
  const siteHeader = document.querySelector(".site-header")

  //   Toggle-funktion
  const toggleVisibility = () => {
    menu.classList.toggle("responsive-menu--open")
    siteHeader.classList.toggle("site-header--inverted")
  }

  //interaktion

  menuButton.addEventListener("click", toggleVisibility)
}

responsiveMenu()
