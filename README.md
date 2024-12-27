# Express API Server

A simple Express.js API server that handles company-related requests with custom error handling and async support.

## Features

- RESTful API endpoints for company data
- Dynamic response based on company name parameter
- CORS enabled for cross-origin requests
- Custom error handling middleware
- Async/await support with error catching wrapper
- JSON response formatting
- Environment variable support for PORT configuration

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Example Response

When making a GET request to `/api/google`, you'll receive a response like:
```
{
  "success": true,
  "data": {
    "isSelected": true,
    "company": "google",
    "applicant": "Arbaz Ali",
    "applicantGoal": "google's people is now like my family, aur apni family ke growth mein jee jaan lga denge"
  }
}
```
