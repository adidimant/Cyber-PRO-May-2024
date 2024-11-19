# declare a string in multiple lines:
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)

print("___________")

# strings are arrays:
a = "Hello, World!"
print(a[1]) # prints 'e'

# lopping over a string:
for x in "banana":
  print(x)

# same for arrays (since strings are arrays in python):
for x in [6,7,8]:
  print(x)

# check if string contains another string:
txt = "The best things in life are free!"
print("free" in txt)

# inject variable inside string:
age = 36
txt = f"My name is John, I am {age}"
print(txt)

# another example with some calculation:
txt = f"The price is {20 * 59} dollars"
print(txt)

txt = "We are the so-called \"Vikings\" from the north."
print(txt)

# adding a new line to the string:
txt = "We are the so-called \n from the north."
print(txt)

# adding a tab to the string:
txt = "We are the so-called \t from the north."
print(txt)

print(bool("Hello")) # prints 'True'
print(bool(15)) # prints 'True'

y = 19
print(bool(y)) # prints 'True'

# Values that are "False" values: (), [], {}, "", the number 0, and the value None => converting them to bool will bring False
print(bool(0)) # prints 'False'
print(bool([])) # prints 'False'
print(bool({})) # prints 'False'
print(bool(None)) # prints 'False'
print(bool("")) # prints 'False'

# functions can return a boolean value:
def myFunction() :
  return True

if myFunction():
  print("YES!")
else:
  print("NO!")

if type("abcde") == str:
  print("\"abcde\" is a string")

v = 200
if isinstance(v, int):
  print(f"v with the value of: {v} is an integer")


# class is a factory of objects, contains the fields and the functions that defined in the class
class Person:
  def __init__(self, first_name, age):
    self.first_name = first_name
    self.age = age

  class_type = 'person'
  def fun1(self):
    print(f'fun1 was activated for the user name: {self.first_name}')

  def getFullDetails(self):
    return f"The person name: {self.first_name}, the age is: {self.age}"


person1 = Person('Adi', 3000)
person1.fun1()
print(person1.age)
print(person1.getFullDetails())

person2 = Person('Maayan', 4000)
print(person2.first_name)
print(person2.getFullDetails())

if isinstance(person2, Person): # this if will be True
  print(f'the person2 is a person, his name: {person2.first_name}')

if isinstance(person1, int): # This if will be False
  print(f'the person1 is an integer')

person1.age = 40
print(person1.age) # will print 40

# we can do that in a function as well:
def change_person_age(person, age):
  person.age = age

change_person_age(person2, 800)
print(person2.age) # prints 800




