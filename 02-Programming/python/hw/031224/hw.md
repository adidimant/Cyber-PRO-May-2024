Question 1: User creation factory
- Build a class User, with the fields: name, birthdate, created_date, user_id
the programs should begin with a loop of user creation
- When the program starts - start collecting from the user the details for new users to create:
"Please write the name for the first user"
the user should input "adi xxx"
"Please write the birthdate of the first user"
the user should input "03/03/1999"
Then a user instance should be created (using the User class) and being pushed into a users list
Note that created_date & userId are fields you should create in runtime - created_date is the date of now, and user_id should be a random GUID (check online)
Then writing "another":
"Please write the name for the second user"..
...
"Please write the birthdate of the first user"
...
The process ends with the user inputs with "end" (use a loop for that! that ends when the user inputs with "end" at the beginning of the next user)

- The program should iterate all the users created, and return a sub-array that contains all the users above 18 years old

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