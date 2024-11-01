import sys
print("Hello" + " " + "World!")

print(sys.version)

if 5 > 2:
    print("Five is greater than two.")
    print("Second print to the if")
else:
    print("Five is not greater than two") # This line will never be executed
print("This line will be printed")

x = 5
y = 7
z = (x + y) ** 2
print("(" + str(x) + " + " + str(y) + ") ^ 2 =", z)

x = "Sally"
print(x) # printing "Sally"

x = str(3) # "3"
y = int(3) # 3
z = float(3) # 3.0

x = 5
y = "John"

print(type(x)) # int
print(type(y)) # str

if type(x) == int:
    print("x is int")

# H.W - read all variables section https://www.w3schools.com/python/python_variables.asp
# and data types section - https://www.w3schools.com/python/python_datatypes.asp
# if you have time - progress with rest of the units

exit()
