// Show the pop-up after 10 seconds (10000 milliseconds)
window.onload = function() {
  setTimeout(function() {
    document.getElementById("popup-form").style.display = "flex";
  }, 10000);
};

// Popup close button logic
document.querySelector(".close-btn").addEventListener("click", function() {
  document.getElementById("popup-form").style.display = "none";
});

// Close the popup when clicking outside the form
window.onclick = function(event) {
  const popup = document.getElementById("popup-form");
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

function toggleMenu() {
  const menu = document.querySelector('.main-menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
