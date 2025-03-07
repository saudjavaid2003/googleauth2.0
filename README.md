This project uses Google OAuth 2.0 for user authentication. Follow the steps below to get your credentials and set up the project.

Steps to Get Google API Credentials
Go to the Google Cloud Console.

Create a new project.

Navigate to APIs & Services > Credentials.

Click Create Credentials > OAuth 2.0 Client ID.

Set the application type to Web Application.

In the Authorized redirect URIs, add:

bash
Copy
Edit
http://localhost:3000/auth/google/callback
Save and note your Client ID and Client Secret.

Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone <repository_url>
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory and add the following:

ini
Copy
Edit
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
EXPRESS_SECRET=<your_express_secret>
MONGO_URL=<your_mongo_connection_url>
Run the project:

bash
Copy
Edit
npm start
Go to http://localhost:3000/ in your browser.

Testing Google Authentication
Visit /auth/google to start the Google authentication flow.

This is a basic guide for setting up and using Google OAuth in your project. Make sure to replace the placeholders in the .env file with your actual credentials.







