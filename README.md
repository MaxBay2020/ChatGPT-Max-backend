# Express Server with OpenAI ChatGPT API

This project is a simple Express server that interacts with OpenAI's ChatGPT API. It allows clients to send messages and receive AI-generated responses.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/express-chatgpt-api.git
cd express-chatgpt-api
```

### 2. Install Dependencies

```sh
npm install
```

or if you use Yarn:

```sh
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
```

### 4. Run the Server

```sh
npm start
```

or

```sh
yarn start
```

The server will start on `http://localhost:8000`.

## API Endpoints

### 1. Chat with GPT

#### **POST** `/chat`

**Request Body:**

```json
{
  "userMessage": "Hello, how are you?"
}
```

**Response:**

```json
{
  "response": "I'm just an AI, but I'm doing great! How can I assist you today?"
}
```

## Project Structure

```
express-chatgpt-api/
│── .env               # Environment variables
│── package.json       # Project metadata & dependencies
│── server.js          # Express server entry point
└── README.md          # Documentation
```

## Dependencies

- `express` - Web framework for Node.js
- `dotenv` - Loads environment variables
- `axios` - Makes HTTP requests to OpenAI's API

## License

This project is licensed under the MIT License.

