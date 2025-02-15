// Array of Valentine's Day fortunes
const fortunes = [
    "Love is in the air!",
    "Your soulmate is here!",
    "Happiness is just around the corner!",
    "I'll help you with your homework! :)",
    "A romantic surprise is coming your way!",
    "You are destined for great love!",
    "I have my eye on you!",
    "Your kindness will attract love!\nMaybe mine?",
    "True love is closer than you think!\nDo you like flowers?",
    "Your heart will bloom like a rose!",
  ];
  
  // Function to generate a random fortune
  function getRandomFortune() {
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  }
  
  // Redirect to the fortune page with the selected fortune
  document.getElementById("open-btn").addEventListener("click", () => {
    const fortune = getRandomFortune();
    window.location.href = `fortune.html?fortune=${encodeURIComponent(fortune)}`;
  });