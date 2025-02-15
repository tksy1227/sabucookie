// Get the fortune from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const fortune = urlParams.get("fortune");

// Display the fortune on the page
document.getElementById("fortune-text").textContent = fortune;

// Go back to the main page to open another cookie
document.getElementById("back-btn").addEventListener("click", () => {
  window.location.href = "index.html";
});