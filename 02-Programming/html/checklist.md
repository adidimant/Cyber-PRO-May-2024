elements:
- <html> <head> <title>my beautiful page</title> <script src="..."> </script> </head> <body> ... </body> </html>
- <div> - container of elements
- <ul> - un-ordered list, <ol> - ordered list, <li> - list item (inside ul / ol)
- <br /> - going down a line
- <span>
- <label>
- <h1>, <h2>, ... <h6> - categories of titles
- <img> - image
- <a> - link
- <button>
- <b> - bold, <i> - italic text, <u> - underline
- <p> - paragraph, <pre> - paragraph that considers to line breaks (going down a line - will be presented as a new line in the pre element)
- <table> , <tr>, <td>
- forms: https://www.w3schools.com/html/html_forms.asp
  including: <form>, <input>, type: text / email / password / radio / checkbox, <select>, <button> (or <input type="button">), <textarea>, 
  - onsubmit="callSomeFuc()" on form
  - onclick="callSomeFuc()" on submit button / button element of the form
  - when clicking on the <input type="submit" > - the form gets submit event, then automatically sends a GET request with the details configured inside the form (for each input in the form:   name -> value). if we define form method="POST" then a post request will be sent with these keys in the body of the http request.
- <script> tag
- <iframe> tag

- writing css styles within the html page (not recommended, better to define & import css file):
<style>
  div {
    background-color: #FFF4A3;
  }
</style>

(full tags list can be seen here - https://www.w3schools.com/tags/default.asp)

Styling:
- basic styling
- css class vs inline style

- block level elements, inline-level elements - https://www.w3schools.com/html/html_blocks.asp

element attributes:
- id
- style
- class
- img src, img alt
- a href


bonus if you are interested in aligning items/containers in the screen: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
also mentioned here - https://www.w3schools.com/html/html_div.asp