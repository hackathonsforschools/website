document.addEventListener('DOMContentLoaded', () => {
  // Display the menu items on smaller screens
  const pull = document.querySelector('#pull')
  const menu = document.querySelector('nav ul')

  pull.addEventListener('click', () => {
    menu.classList.toggle('hide')
  })
})
