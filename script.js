function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
  
    if (hour < 12) {
      greeting = "Good Morning";
    } else if (hour < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }
  
    return greeting;
  }
  
  async function fetchQuote() {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      
      // Select a random quote from the fetched data
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      return randomQuote.text;
    } catch (error) {
      console.error("Error fetching the quote:", error);
      return "Stay motivated!";
    }
  }
  
  // Inject greeting and quote into the new tab page
  async function injectContent() {
    const greeting = getGreeting();
    const quote = await fetchQuote();
  
    // Create container for the greeting and quote
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '150px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.textAlign = 'center';
    container.style.fontSize = '24px';
    container.style.color = '#333';
  
    const greetingElement = document.createElement('div');
    greetingElement.textContent = `${greeting}, Siddhant!`;
  
    const quoteElement = document.createElement('div');
    quoteElement.textContent = `"${quote}"`;
    quoteElement.style.marginTop = '10px';
    quoteElement.style.fontStyle = 'italic';
  
    // Append to the container
    container.appendChild(greetingElement);
    container.appendChild(quoteElement);
  
    // Append to the body of the page
    document.body.appendChild(container);
  }
  
  // Run the injection
  injectContent();
  