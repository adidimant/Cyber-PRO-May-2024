def analyze_string(sentence):
    if "Python" in sentence:
        new_sentence = sentence.replace("Python", "Coding")
    else:
        new_sentence = sentence

    counter = new_sentence.count(" ")

    return new_sentence, counter

print(analyze_string("I love Python programming"))
print("----------")

def validate_and_extract(s):
    new_list = s.split(",")
    failed = -1

    if "success" in new_list:
        return new_list.index("success"), new_list[1:4]
    else:
        return failed, new_list

print(validate_and_extract("failure,warning,success,completed"))
print("----------")

def search_and_print_chars(s, char_array):
    temp = False
    for x in s:
        if x in char_array:
            print(x)
            temp = True
    return temp

print(search_and_print_chars("hello world", ['o', 'w', 'x']))
print("----------")

def advanced_string_manipulation(s):
    if len(s) < 5:
        return "Too short"
    elif 5 <= len(s) <= 10:
        new_str = s.replace("a", "@")
        return  new_str[1:len(s) - 1]
    elif len(s) > 10:
        return s[::-1]

print(advanced_string_manipulation("example"))
print(advanced_string_manipulation("extraordinary"))
print("----------")


def process_and_check_numbers(str_list):
    for x in str_list:
        try:
            if int(x) % 2 == 0:
                print(int(x), " is even")
            else:
                print(int(x), " is odd")
        except ValueError:
            print(x, "Not a number")

print(process_and_check_numbers(["123", "hello", "42", "7"]))
print("----------")