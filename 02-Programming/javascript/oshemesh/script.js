function changeColor() {
    const paragraph = document.getElementById('text');
    const currentColor = window.getComputedStyle(paragraph).color;

    // Toggle color between red and navy
    if (currentColor === 'rgb(255, 0, 0)') { // red
            paragraph.style.color = 'navy';
       } else {
            paragraph.style.color = 'red';
       }
    }

    function autoFillForm() {
        document.getElementById('name').value = 'Oren Shemesh';
        document.getElementById('email').value = 'oshemesh73@gmail.com';
        document.getElementById('age').value = '51'; // assuming "age" in years
    }