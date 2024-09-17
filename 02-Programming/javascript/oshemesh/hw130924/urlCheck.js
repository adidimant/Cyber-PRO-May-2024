const url = require('url');

function checkURL(targetUrl) {
  const currentHostname = 'localhost'; 

  // Parse the target URL
  const parsedUrl = new url.URL(targetUrl);

  // Compare the hostnames
  if (parsedUrl.hostname !== currentHostname) {
    console.log(`Redirecting to: ${targetUrl}`);
    // In a browser, you'd redirect with window.location.href, but in Node.js, this is a simulation.
  } else {
    console.log('Same hostname, no redirect needed.');
  }
}

// Test the function with a URL
checkURL('https://www.example.com');

// Test the function with a localhost URL
checkURL('https://localhost');