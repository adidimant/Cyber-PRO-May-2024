'''
1) Establish a server in python and run it - https://fastapi.tiangolo.com/
use also AI server (chatGPT / Claude)
2) Create a simple GET & simple POST endpoints for the server, test your GET endpoint from the browser
'''

print("starts script!")

from fastapi import FastAPI
from fastapi import HTTPException
from pydantic import BaseModel

# Initialize FastAPI app
app = FastAPI()

# In-memory database for demonstration
items_db = []

# Define the data model for POST requests
class NetflixItem(BaseModel):
    id: int
    name: str
    description: str = None
    type: str # 'series' | 'movie'
    price: float


# GET endpoint to retrieve all items
@app.get("/items")
async def get_items():
    #items_db = MySQL.query("SELECT * FROM Items")
    return items_db


# POST endpoint to add a new item
@app.post("/items")
async def add_item(item: NetflixItem):
    # Check if item with the same ID already exists
    for existing_item in items_db:
        if existing_item.id == item.id:
            raise HTTPException(status_code=400, detail="Item with this ID already exists.")

    # Add the new item to the database
    items_db.append(item)
    return item

@app.post("/items/update-item")
async def update_item(item: NetflixItem):
    for index, existing_item in enumerate(items_db):
        if existing_item.id == item.id:
            items_db[index] = item
            return {"message": "Item updated successfully", "item": item}
    raise HTTPException(status_code=404, detail="Item not found")

@app.delete("/items/{item_id}")
async def remove_item(item_id: str):
    for index, existing_item in enumerate(items_db):
        if str(existing_item.id) == item_id:
            deleted_item = items_db.pop(index)
            return {"message": "Item deleted successfully", "item": deleted_item}
    raise HTTPException(status_code=404, detail="Item not found"



# POST endpoint to search for items by name
@app.post("/items/search")
async def search_items(name: str):
    matching_items = [item for item in items_db if item.name.lower().startswith(name.lower())]
    return {"items": matching_items}

# POST endpoint to search for items by price range
@app.post("/items/price-range")
async def search_items_by_price(min_price: float, max_price: float):
    matching_items = [item for item in items_db if min_price <= item.price <= max_price]
    return {"items": matching_items}

# POST endpoint to search for items by type
@app.post("/items/type")
async def search_items_by_type(item_type: str):
    matching_items = [item for item in items_db if item.type == item_type]
    return {"items": matching_items}


# Run the server using Uvicorn (entry point)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)


