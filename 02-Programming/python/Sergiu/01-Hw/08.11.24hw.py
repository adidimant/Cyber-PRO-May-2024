def analyze_string(sentence):
    if "Python" in sentence:
        new_sentence = sentence.replace("Python", "Coding")
    else:
        new_sentence = sentence

    counter = new_sentence.count(" ")

    return new_sentence, counter

print(analyze_string("I love Python programming"))
print("----------")
