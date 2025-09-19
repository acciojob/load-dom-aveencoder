 document.addEventListener("DOMContentLoaded", function() {
      // Create a text node with the message
      const msg = document.createTextNode("DOM load success");
      // Append the text node directly to the body
      document.body.appendChild(msg);
    });