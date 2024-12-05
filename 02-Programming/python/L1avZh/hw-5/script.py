from datetime import date, datetime
import time
import uuid

RED = "\033[31m"
GREEN = "\033[32m"
YELLOW = "\033[33m"
CYAN = "\033[36m"
END = "\033[0m"

class User:
    def __init__(self, name, birthdate):
        self.name = name
        self.birthdate = datetime.strptime(birthdate, "%d/%m/%Y")
        self.created_date = date.today()
        self.user_id = uuid.uuid4()

    def calculate_age(self):
        today = date.today()
        year_difference = today.year - self.birthdate.year
        return year_difference

    def get_user(self):
        return (f"('{self.name}', "
                f"Birthday: {self.birthdate.strftime('%d/%m/%Y')}, "
                f"Age: {self.calculate_age()}, "
                f"Created Date: {self.created_date.strftime('%d/%m/%Y')}, "
                f"User ID: {self.user_id})")

users = []
users_count = 1

while True:
    print(f"{CYAN}Welcome to the User Creation{END} ")
    nameInput = input(f"Please write the name for the {CYAN}{users_count}{END} user: ")
    birthdateInput = input(f"Please write the birthdate in the format dd/mm/yyyy for the {CYAN}{users_count}{END} user: ")

    try:
        user = User(nameInput, birthdateInput)
        users.append(user)
        users_count += 1
        temp = input(f"{GREEN}\033[1mUser {users[-1].name} has been created!\033[0m \n What you wanna do next? {RED}'END'{END} or {GREEN}'ANOTHER'{END}: {END} ").lower()
        if temp == 'end':
            break
        elif temp == 'another':
            print(f"{YELLOW}Loading new user creation...{END}")
        else:
            print("Invalid Answer")

        time.sleep(2)

    except:
        print(f"{RED}Invalid date format. Please use DD/MM/YYYY.{END}")

legal_users = []

for user in users:
    if user.calculate_age() > 18:
        legal_users.append(user)



print("All Users")
for user in users:
    print(user.get_user())

print(" ")
print("Legal Users (Above 18)")
for user in legal_users:
    print(user.get_user())



#Question 2: Sets Using user-input,
# collect 5 items for two different sets (10 items totally) each input - insert to the required set (first 5 - set1, last 5 - set2) create different variables of:
# sets union
# sets intersection
# sets difference (set1 - set2)
# sets symmetric_difference
# print these variables
# create a list, from all of these sets together (the list should include all, including duplicates) -
# first items in the list should be the union group, then the intersection items, etc..

items = 0
set1 = set()
set2 = set()
while items < 10:
    print("--------------------------------")
    item = input(f"Please enter item {items+1}: ")
    items += 1

    if items <= 5:
        set1.add(item)
    else:
        set2.add(item)


union = set1.union(set2)
intersection = set1.intersection(set2)
difference1 = set1.difference(set2)
difference2 = set2.difference(set1)
symmetric_difference = set1.symmetric_difference(set2)

combined_list = list(union) + list(intersection) + list(difference1) + list(difference2) + list(symmetric_difference)

print("Union:", union)
print("Intersection:", intersection)
print("Difference (set1 - set2):", difference1)
print("Difference (set2 - set1):", difference2)
print("Symmetric Difference:", symmetric_difference)
print("Combined List:", combined_list)
