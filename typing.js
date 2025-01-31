document.addEventListener('DOMContentLoaded', function() {
  // The texts to be typed
  const textsToType = [
    "Passionate about changing the world with technology.",
    "Lifelong Learner.",
    "Solving problems with creative tech solutions.",
    "Building software that makes a difference.",
    "Tech-powered change-maker."
  ];
  
  // Delay between each letter (in milliseconds)
  const typingDelay = 70;
  const erasingDelay = 80;
  const newTextDelay = 500; // Delay between current and next text

  // Get the element where the typing effect will be displayed
  const typingElement = document.getElementById('typing-effect');
  
  let textIndex = Math.floor(Math.random() * textsToType.length); // Start with a random phrase
  let charIndex = 0;
  let isDeleting = false;

  // Function to simulate typing effect
  function typeText() {
    const currentText = textsToType[textIndex];
    if (charIndex < currentText.length && !isDeleting) {
      typingElement.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingDelay);
    } else if (charIndex > 0 && isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeText, erasingDelay);
    } else if (charIndex === 0 && isDeleting) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textsToType.length;
      setTimeout(typeText, newTextDelay);
    } else {
      isDeleting = true;
      setTimeout(typeText, newTextDelay);
    }
  }

  // Start the typing effect instantly
  typeText();
});