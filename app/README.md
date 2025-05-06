# QBI Studio IA Backend

This is the backend API for the QBI Studio IA platform, built with FastAPI.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file in the backend directory with the following variables:
```
POSTGRES_SERVER=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=qbi_studio
SECRET_KEY=your-secret-key-here
```

4. Set up the database:
```bash
# Create the database
createdb qbi_studio

# Run migrations (when implemented)
alembic upgrade head
```

5. Run the development server:
```bash
uvicorn app.main:app --reload
```

The API will be available at http://localhost:8000

## API Documentation

Once the server is running, you can access:
- Swagger UI documentation: http://localhost:8000/docs
- ReDoc documentation: http://localhost:8000/redoc

## Features

- User authentication with JWT
- Contact form submission
- Database integration with PostgreSQL
- CORS middleware for frontend integration
- API versioning
- Environment-based configuration 