"""
Question 1: Create a class called Animal, and receive all the relevant fields for a creation of an animal
mandatory fields: animal_type, name, age, legs_count, is_predator (boolean)
write functions that gets/sets the values of these fields for the instance of the class
for example - i want to be able to use:

animal1.set_is_predator(True)
then:
print(animal1.get_is_predator())
will print True
"""

class Animal:
    def __init__(self, animal_type, name, age, legs_count, is_predator):
        self.animal_type = animal_type
        self.name = name
        self.age = age
        self.legs_count = legs_count
        self.is_predator = is_predator


    def get_age(self):
        return self.age

    def set_age(self,age):
         if age >0:
             self.age = age
         else:
             print("age must be greater than 0")

    def get_is_predator(self):
        return self.is_predator

    def set_is_predator(self, is_predator):
        if isinstance (is_predator, bool):
         self.is_predator = is_predator
        else:
            print("is_predator must be boolean")



animal1=Animal("Birds","Duck" ,1,2,False)
animal1.set_age(3)
print(animal1.get_age())

animal1.set_is_predator(True)
print(animal1.get_is_predator())
print("----------------------------------------------")


"""
Question 2: Create a class called User, and receive all the relevant parameters for a creation of an user in your system
mandatory fields: register_date, first_name, last_name, birthdate, last_login, user_id, password
the User class should extend the class Person - extend a class means it gets all the functionality from the parent class
(if i'm telling that class User extends Person - it means that User is also a Person)
write at least 4 different functions regarding the user fields (be creative, for example - a function that calculates how many time the user is registered in the system)
"""
import datetime
import math


class Person:
    def __init__(self, first_name, last_name, birthdate):
        self.first_name = first_name
        self.last_name = last_name
        self.birthdate =birthdate


    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"


    def get_full_details(self):
        return f"{self.first_name} {self.last_name}, {self.get_full_name()}"

    def get_age(self):
        today = datetime.date.today()
        delta1 = today - self.birthdate
        return  delta1.days //365



class User(Person):
    def __init__(self, register_date, first_name, last_name, birthdate, last_login, user_id, password):
        super().__init__(first_name, last_name, birthdate)
        self.register_date = register_date
        self.last_login = last_login
        self.user_id = user_id
        self.password = password



    def years_since_register(self):
        today1 = datetime.date.today()
        delta = today1 - self.register_date
        return  math.floor(delta.days/356)




user1 = User(datetime.date(2020,2,2),
             "Ahmad",
             "ali",
             datetime.date(2004,1,1),
             "2024-10-01",
             "user123", "pass@123")


print(f"user1 years since register: {user1.years_since_register()}")
print(f"Full Name user1: {user1.get_full_name()}")
print(f"Age user1: {user1.get_age()}")
print(f"full details user1: {user1.get_full_details()}")

'''
Question 3 - Write a function is_palindrome(s) that checks if a string is a palindrome (reads the same forwards and backwards). the function should return True/False
examples:
abba is a palindrome
aba is a palindrome
a is a palindrome
ab is not a palindrome
abc is not a palindrome
'' is a palindrome
bba is not a palindrome
'''

def is_palindrome(s):

     for i in range(len(s)//2):
         if s[i] != s[len(s)-i-1]:
             return False
     return True


print(is_palindrome("abba"))
print(is_palindrome("aba"))
print(is_palindrome("a"))
print(is_palindrome("ab"))
print(is_palindrome("abc"))
print(is_palindrome(""))
print(is_palindrome("bba"))

'''
Question 4 - write a function that recieves a body of http request (as a string),
 and checks how many new lines there are in the body.
 the function should return the counter
In addition - make sure you are going over deeply the solution for last homework (08.11.24)
'''
def count_new_lines(body):
    return body.count("\n")

http_request_body ="""GET / HTTP/1.1   
Host: example.com
User-Agent: my-browser
Content-Length: 0"""

print(count_new_lines(http_request_body))  #  3



