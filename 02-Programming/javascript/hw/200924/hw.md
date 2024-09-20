1) Construct your full name with a short sentence on yourself using at least 6 different methods on strings.

2) Take a article from some articel in ynet, then create an array automatically (using split), that contains all the sentences splitted by ".".

3) activate event listener of "input" on an input element (on some simple website you build/you already built), take the current value inside the input, cut the first 4 letters of the value, console.log them and push them into an array.

4) Activate an event listener of "click" on a submit button, then create a PUT request to "http://my-website.com", contains in the body the last 4 items that you pushed to the array in the last question. note that you should cut the last 4 items from the array every time you sends the put request.
your request should add an http header with your personal nickname like this: 'xx-nickname': 'your-nickname'
it is recommended to use at the beginning of the function (passed to the event listener) the: e.preventDefault(); 