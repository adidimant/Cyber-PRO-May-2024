x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)

x = y = z = ['a', 'b', 'c']
print(x)
print(z)

# function declaration
def calcX(x):
    return 5
def calcY(y):
    return 6
# function can return two items in the return statement
def calcZ(z):
    return 7, 8

x = calcX(x)
y = calcY(y)
z, n = calcZ(z)

# deconstruct items from array to specific variables (by order)
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)

# you can also print multiple values:
x = "Python"
y = "is"
z = "awesome"
print(x, y, z)



def foo1():
    m = 5
foo1()

# printing: `print(m)` - will not work and we will get an error, since m isn't defined outside the function foo1

k = 'winner' # this is a global variable
def foo2():
    print('k =', k)

foo2()


x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()

print("Python is " + x)

def myfunc():
    global a
    a = "fantastic"

myfunc()

print("Python is " + a)

def myFunc2():
    print(a) # prints "fantastic" because a defined as global by myfunc()

myFunc2()


# Also, use the global keyword if you want to change a global variable inside a function.
x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x) # printing "Python is fantastic"

x = 6

def foo3():
    print(7)

x = foo3() # x gets the value None (since foo3 doesn't return a value)

print(x) # printing None

