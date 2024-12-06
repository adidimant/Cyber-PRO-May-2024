#Q1
def analyze_string(sentence):
    if "Python" in sentence:
        new_sentence = sentence.replace("Python", "Coding")
    else:
        new_sentence = sentence

    counter = new_sentence.count(" ")

    return new_sentence, counter

print(analyze_string("Question 1: String Analysis and Manipulation: Write a function that takes a sentence as input, checks if it contains the word 'Python', and performs the following operations"))
print("----------")


#Q2
