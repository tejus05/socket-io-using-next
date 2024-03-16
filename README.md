# Next.js Chatroom App with Socket.IO

This project is a basic chatroom web application built using Next.js 14 (with App Router) for the frontend and Express.js for the backend. It utilizes Socket.IO for real-time communication between clients and the server. Due to the limitations of Next.js serverless functions, a separate Express.js backend is used to handle WebSocket connections.

## Features

- Real-time chat functionality powered by Socket.IO
- Simple and intuitive user interface
- Scalable architecture separating frontend and backend concerns
- Easy setup and deployment

## Prerequisites

Before running this project locally or deploying it, make sure you have the following installed:

- Node.js
- npm

## Getting Started

Follow these steps to set up the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/tejus05/socket-io-using-next.git
   ```

2. Navigate into the project directory:

   ```bash
   cd socket-io-using-next
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the backend server by following the instructions in the [backend repository](https://github.com/tejus05/backend-for-socket-io-using-next).

5. Start the frontend Next.js app:

   ```bash
   npm run dev
   ```

6. Visit `http://localhost:3000` in your web browser to access the chatroom.
