

def analyze_string(sentence):
    if "Python" in sentence:
        modified_sentence = sentence.replace("Python", "Coding")
    else:
        modified_sentence = sentence
        space_count = sentence.count(' ')
    return modified_sentence, space_count 



def validate_and_extract(s):
    elements = s.split(',')
    if "success" in elements:
        index = elements.index("success")
        return index, elements[1:4]
    else:
        return -1, elements



def search_and_print_chars(s, char_array):
    found = False
    for char in s:
        if char in char_array:
            print(char)
            found = True
    return found



def advanced_string_manipulation(s):
    if len(s) < 5:
        return "Too short"
    elif 5 <= len(s) <= 10:
        sliced_string = s[1:-1]
        modified_string = sliced_string.replace("a", "@")
        return modified_string
    else:
        return s[::-1]
    
