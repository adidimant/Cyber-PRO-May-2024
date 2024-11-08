import random

randomType = ''

def generate_value():
    number = random.randint(0, 6000000)

    if 0 <= number <= 1000000:
        global randomType
        randomType = 'Boolean'
        return bool(number) #Return Boolean
    elif 1000001 <= number <= 2000000:
        randomType = 'List'
        return [number] #Return List
    elif 2000001 <= number <= 3000000:
        randomType = 'Set'
        return {number} #Return Set
    elif 3000001 <= number <= 4000000:
        randomType = 'Tuple'
        return (number,) #Return Tuple
    elif 4000001 <= number <= 5000000:
        randomType = 'Float'
        return float(number) #Return Float
    elif 5000001 <= number <= 6000000:
        randomType = 'Null'
        return None #Return Null


# Example usage:
result = generate_value()
print("Randon Results is:" , result, "Random Type is:" , type(result), "Random Variable is:", randomType)
