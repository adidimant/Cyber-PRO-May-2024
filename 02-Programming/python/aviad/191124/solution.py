# Question 1:
class Animal:
    def __init__(self, animal_type, name, age, legs_count, is_predator):
        self.animal_type = animal_type
        self.name = name
        self.age = age
        self.legs_count = legs_count
        self.is_predator = is_predator

    # Getter and setter for is_predator
    def set_is_predator(self, is_predator):
        self.is_predator = is_predator

    def get_is_predator(self):
        return self.is_predator

    # Getter and setter for animal_type
    def set_animal_type(self, animal_type):
        self.animal_type = animal_type

    def get_animal_type(self):
        return self.animal_type

    # Getter and setter for name
    def set_name(self, name):
        self.name = name

    def get_name(self):
        return self.name

    # Getter and setter for age
    def set_age(self, age):
        self.age = age

    def get_age(self):
        return self.age

    # Getter and setter for legs_count
    def set_legs_count(self, legs_count):
        self.legs_count = legs_count

    def get_legs_count(self):
        return self.legs_count

# Example usage
animal1 = Animal("Dog", "Buddy", 5, 4, False)

# Set is_predator to True
animal1.set_is_predator(True)

# Print the value of is_predator
print(animal1.get_is_predator())  # Output: True

# Question 2:

from datetime import datetime

class Person:
    def __init__(self, first_name, last_name, birthdate):
        self.first_name = first_name
        self.last_name = last_name
        self.birthdate = birthdate

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"

    def get_age(self):
        today = datetime.now()
        birthdate = datetime.strptime(self.birthdate, "%Y-%m-%d")
        age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
        return age



class User(Person):
    def __init__(self, register_date, first_name, last_name, birthdate, last_login, user_id, password):
        super().__init__(first_name, last_name, birthdate)
        self.register_date = register_date
        self.last_login = last_login
        self.user_id = user_id
        self.password = password

    # Function to calculate how long the user has been registered
    def get_registration_duration(self):
        register_date = datetime.strptime(self.register_date, "%Y-%m-%d")
        duration = datetime.now() - register_date
        return duration.days  # Returns the number of days registered

    # Function to check if the user is active (logged in within the last 30 days)
    def is_active(self):
        last_login_date = datetime.strptime(self.last_login, "%Y-%m-%d")
        return (datetime.now() - last_login_date).days <= 30

    # Function to change the user's password
    def change_password(self, new_password):
        self.password = new_password
        return "Password updated successfully."

    # Function to display user information
    def display_user_info(self):
        return f"User  ID: {self.user_id}\nName: {self.get_full_name()}\nAge: {self.get_age()}\n" \
               f"Registered for: {self.get_registration_duration()} days\nLast Login: {self.last_login}\n"

# Example usage:
user1 = User("2022-01-15", "John", "Doe", "1990-05-20", "2023-10-01", "user123", "securepassword")

# Display user information
print(user1.display_user_info())

# Check registration duration
print(f"Registered for: {user1.get_registration_duration()} days")

# Check if user is active
print(f"Is user active? {user1.is_active()}")

# Change password
print(user1.change_password("newsecurepassword"))

# Question 3:

def is_palindrome(s):
    # Normalize the string: remove spaces and convert to lowercase
    normalized_str = ''.join(s.split()).lower()
    # Check if the string is equal to its reverse
    return normalized_str == normalized_str[::-1]

# Test cases
print(is_palindrome("abba"))  # True
print(is_palindrome("aba"))   # True
print(is_palindrome("a"))     # True
print(is_palindrome("ab"))    # False
print(is_palindrome("abc"))   # False
print(is_palindrome(""))       # True
print(is_palindrome("bba"))    # False


# Question 4:

def count_new_lines(http_body):
    # Count the occurrences of new line characters
    return http_body.count('\n')

# Test cases
http_request_1 = """POST /api/resource HTTP/1.1
Host: example.com
Content-Type: application/json

{"key": "value"}
"""

http_request_2 = "GET /index.html HTTP/1.1\nHost: example.com\n\n"

http_request_3 = "No new lines here."

print(count_new_lines(http_request_1))  # Output: 3
print(count_new_lines(http_request_2))  # Output: 2
print(count_new_lines(http_request_3))  # Output: 0