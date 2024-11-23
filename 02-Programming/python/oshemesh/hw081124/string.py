def analyze_string(sentence):
    # Check if "Python" is in the sentence
    if "Python" in sentence:
        # Replace "Python" with "Coding"
        sentence = sentence.replace("Python", "Coding")

    # Count the number of spaces in the sentence
    space_count = sentence.count(" ")

    # Return the modified sentence and the space count
    return sentence, space_count


input_sentence = "I love Python programming"
output = analyze_string(input_sentence)
print(output)  # Output: ("I love Coding programming", 3)


def validate_and_extract(s):
    # Split the string into a list
    elements = s.split(',')

    # Check if "success" is in the list and get its index if found
    if "success" in elements:
        index = elements.index("success")
        # Return the index of "success" and the slice from index 1 to 3
        return index, elements[1:4]
    else:
        # If "success" is not found, return -1 and the original list
        return -1, elements


input_string = "failure,warning,success,completed"
output = validate_and_extract(input_string)
print(output)  # Output: (2, ['warning', 'success', 'completed'])


def search_and_print_chars(s, char_array):
    found = False  # Initialize a flag to track if any characters are found

    # Loop through each character in the string
    for char in s:
        # Check if the character is in the array
        if char in char_array:
            print(char)  # Print the character if found in the array
            found = True  # Set flag to True

    # Return True if any characters were found, otherwise False
    return found


input_string = "hello world"
input_chars = ['o', 'w', 'x']
output = search_and_print_chars(input_string, input_chars)
print("Return:", output)  # Output: True


def advanced_string_manipulation(s):
    # Check if the string length is less than 5
    if len(s) < 5:
        return "Too short"
    # Check if the string length is between 5 and 10
    elif 5 <= len(s) <= 10:
        # Slice out the first and last characters and replace "a" with "@"
        modified_string = s[1:-1].replace("a", "@")
        return modified_string
    # If the string length is greater than 10
    else:
        # Return the string reversed
        return s[::-1]


print(advanced_string_manipulation("example"))       # Output: "x@mpl"
print(advanced_string_manipulation("extraordinary"))  # Output: "yranidroartxe"
print(advanced_string_manipulation("hi"))             # Output: "Too short"


def process_and_check_numbers(str_list):
    for item in str_list:
        try:
            # Try to cast the string to an integer
            number = int(item)
            # Check if the number is even or odd and print the result
            if number % 2 == 0:
                print(f"{number} is even")
            else:
                print(f"{number} is odd")
        except ValueError:
            # If casting fails, print "Not a number"
            print("Not a number")


input_list = ["123", "hello", "42", "7"]
process_and_check_numbers(input_list)


def replace_python(sntc: str):
    result1 = None
    result2 = 0
    if "Python" in sntc:
        result1 = sntc.replace("Python", "Coding")
    result2 = result1.split(" ")
    return result1, len(result2) - 1