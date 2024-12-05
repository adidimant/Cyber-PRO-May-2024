"""Question 1: User creation factory
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
"""
import datetime
import uuid

class User:
    def __init__(self, name, birthdate):
        self.name = name
        self.birthdate = datetime.datetime.strptime(birthdate, "%d/%m/%Y").date()
        self.created_date = datetime.date.today()
        self.user_id = str(uuid.uuid4())


    


def get_age(birthdate):
    today = datetime.date.today()
    return today.year - birthdate.year


user_list = []

while True:
    name_user = input("Please write the name for the user (or type 'end' to finish): ")
    if name_user.lower() == "end":      
        break

    birthdate_user = input("Please write the birthdate of the user (dd/mm/yyyy): ")
    
    new_user = User(name_user, birthdate_user)  
    user_list.append(new_user) 
    print(f"User {new_user.name} created with ID {new_user.user_id}\n")
    
adults = [user for user in  user_list if get_age(user.birthdate) > 18]

print("\nAll Users:")
for user in user_list:
    print(f"Name: {user.name}, Birthdate: {user.birthdate}, Created: {user.created_date}, ID: {user.user_id}")


print("\nAll Users above 18 years old :")
for user in adults:
   print(f"name: {user.name},  birthDate: {user.birthdate}, user ID : {user.user_id}")



