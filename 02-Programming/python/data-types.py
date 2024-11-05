'''
Text Type:	str
Numeric Types:	int, float, complex
Sequence Types:	list, tuple, range
Mapping Type:	dict
Set Types:	set, frozenset
Boolean Type:	bool
Binary Types:	bytes, bytearray, memoryview
None Type:	NoneType
'''

x = {6, 8, 9, 10, 10, 9} # this is set - can't have duplicates, and order between the items isn't important
y = list((6, 8, 9, 10, 6, 10))

print(x) # printing the set - no duplicates
print(y) # printing the list

x = "Hello World!"
x = 20
x = 20.5 # float
x = [7, 6, 10, 11] # another way (more simple) to define a list (array)
print("x array length:", len(x)) # prints 4
x = (6, 8, 4, 9) # tuple
print("x tuple length:", len(x)) # prints 4
print(type(x)) # prints tuple

x = range(6, 10) # define a range, mostly for loops

print("x range:", x)

x = bool(5) # it will be True
print(x) # prints True
x = bool(0) # x will be False
# or you can just write:
x = False

def authenticate(httpReq):
    is_authorized = False

    # checking in the request Authorization header - if this string includes specific value - change variable value to True
    if httpReq.headers['Authorization'].includes("valid"):
        is_authorized = True

    return is_authorized

n = 1.0
print(type(n)) # prints float

# all of the followings are integers:
x = 1
y = 35656222554887711
z = -3255522
print(type(x)) # prints int
print(type(y)) # prints int
print(type(z)) # prints int

x = 35e3 # 35000.0
print(x) # prints 35000.0
y = 12E4 # 120000.0
print(y) # prints 120000.0
y = 12e5 / 100
print(y) # 1200000 / 100 => prints 12000.0

# random numbers:
import random
a = random.randrange(1, 100)
print(a) # prints a random number between 1 to 100


