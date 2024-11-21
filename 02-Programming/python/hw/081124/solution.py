# Question 1:
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

# Question 2:
def validate_and_extract(s):
    new_list = s.split(",")
    if "success" in new_list:
        returned_list = new_list[1:4]
    else:
        returned_list = new_list

    return new_list.index("success"), returned_list

print(validate_and_extract("failure,warning,success,completed"))
print("----------")

# Question 3:
def search_and_print_chars(s, char_array):
    any_char_found = False
    for i in char_array:
        if i in s:
            print(i)
            any_char_found = True

    return any_char_found

found = search_and_print_chars("I love studying cyber!", ['a', 'i', 'L', 'r']) # expected - should print 'i','r'
print("found:", found) # expected: True

# Question 4:
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
print(advanced_string_manipulation("extraordinary"))  # Output: "yranidroartxe" (reverse string)
print(advanced_string_manipulation("hi"))             # Output: "Too short"

# Question 5:

def process_and_check_numbers(str_list):
    for str in str_list:
        try:
            converted_num = int(str)
            if converted_num % 2 == 0:
                print("number is even: ", converted_num)
            else:
                print("number is odd: ", converted_num)
        except:
            print("Not a number: ", str)

input_list = ["123", "hello", "42", "7"]
process_and_check_numbers(input_list)





