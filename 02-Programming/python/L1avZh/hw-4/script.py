class A:
    def __init__(self, a1, a2):
        self.a1 = a1
        self.a2 = a2

    def sum(self):
        return "object sum is: " + self.a1 + self.a2

    def display_fields(self):
        return f"Object with values a1={self.a1} and a2={self.a2}"


class B(A):
    def __init__(self, a1, a2, b1, b2):
        super().__init__(a1, a2)
        self.b1 = b1
        self.b2 = b2


    def sum(self):
        return f"the object sum is: {self.a1 + self.a2 + self.b1 + self.b2}"

    def display_fields(self):
        return super().display_fields() + f", and b1={self.b1} and b2={self.b2}"




object_1 = B(10, 20, 30, 40)
print(object_1.sum())
print(object_1.display_fields())