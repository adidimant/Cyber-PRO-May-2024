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


import datetime
import uuid

class Person:
  def __init__(self, first_name, last_name, birthdate):
    self.first_name = first_name
    self.last_name = last_name
    self.birthdate = birthdate

  def fun1(self):
    print(f'fun1 was activated for the user name: {self.first_name}')

  def get_age(self):
      now = datetime.date.today()
      delta = now - self.birthdate
      return delta.days / 365

  def get_full_details(self):
    return f"The person name: {self.first_name}, the age is: {self.get_age()}"

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


def is_palindrome(string):
    return string == string[::-1]

def new_line_count(http_request):
    return http_request.count('\n')




