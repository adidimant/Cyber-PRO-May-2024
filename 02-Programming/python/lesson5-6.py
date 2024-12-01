if (5 < 6) or (7 > 8):
    print("One of the values are True")
else:
    print("Both values are false")


class Vehicle:
    def __init__(self, type, year, nickname, owner):
        self.type = type
        self.year = year
        self.nickname = nickname
        self.owner = owner

    def drive(self, location):
        print(self.type + ' ' + self.nickname + " is driving to location:", location)

    def get_owner(self):
        return self.owner

    def set_owner(self, new_owner):
        self.owner = new_owner

class Car(Vehicle):
    def __init__(self, nickname, owner, company, model, year):
        super().__init__('car', year, nickname, owner)
        self.company = company
        self.model = model
        self.security_rank = self.get_security_rank()

    def get_security_rank(self):
        difference = 2024 - self.year # 0-54 (assuming latest car will be from 1970)
        ratio = difference / 54 # 0 / 54 => 0, 54 / 54 => 1
        old_factor = 1 - ratio

        # 2024
        # 2018
        # 2024-2018 = 6
        # 1970 - 0
        # 2024 - 1
        # 2024 - 1970 = 54 => 0
        # 2024 - 2024 = 0 => 1

        if self.company == 'Volvo':
            return 9 * old_factor
        elif self.company == 'Alfa Romeo' and self.model == 'Guillette':
            return 8 * old_factor

    def save_in_db(self):
        pass

# creating an instance of Car (instance = an object with the shape of Car - with Car class fields and functions)
car1 = Car('rockstar-car', 'oren shemesh',  'Volvo', 'ms500', 2017)
car1.save_in_db()
print("car1 security rank:", car1.get_security_rank())
car1.drive("Ashkelon")
print('car1 current owner', car1.get_owner())
car1.set_owner('liav zecharia')
print('car1 new car owner:', car1.get_owner())

class Bike(Vehicle):
    def __init__(self, nickname, owner, year, company, model):
        super().__init__('bike', year, nickname, owner)
        self.company = company
        self.model = model

bike1 = Bike('my-coolest-bike', 'isra', 2020, 'Giant', 'ls600')

bike1.drive("Tel-Aviv")

if isinstance(car1, Car):
    print("car1 is instance of Car")
if isinstance(car1, Vehicle):
    print("car1 is instance of Vehicle")
if isinstance(car1, Bike):
    print("car1 is instance of Bike")
if isinstance(bike1, Bike):
    print("bike1 is instance of Bike")
if isinstance(bike1, Vehicle):
    print("bike1 is instance of Vehicle")

#car1.name
#car1.makeNoise()


tuple1 = (5, 6, True)
list1 = [5, 6, True]
print(tuple1)
# tuple1[0] = 8 -> this line will bring us error, tuples are unchangeable
print(list1)
list1[0] = 8
print(list1)

# list - order important, changeable, allowing duplicates
# sets - unordered (order not important), changeable, no duplicates
# tuples - order important, unchangeable, allowing duplicates

mylist = ["apple", "banana", "cherry"]
print(type(mylist))
print('beginning:', mylist)
mylist.append("orange")
print('with append:', mylist)
mylist.insert(1, "orange")
print('with insert specific index (1):', mylist)
mylist.remove("banana")
print('with remove:', mylist)
# remove specific index:
mylist.pop(1)
print('with remove specific index (1):', mylist)
# clearing list:
mylist.clear()
print('clearing:', mylist)

# for next lesson - going over input for a software
