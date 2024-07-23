document.addEventListener('DOMContentLoaded', function () {
  const lost_memories = document.querySelector('.lost_memories');
  const done = document.querySelector('.done');
  // Get value from localStorage when open the page
  const lS = localStorage.getItem('first-visit');
  // Add button 'click' event
  done.addEventListener('click', () => {
    // Set value to the localStorage
    localStorage.setItem('first-visit', false);
    // hide DOM element
    lost_memories.style.display = 'none';
  });
  // This does not check on the first visit to the page
  // If localStorage have value, hide DOM element
  if (lS) lost_memories.style.display = 'none';
});