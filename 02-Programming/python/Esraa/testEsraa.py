# Variables משתנים
name="Esra"#str
number = 1#int
number2=1.2#float
is_girl=True#bool
game1 , game2 ,game3 = "football","tennis","Basketball"
print(name)
print(number)
print(number2)
print(is_girl)
print(game1)
print(game2)
print(type(is_girl))
name2= str

import random
x= random.randrange(100, 101)

print(random.randrange(1, 10))
print(x)

print("homework👇")
#hw1 question2
"""
2) write a function that generates a random number between 0 to 6000000,
if the number is in the range 0-1000000: return the number converted to boolean value
if the number is in the range 1000001-2000000: return some list contains the number
if the number is in the range 2000001-3000000: return some set contains the number
if the number is in the range 3000001-4000000: return some tuple contains the number
if the number is in the range 4000001-5000000: return the number - converted to float
if the number is in the range 5000001-6000000: return None (null)
"""
import random
def random_number():
    random_num=(random.randint(0,6000000))
    print(random_num)
    if 0 <= random_num <= 1000000:
        return bool(random_num)
    elif 1000001 <= random_num <= 2000000:
        return [random_num,random_num,random_num]
    elif 2000001 <= random_num <= 3000000:
        return {random_num}
    elif 30000001 <= random_num <= 4000000:
        return  (random_num,)
    elif 4000001 <= random_num <= 5000000:
        return float(random_num)
    elif 5000001 <= random_num <= 6000000:
        return None



result=random_number()
print(result)


