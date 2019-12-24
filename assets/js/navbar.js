document.addEventListener("DOMContentLoaded", function (event) {

  /*
   * Display the menu items on smaller screens
   */
  var pull = document.getElementById('pull');
  var menu = document.querySelector('nav ul');

  pull.addEventListener('click', function (e) {
    menu.classList.toggle('hide');
  });
});
