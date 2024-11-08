# Casting:
str = "3"
print(int(str))

str1 = 'hey'

#multi-line string:
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)

# strings are arrays:
a = "Hello, World!"
print(a[1]) # prints 'e'
print('______________')
for x in "banana":
  print(x)

for y in range(0,5):
    print(y)

a = "Hello, World!"
print(len(a)) # getting string length

txt = "The best things in life are free!"
print("free" in txt)

if "free" in txt:
    print("yes! txt includes 'free'")

lst1 = [4, 6, 8, 10]
if 8 in lst1:
    print('yes! 8 is in lst1')

txt = "The best things in life are free!"
print("expensive" not in txt)

if "expensive" not in txt:
    print("'expensive' is not in txt")

# 'not' is being used with 'in', or also 'is not':
var2 = None
if var2 is None: # in javascript: if (var2 == null) {...}
    print("variable2 is None")
if var2 is not None:
    print("variable2 is not None")

b = "Hello, World!"
print(b[2:5]) # prints 'llo'

b = "Hello, World!"
print(b[:5]) # prints 'Hello'

b = "Hello, World!"
print(b[:2]) # prints 'He'

b = "Hello, World!"
print(b[2:]) # prints 'llo, World!'

b = "Hello, World!"
print(b[-5:-2]) # prints 'orl'

a = "Hello, World!"
print(a.upper()) # prints 'HELLO, WORLD!'

a = "Hello, World!"
print(a.lower()) # prints 'hello, world!'

a = " Hello, World! "
print(a.strip()) # returns "Hello, World!"

a = "Hello, World!"
print(a.replace("H", "J"))

a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!']

int("a")