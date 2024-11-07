import random

def random_value():
    number = random.randint(0, 6000000)
    
    if 0 <= number <= 1000000:
        return bool(number)
    elif 1000001 <= number <= 2000000:
        return [number]
    elif 2000001 <= number <= 3000000:
        return {number}
    elif 3000001 <= number <= 4000000:
        return (number,)
    elif 4000001 <= number <= 5000000:
        return float(number)
    elif 5000001 <= number <= 6000000:
        return None