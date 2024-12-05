"""
Question 2: Sets
Using user-input, collect 5 items for two different sets (10 items totally)
each input - insert to the required set (first 5 - set1, last 5 - set2)
create different variables of:
1) sets union
2) sets intersection
3) sets difference (set1 - set2)
4) sets symmetric_difference

- print these variables
- create a list, from all of these sets together (the list should include all, including duplicates) - first items in the list should be the union group, then the intersection items, etc..
"""
# set
 
set1=set()
set2=set() 

print("Please enter 5 items for the first set:")
for i in range(5):
    item = input(f"Enter item {i + 1}: ")
    set1.add(item)


print("Please enter 5 items for the second set:")
for i in range(5):
    item = input(f"Enter item {i + 1}: ")
    set2.add(item)



union_set=set1 | set2 #set1.union(set2)
intersiction_set=set1 & set2 #set1.intersection(set2)
difference_set=set1 - set2 #set1.difference(set2
symmetric_difference_set = set1 ^ set2 #set1.symmetric_difference(set2)


print("\nSet Operations Results:")
print(f"Union: {union_set}")
print(f"Intersection: {intersiction_set}")
print(f"Difference : {difference_set}")
print(f"Symmetric Difference: {symmetric_difference_set}")

combined_list = list(union_set) + list(intersiction_set) + list(difference_set) + list(symmetric_difference_set)

print("\nCombined List:")
print(combined_list)