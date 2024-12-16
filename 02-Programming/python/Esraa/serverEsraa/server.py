"""
1) Establish a server in python and run it - https://fastapi.tiangolo.com/
use also AI server (chatGPT / Claude)
2) Create a simple GET & simple POST endpoints for the server, test your GET endpoint from the browser
"""

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import HTTPException


# Initialize FastAPI app
app = FastAPI()

# In-memory database for demonstration
items_db = []

# Define the data model for POST requests
class NetflixItem(BaseModel):
    id: int
    name: str
    description: str = None
    item_type: str # 'series' | 'movie'
    price: float

# GET endpoint to retrieve all items
@app.get("/items")
async def get_items():
    return items_db


# POST endpoint to add a new item
@app.post("/items")
async def add_item(item: NetflixItem):
    # Check if item with the same ID already exists
    for existing_item in items_db:
        print(existing_item)
        if existing_item.id == item.id:
            raise HTTPException(status_code=400, detail="Item with this ID already exists.")

    # Add the new item to the database
    # Custom response
    return {
        "message": f"Item '{item.name}' has been successfully added!",
        "item": item
    }

# Run the server using Uvicorn (entry point)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)