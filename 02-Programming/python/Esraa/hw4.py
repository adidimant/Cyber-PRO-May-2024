"""
Question 1:
Create class B that extends class A.
Class A should contain 2 fields and a function.
Class B should contain 2 fields
Create an instance (object) of class B, call from it to the function of class A.
Print all fields of the object from class B.
"""
class A :
     def __init__(self, a1, a2):
         self. a1= a1
         self.a2 =a2

     def myfunc(self):
         return  self.a1 + self.a2


class B(A):

    def __init__(self, a1, a2,b1,b2):
        super().__init__(a1,a2)
        self.b1= b1
        self.b2= b2

# Create an instance of Class B
object_1=B("value1","value2","value3","value4")
# Call function of Class A from the object of Class B
print(object_1.myfunc())
# Print all fields of the object from Class B
print(object_1.a1,object_1.a2,object_1.b1,object_1.b2)



#example
class Car:
    def __init__(self, make, model, year):
        self.make= make
        self.model=model
        self.year=year

    def display_info(self):
        return self.make, self.model, self.year




class ElectricCar(Car):
    def __init__(self, make, model, year,battery_size,range_per_charge):
        super().__init__(make,model,year)
        self.battery_size=battery_size
        self.range_per_charge=range_per_charge

    def display_battery_info(self):
        return f"Battery size: {self.battery_size} kWh, Range: {self.range_per_charge} km"



my_electric_car=ElectricCar("tesla","model s",2022,100,600)
print(my_electric_car.display_info())
print(my_electric_car.display_battery_info())