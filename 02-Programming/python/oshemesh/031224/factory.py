import uuid
from datetime import datetime


class User:
    def __init__(self, name, birthdate):
        self.name = name
        self.birthdate = datetime.strptime(birthdate, "%d/%m/%Y")
        self.created_date = datetime.now()
        self.user_id = uuid.uuid4()


def main():
    users = []
    user_count = 1

    while True:
        print(f"Please write the name for the {user_count} user (or type 'end' to finish):")
        name = input().strip()
        if name.lower() == 'end':
            break

        print(f"Please write the birthdate of the {user_count} user (DD/MM/YYYY):")
        birthdate = input().strip()

        try:
            # Create a User instance and add to the users list
            user = User(name, birthdate)
            users.append(user)
            user_count += 1
        except ValueError:
            print("Invalid date format! Please use DD/MM/YYYY.")

    # Filter users who are above 18 years old
    today = datetime.now()
    adults = [
        user for user in users
        if (today - user.birthdate).days >= 18 * 365
    ]

    print("\nUsers above 18 years old:")
    for user in adults:
        print(f"Name: {user.name}, Birthdate: {user.birthdate.strftime('%d/%m/%Y')}, User ID: {user.user_id}")


if __name__ == "__main__":
    main()
