document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const message = document.getElementById('message');
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    const highlightBtn = document.getElementById('highlightBtn');
    const addElementBtn = document.getElementById('addElementBtn');
    const removeElementBtn = document.getElementById('removeElementBtn');
    const submitBtn = document.getElementById('submitBtn');
    const emailInput = document.getElementById('email');

    // Event listener 1: Toggle message visibility on button click
    submitBtn.addEventListener('click', () => {
        message.classList.toggle('hidden');
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
