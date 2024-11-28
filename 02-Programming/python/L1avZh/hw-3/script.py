class Animal:
    def __init__(self, animal_type, name, age, legs_count, is_predator):
        self.animal_type = animal_type
        self.name = name
        self.age = age
        self.legs_count = legs_count
        self.is_predator: bool = is_predator

    def get_animal_type(self):
        return self.animal_type
    def set_animal_type(self, animal_type):
        self.animal_type = animal_type

    def get_name(self):
        return self.name
    def set_name(self, name):
        self.name = name

    def get_age(self):
        return self.age
    def set_age(self, age):
        self.age = age

    def get_legs_count(self):
        return self.legs_count
    def set_legs_count(self, legs_count):
        self.legs_count = legs_count

    def get_is_predator(self):
        return self.is_predator
    def set_is_predator(self, is_predator: bool):
        self.is_predator = is_predator


# TODO: Question 2
# class Person:
#   def __init__(self, first_name, age):
#     self.first_name = first_name
#     self.age = age
#
#   class_type = 'person'
#   def fun1(self):
#     print(f'fun1 was activated for the user name: {self.first_name}')
#
#   def getFullDetails(self):
#     return f"The person name: {self.first_name}, the age is: {self.age}"
#
#
# class User:
#     def __init__(self, register_date, first_name, last_name, birthdate, last_login, user_id, password):
#         self.register_date = register_date
#         self.first_name = first_name
#         self.last_name = last_name
#         self.birthdate = birthdate
#         self.last_login = last_login
#         self.user_id = user_id
#         self.password = password



def is_palindrome(string):
    return string == string[::-1]

def new_line_count(http_request):
    return http_request.count('\n')




