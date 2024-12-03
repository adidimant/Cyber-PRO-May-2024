thislist = ["apple", "banana", "cherry"]
for x in thislist:
    print(x)

for i in range(len(thislist)):
  print(thislist[i])

# with while loop:
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1

# simple looping in 1 line:
[print(x) for x in thislist]


fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
# create a new list (and print it), that contans all the words that has two same letters after each other
new_list = []
for fruit in fruits:
    for i in range(len(fruit)-1):
        if fruit[i] == fruit[i+1]:
            new_list.append(fruit)
            break
print('the new list is:', new_list)


unsortedarray = ["orange", "mango", "kiwi", "pineapple", "banana"]
unsortedarray.sort()
print(unsortedarray)


thislist = [100, 50, 65, 82, 23]
thislist.sort()
print(thislist)

thislist = [100, 50, 65, 82, 23]
thislist.sort(reverse = True)
print(thislist)

new_list_copied = thislist.copy()
print(new_list_copied)

# or copy with the list builder:
thislist = ["apple", "banana", "cherry"]
mylist = list(thislist)
mylist[0] = 'ABC'
print(thislist)
print(mylist)

# joining two lists:
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

#given two lists list1 & list2, join the two lists
# option 1 - using +
list3 = list1 + list2
print('list3', list3)
# option 2 - using .extend():
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

list1.extend(list2)
print('list1', list1)

#option 3 - using loop and append:
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

for num in list2:
    list1.append(num)

# all lists methods - https://www.w3schools.com/python/python_lists_methods.asp


def foo1(item):
    print('doing here something', item)
    return True, item # here we actually return tuple

tuple1 = foo1('item1')

# editing tuple - can be done only by converting it to an array, edit the array, then convert it back to a tuple
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)
print(x)

# appending to a tuple - the same way:
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.append("orange")
thistuple = tuple(y)

# loop over tuples:
thistuple = ("apple", "banana", "cherry")
for x in thistuple:
  print(x)


# Sets:
thisset = {"apple", "banana", "cherry"}

# loop over set:
for x in thisset:
  print(x)

#checking if some item is in the set:
print("banana" in thisset)
#check if not in the set:
print("banana" not in thisset)

# adding an item to a set:
thisset.add("orange")
print(thisset)

# adding multiple values from other set:
thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}

thisset.update(tropical)

print(thisset)

# we can also add multiple values from array:
thisset2 = {"apple", "banana", "cherry"}
mylist = ["kiwi", "orange"]
thisset2.update(mylist)

print(thisset2)

# removing an iten from a set:
# note that using remove() for an item that doesn't exist - will throw an error
thisset = {"apple", "banana", "cherry"}

thisset.remove("banana")
print(thisset)

# use discard to remove elements from the set without any error if item not exist:
thisset = {"apple", "banana", "cherry"}
thisset.discard("banana")
print(thisset)

thisset = {"apple", "banana", "cherry"}
x = thisset.pop() # removes and returns some random item from the set
print('random item from the set:', x)

# clearing a set completly:
thisset = {"apple", "banana", "cherry"}
thisset.clear()
print(thisset)

# deleting completly the entire set from the memory: using `del` before the list
thisset = {"apple", "banana", "cherry"}
del thisset

# special operations for sets:
'''
The union() and update() methods joins all items from both sets.
The intersection() method keeps ONLY the duplicates (the items that are both in set a and set b)
The difference() method keeps the items from the first set that are not in the other set(s).
The symmetric_difference() method keeps all items EXCEPT the duplicates => all the items in the union, that aren't in the intersection

link to visualisation for a better understanding: https://www.geeksforgeeks.org/swift-set-operations/#:~:text=In%20Swift%2C%20we,various%20set%20operations.
'''

# example:
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}

myset = set1.union(set2, set3, set4) # my set will be all the items from set1, set2, set3, set4 all together
print(myset)

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1.intersection(set2) # set 3 will be: { "apple" }
print(set3)
set4 = set1.union(set2) # set 4 will be: { "apple", "banana", "cherry", "google", "microsoft" }
print(set4)
set5 = set1.difference(set2) # set 5 will be: { "banana", "cherry" }
print(set5)
set6 = set1.symmetric_difference(set2) # set 6 will be: { "banana", "cherry", "google", "microsoft" }

# Dicts (objects):

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

print(thisdict)

# access a key in a dict (object):
print(thisdict['brand'])
# or
print(thisdict.get('brand'))

# duplicates aren't working:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "year": 2020
}
print(thisdict)

# dict length:
print(len(thisdict)) # 3


# dict can have different data-types:
thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}


print(type(thisdict)) # will print 'dict'

# creating a dict formally:
thisdict = dict(name = "John", age = 36, country = "Norway")
print(thisdict)

# getting dict keys:
dict_keys = thisdict.keys() # dict_keys is a list, contains all the keys of the object

dict_values = thisdict.values() # dict_values is a list, contains all the dict values
print("thisdict object values:", dict_values)

for item in dict_values:
    print(item)


# get the pairs of key:value as array of tuples:
x = thisdict.items() # x will have all the pairs of key-value: [('name', 'John'), ('age', 36), ('country', 'Norway')]
print(x)

#check if key exists in the dict:
if "model" in thisdict:
  print("Yes, 'model' is one of the keys in the thisdict dictionary")

















# for next lesson - going over input for a software