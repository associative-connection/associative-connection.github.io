document.addEventListener('DOMContentLoaded', function () {
  const topDiv = document.querySelector('.window_welcome--cont');
  const buttonX = document.querySelector('.button-x');
  // Get value from localStorage when open the page
  const lS = localStorage.getItem('first-visit');
  // Add button 'click' event
  buttonX.addEventListener('click', () => {
    // Set value to the localStorage
    localStorage.setItem('first-visit', false);
    // hide DOM element
    topDiv.style.display = 'none';
  });
  // This does not check on the first visit to the page
  // If localStorage have value, hide DOM element
  if (lS) topDiv.style.display = 'none';
});