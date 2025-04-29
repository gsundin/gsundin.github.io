document.addEventListener('DOMContentLoaded', function() {
    const words = [
      "Web Developer",
      "Firmware Engineer",
      "Software Engineer",
      "Maker",
      "Problem Solver",
      "Creative Technologist",
      "System Architect",
      "AI Enthusiast",
      "Hardware Hacker",
      "Open Source Contributor",
      "UI/UX Tinkerer",
      "Full Stack Explorer",
      "Tech Generalist",
      "Raspberry Pi Wrangler"
    ];
    const typewriterElement = document.getElementById('typewriter');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    function type() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        // Deleting text
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 75; // Faster when deleting
      } else {
        // Typing text
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150; // Normal speed when typing
      }
      
      // If word is complete
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end of a word
      } 
      // If deletion is complete
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to next word
      }
      
      setTimeout(type, typingSpeed);
    }
    
    // Start the typing effect
    type();
  });