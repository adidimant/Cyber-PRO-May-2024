import datetime
import time
from uuid import uuid4

# Question 1:

class User:
    def __init__(self, name, birthdate):
        self.name = name
        self.birthdate = datetime.datetime.strptime(birthdate, "%d/%m/%Y").date()
        self.created_date = datetime.date.today()
        self.user_id = str(uuid4())

    def get_age(self):
        today = datetime.date.today()
        return today.year - self.birthdate.year


print("Welcome to the User Creation Factory program! we hope you'll hae fun")

users_list = []
should_continue = 'yes'

while should_continue != 'end':
    user_fullname = input("Please write the name for the next user: ")
    birthdate = input("Please write the birthdate of the user: ")

    new_user = User(user_fullname, birthdate)
    users_list.append(new_user)

    should_continue = input("Do you want to proceed creating the next user? type 'yes' or 'end')").lower()
    while should_continue != 'yes':
        if should_continue == 'end':
            break

        should_continue = input("Do you want to proceed creating the next user? type 'yes' or 'end')").lower()
print("Finished creating users. thank you!")
time.sleep(1)
adults = []

for user in users_list:
    if user.get_age() >= 18:
        adults.append(user)
        # we can also print here - because here (in this if) are only the adults

'''
REMINDER:
in javascript we will do it like this:
const adults = users_list.filter((user) => {
    if (user.get_age() >=18) {
        return true;
    }  
    return false;
});
'''

print("The adults users are the following:")
for adult in adults:
    time.sleep(0.7)
    print(f"name: {adult.name},  birthDate: {adult.birthdate}, user ID: {adult.user_id}, createdDate: {adult.created_date}")

should_moved_to_next_question = input("Do you want to move to next question? y/n").lower()

# Question 2:
# Assuming the sets should contain only numbers and the user input is only numbers
if should_moved_to_next_question == 'y':
    set1 = set()
    set2 = set()
    for i in range(10):
        item = input(f"Please write the {i+1} item to put in a list")
        item_as_number = int(item)
        if i < 5:
            set1.add(item_as_number)
        else:
            set2.add(item_as_number)

    time.sleep(1.5)
    print("Set 1:", set1)
    print("Set 2:", set2)

    sets_union = set1.union(set2) # this is exactly the same as set2.union(set1)
    sets_intersection = set1.intersection(set2) # this is exactly the same as set2.intersection(set1)
    sets_difference = set1.difference(set2) # this is not! the same as set2.difference(set1)
    sets_symmetric_difference = set1.symmetric_difference(set2) # this is exactly the same as set2.symmetric_difference(set1)

    time.sleep(1.5)
    print("\nSet Operations Results:")
    time.sleep(1.5)

    print('sets_union:', sets_union)
    print('sets_intersection:', sets_intersection)
    print('sets_difference (set1 - set2):', sets_difference)
    print('sets_symmetric_difference:', sets_symmetric_difference)

    print("Creating the total array:")
    time.sleep(1.5)

    total_list = list(sets_union) + list(sets_intersection) + list(sets_difference) + list(sets_symmetric_difference)

    print(total_list)
    time.sleep(1)
    print("Finished sets question. see you soon!")






