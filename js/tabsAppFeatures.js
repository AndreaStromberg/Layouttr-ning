const tabs = () => {
  // hämta alla tabknapparna från DOM
  const tabButtons = document.querySelectorAll(".tab")

  // Hämta alla korten från DOM
  const tabTestimonials = document.querySelectorAll(".testimonial")

  // Funktion för att ändra aktuellt testimonial
  const changeTestimonial = (event) => {
    // hämta den aktuella tabknappen från klickat event
    const currentTab = event.target

    // få ut tab-id från klickade knappen
    const currentTabId = event.target.dataset.tabId

    // Få ut rätt kort med samma id som den klickade knappen
    const currentTestimonial = document.querySelector(
      `.testimonial[data-tab-id="${currentTabId}"]`
    )

    // ta bort klassen tab-current från alla tabknappar så vi inte riskerar ha med två med den klassen
    tabButtons.forEach((button) => button.classList.remove("tab--current"))

    // lägga till tab-current på den aktuella tabknappen
    currentTab.classList.add("tab--current")

    // ta bort klassen testimonial--current från alla testimonial
    tabTestimonials.forEach((testimonial) =>
      testimonial.classList.remove("testimonial--current")
    )

    // lägg till klassen testimonial--current till den aktuella testimonialen
    currentTestimonial.classList.add("testimonial--current")
  }

  // lägga eventlyssnare på varje knapp
  tabButtons.forEach((button) =>
    button.addEventListener("click", changeTestimonial)
  )
}

tabs()
