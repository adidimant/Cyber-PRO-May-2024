Question 1: String Analysis and Manipulation:
Write a function that takes a sentence as input, checks if it contains the word "Python", and performs the following operations:

If "Python" is existing in the string - replace "Python" with "Coding".
Count the number of spaces in the sentence.
Return the modified string and the number of spaces.
```
def analyze_string(sentence):
    # Your code here
Example:
Input: "I love Python programming"
Output: ("I love Coding programming", 8)
```
Question 2: Validate and Extract Information
Write a function that takes a string containing comma-separated values. The function should:

Split the string into a list.
Check if "success" is one of the elements.
If found, return the index of "success" and a slice of the list from index 1 to 3.
If not found, return -1 and the original list.

```
def validate_and_extract(s):
    # Your code here
Example:
Input: "failure,warning,success,completed"
Output: (2, ['warning', 'success', 'completed'])
```
Question 3: Search and Loop Through Characters
Write a function that takes a string and an array of characters. The function should:

Check if any of the characters in the array are existing in the string.
Loop through the string and print only the characters that are found in the array.
Return True if any characters are found, otherwise False.

```
def search_and_print_chars(s, char_array):
    # Your code here
Example:
Input: "hello world", ['o', 'w', 'x']
Output:
o
w
Return: True
```
Question 4: Advanced String Slicing and Replacement
Write a function that takes a string and does the following:

If the string length is less than 5, return "Too short".
If the string length is between 5 and 10, slice out the first and last characters and replace any occurrence of "a" with "@".
If the string length is greater than 10, return the string reversed - search in the internet how you revert a string.

```
def advanced_string_manipulation(s):
    # Your code here
Example:
Input: "example"
Output: "x@mpl"

Input: "extraordinary"
Output: "yranidroartxe"
```
[Bonus]
Question 5: Casting and Conditional Checks
Write a function that takes a list of strings. For each string:

(using try/except - read online):
Try to cast it to an integer.
If it can be cast successfully, check if the number is even or odd and print the result.
If it cannot be cast, print "Not a number".

```
def process_and_check_numbers(str_list):
    # Your code here
Example:
Input: ["123", "hello", "42", "7"]
Output:

123 is odd
Not a number
42 is even
7 is odd
```