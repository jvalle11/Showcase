document.addEventListener('DOMContentLoaded', function() {
    // The text to be typed
    const textToType = "Passionate about changing the world with technology.";
  
    // Delay between each letter (in milliseconds)
    const typingDelay = 80;
  
    // Get the element where the typing effect will be displayed
    const typingElement = document.getElementById('typing-effect');
  
    // Function to simulate typing effect
    function typeText(text, element, index) {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(function() {
          typeText(text, element, index);
        }, typingDelay);
      }
    }
  
    // Start the typing effect
    typeText(textToType, typingElement, 0);
  });
  