# Question 1

class Animal:
    def __init__(self, animal_type, name, age, legs_count, is_predator):
        # _ (double underscores) for private attributes
        self.__animal_type = animal_type
        self.__name = name
        self.__age = age
        self.__legs_count = legs_count
        self.__is_predator = is_predator

    # Getter and Setter for animal_type
    def get_animal_type(self):
        return self.__animal_type

    def set_animal_type(self, animal_type):
        self.__animal_type = animal_type

    # Getter and Setter for name
    def get_name(self):
        return self.__name

    def set_name(self, name):
        self.__name = name

    # Getter and Setter for age
    def get_age(self):
        return self.__age

    def set_age(self, age):
        self.__age = age

    # Getter and Setter for legs_count
    def get_legs_count(self):
        return self.__legs_count

    def set_legs_count(self, legs_count):
        self.__legs_count = legs_count

    # Getter and Setter for is_predator
    def get_is_predator(self):
        return self.__is_predator

    def set_is_predator(self, is_predator):
        self.__is_predator = is_predator


# Example usage:
animal1 = Animal("Mammal", "Lion", 10, 4, False)
animal1.set_is_predator(True)
print(animal1.get_is_predator())  # Output: True


#Question 2

from datetime import datetime

class Person:
    def __init__(self, first_name, last_name, birthdate):
        self.first_name = first_name
        self.last_name = last_name
        self.birthdate = datetime.strptime(birthdate, '%d-%m-%Y')

class User(Person):
    def __init__(self, first_name, last_name, birthdate, register_date, last_login, user_id, password):
        super().__init__(first_name, last_name, birthdate)  # Initialize from the parent class
        self.register_date = datetime.strptime(register_date, '%d-%m-%Y')
        self.last_login = datetime.strptime(last_login, '%d-%m-%Y')
        self.user_id = user_id
        self.password = password

    def days_since_registration(self):
        """Calculate how many days the user has been registered in the system."""
        today = datetime.now()
        delta = today - self.register_date
        return delta.days

    def time_since_last_login(self):
        """Calculate the time in days since the user last logged in."""
        today = datetime.now()
        delta = today - self.last_login
        return delta.days

    def full_name(self):
        """Return the user's full name."""
        return f"{self.first_name} {self.last_name}"

    def is_password_secure(self):
        """Check if the password is secure (e.g., minimum 8 characters, contains letters and numbers and special chars)."""
        if (
                len(self.password) >= 8
                and any(char.isdigit() for char in self.password)
                and any(char.isalpha() for char in self.password)
                and any(char in "!@#$%^&*(),.?\":{}|<>" for char in self.password)
        ):
            # Password is secure
            return True
        return False

# Example Usage
user1 = User(
    first_name="Oren",
    last_name="Shemesh",
    birthdate="15-06-1973",
    register_date="20-10-2024",
    last_login="20-11-2024",
    user_id="oshemesh",
    password="PasW@rd"
)

print(f"Full Name: {user1.full_name()}")
print(f"Days Registered: {user1.days_since_registration()} days")
print(f"Days Since Last Login: {user1.time_since_last_login()} days")
print(f"Password Secure: {'Yes' if user1.is_password_secure() else 'No'}")

user2 = User(
    first_name="Adi",
    last_name="Dimant",
    birthdate="15-06-1993",
    register_date="29-10-2024",
    last_login="20-11-2024",
    user_id="adidimant",
    password="PassWrd@123"
)

print(f"Full Name: {user2.full_name()}")
print(f"Days Registered: {user2.days_since_registration()} days")
print(f"Days Since Last Login: {user2.time_since_last_login()} days")
print(f"Password Secure: {'Yes' if user2.is_password_secure() else 'No'}")

# Question 3

def is_palindrome(s):
    return s == s[::-1]

print(is_palindrome("abba"))  # Output: True
print(is_palindrome("aba"))   # Output: True
print(is_palindrome("a"))     # Output: True
print(is_palindrome("ab"))    # Output: False
print(is_palindrome("abc"))   # Output: False
print(is_palindrome(""))      # Output: True
print(is_palindrome("bba"))   # Output: False


#Question 4

def count_new_lines(body):
    return body.count('\n')

http_body = """POST /submit HTTP/1.1
Host: google.com
Content-Type: application/json
Content-Length: 123

{
    "name": "Oren Shemesh",
    "email": "Shemesh"
}
"""

print(count_new_lines(http_body))  # Output: 9

