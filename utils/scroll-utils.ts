/**
 * Smoothly scrolls to a specific element on the page
 * @param elementId The ID of the element to scroll to
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (element) {
    // Get the height of the navbar to offset the scroll position
    const navbarHeight = 80 // Approximate height of the navbar in pixels

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
