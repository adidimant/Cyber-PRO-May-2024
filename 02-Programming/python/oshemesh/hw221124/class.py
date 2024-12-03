class A:
    def __init__(self, field1, field2):
        self.field1 = field1
        self.field2 = field2

    def function_a(self):
        return f"Fields from A: field1={self.field1}, field2={self.field2}"

class B(A):
    def __init__(self, field1, field2, field3, field4):
        super().__init__(field1, field2)  # Initialize fields from A
        self.field3 = field3
        self.field4 = field4

# Create an instance of class B
b_object = B("value1", "value2", "value3", "value4")

# Call the function from class A
result_from_a = b_object.function_a()

# Print the result of the function from class A
print(result_from_a)

# Print all fields of the object from class B
print(f"Fields from B: field1={b_object.field1}, field2={b_object.field2}, "
      f"field3={b_object.field3}, field4={b_object.field4}")
