from fastapi import FastAPI  # Ensure FastAPI is installed using `pip install fastapi` or the issue might persist
from pydantic import BaseModel

# Create an instance of FastAPI
app = FastAPI()

# Create a model for the POST request body
class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

# Define a GET endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI!"}

# Define a POST endpoint
@app.post("/items/")
def create_item(item: Item):
    return {"item": item}
