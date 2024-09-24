document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const message = document.getElementById('message');
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    const highlightBtn = document.getElementById('highlightBtn');
    const addElementBtn = document.getElementById('addElementBtn');
    const removeElementBtn = document.getElementById('removeElementBtn');
    const submitBtn = document.getElementById('submitBtn');
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
   
    // Array to store cut values
    const loggedValues = []; // Step 1: Initialize the array
   
    // Event listener for input to process the value
    nameInput.addEventListener('input', () => {
        const inputValue = nameInput.value; // Get current value of the input
        if (inputValue.length >= 4) { // Check if the length is at least 4
            const cutValue = inputValue.slice(0, 4); // Cut the first 4 letters
            console.log(cutValue); // Log the cut value
            loggedValues.push(cutValue); // Push the cut value into the array
            //alert(`Logged Values: ${JSON.stringify(loggedValues)}`);
            //alert(`First Value: ${loggedValues[0]}`);
            alert(`Cut Value: ${cutValue}`); // Display the cut value in a popup
        }              
    });

    // Event listener 1: Toggle message visibility on button click
   // submitBtn.addEventListener('click', () => {
   //     message.classList.toggle('hidden');
   // });


    // Event listener for the submit button to make the PUT request
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission

        // Check if we have at least 4 items to send
        if (loggedValues.length >= 4) {
            // Extract the last 4 items
            const lastFourItems = loggedValues.slice(-4);
            // Alert the 4 items
            alert(`The last 4 items are: ${lastFourItems.join(', ')}`);
            
            // Create a PUT request using the fetch API
            fetch('http://my-website.com', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', // Body is JSON
                    'xx-nickname': 'oshemesh', // my nickname
                },
                body: JSON.stringify({
                    values: lastFourItems, // Send the last 4 items in the request body
                }),
            })
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                console.log('PUT Request Successful:', data);
                alert('PUT Request sent successfully!');
            })
            .catch(error => {
                console.error('Error in PUT request:', error);
            });

            // Remove the last 4 items from the array after sending them
            loggedValues.splice(-4, 4); // Cut the last 4 items
        } else {
            alert('Not enough items to send a PUT request. You need at least 4 values.');
        }
    });


    // Event listener 2: Toggle form visibility
    toggleFormBtn.addEventListener('click', () => {
        form.classList.toggle('hidden');
    });

    // Event listener 3: Highlight feedback textarea
    highlightBtn.addEventListener('click', () => {
        document.getElementById('feedback').classList.toggle('highlight');
    });

    // Event listener 4: Add a new element to the DOM
    addElementBtn.addEventListener('click', () => {
        const newElement = document.createElement('p');
        newElement.textContent = 'New Element Added!';
        newElement.classList.add('new-element'); // Add the new class for styling
        document.querySelector('.container').appendChild(newElement); // Append to the container
    });

    // Event listener 5: Remove the last added element from the DOM
    removeElementBtn.addEventListener('click', () => {
        const elements = document.querySelectorAll('.container > p'); // Target <p> elements within the container
        if (elements.length > 0) {
            elements[elements.length - 1].remove(); // Remove the last <p> element
        }
    });


    // Event listener 6: Global event listener
    document.addEventListener('some-event', () => {
        alert('Some event triggered!');
    });

    // Event listener 7: Highlight email input text on focus
    emailInput.addEventListener('focus', () => {
        emailInput.classList.add('highlight-text');
    });

    // Remove highlight from email input text on blur
    emailInput.addEventListener('blur', () => {
        emailInput.classList.remove('highlight-text');
    });

    // Trigger the global event for demonstration
    const event = new Event('some-event');
    document.dispatchEvent(event);
});
