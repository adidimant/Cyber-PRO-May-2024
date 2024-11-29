import datetime

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