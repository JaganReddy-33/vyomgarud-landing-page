# VyomGarud Server

Backend Express server for VyomGarud contact form API.

## Installation

```bash
npm install
```

## Running

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

## API Endpoints

### POST /api/contact

Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Your message here"
  }
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "VyomGarud API is running"
}
```


