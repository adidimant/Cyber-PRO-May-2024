# Question 1:

class Animal:
    def __init__(self, animal_type, name, age, legs_count, is_predator, birthdate):
        self.animal_type = animal_type
        self.name = name
        self.age = age
        self.legs_count = legs_count
        self.is_predator = is_predator
        self.birthdate = birthdate

    def set_animal_type(self, animal_type):
        self.animal_type = animal_type

    def get_animal_type(self):
        return self.animal_type

    def set_name(self, name):
        self.name = name

    def get_name(self):
        return self.name

    def set_age(self, age):
        self.age = age

    def get_age(self):
        return self.age

    def set_legs_count(self, legs_count):
        self.legs_count = legs_count

    def get_legs_count(self):
        return self.legs_count

    def set_is_predator(self, is_predator):
        self.is_predator = is_predator

    def get_is_predator(self):
        return self.is_predator

    def set_birthdate(self, birthdate):
        self.birthdate = birthdate

    def get_birthdate(self):
        return self.birthdate

spider1 = Animal('spider', 'nono', 7, 48, True, '09/11/2017')
print(spider1.get_name())

print(f"Is predator value for the spider: {spider1.get_is_predator()}")
# making the spider non-predator:
spider1.set_is_predator(False)
print(f"Is predator value for the spider: {spider1.get_is_predator()}")

import datetime
import uuid
from person import Person

# Question 2:
class User(Person):
    def __init__(self, register_date, first_name, last_name, birthdate, last_login, password, email):
        super().__init__(first_name, last_name, birthdate)
        self.register_date = register_date
        self.last_login = last_login
        self.user_id = uuid.uuid4()
        self.password = password
        self.email = email

    def check_login_credentials(self, email, password):
        if self.email == email and self.password == password:
            return True
        return False

    def get_activity_in_years(self):
        now = datetime.date.today()
        delta = now - self.register_date
        return delta.days / 365


user1 = User(datetime.date(2008, 6, 10), 'Aviad', 'Malul', datetime.date(2000, 8, 8), datetime.date(2024, 11, 22), '123123', 'aviad@gmail.com')

print(user1.user_id)
login_success_result1 = user1.check_login_credentials('adi@gmail.com', '123123')
print(login_success_result1) # prints False
login_success_result2 = user1.check_login_credentials('aviad@gmail.com', '123123')
print(login_success_result2) # prints True

print(user1.get_full_details())
print(user1.first_name) # first_name comes from Person class


# Question 3:
# One solution - reverse the string, and check if the original string s equals to the reversed string
def is_palindrome(s):
    reversed_string = s[::-1]
    return s == reversed_string # returns True/False if they are equals (and if they are equal => s is palindrome)
# Second option
import math

def is_palindrome2(s):
    for i in range(0, math.floor(len(s) / 2)):
        if s[i] != s[len(s) -1 - i]: # note - instead of s[len(s) -1 - i] - we can just write s[-i]
            return False
    return True

print(is_palindrome2("aba"))
