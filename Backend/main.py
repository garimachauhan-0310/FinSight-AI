from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
    return {"message": "FinSight AI Backend is running."} 