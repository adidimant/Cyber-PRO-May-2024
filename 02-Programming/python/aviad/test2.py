import sys
from wsgiref.simple_server import sys_version

print("hello" + "" + "world!")

print(sys_version)

if 5 > 2:
    print("Five is greater than two.")
    print("Second print to the if")
else:
    print("Five is greater than two.") # this line will never be executed
print("this line will be printed")

x = 5
y = 7
z = (x + y) ** 2
print("("+ str(x) + " " + str(y) + ") ^ 2 :", z)

x = "sally"
print(x) # printing "sally"

x = str(3) # "3"
y = int(3) # 3
z = float(3) # 3.0

x = 5
y = "John"

print(type(x)) # int
print(type(y)) # str

if type(x) == int:
    print("x is int")



exit()