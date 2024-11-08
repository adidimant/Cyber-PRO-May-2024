import random

# ho to convert an int to a float
print(10E2)
numb = 10
numb = numb * 1.0
numb = numb * 5 / 5.0
numb = numb + 1.0 - 1.0
numb = numb - 3.0 + 3.0
numb = numb / 1.0
print(numb)


def generator():
    number = random.randint(0, 6000000)
    description = "The chosen number is: " + str(number) + ", the returned type: "
    if number <= 1000000:
        chosen_value = bool(number)
    elif 1000001 <= number <= 2000000:
        chosen_value = [8, 10, number, 100, 900000]
    elif 2000001 <= number <= 3000000:
        chosen_value = {8, 5, 'a', True, number, number + 10}
    elif 3000001 <= number <= 4000000:
        chosen_value = (number, number + 10, number + 20, number + 30)
    elif 4000001 <= number <= 5000000:
        chosen_value = float(number)
    else: # 5000001 <= number <= 6000000
        chosen_value = None
    return description + str(type(chosen_value)), chosen_value


result = generator()
print(result)
