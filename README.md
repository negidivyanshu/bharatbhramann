# Bharat Bhramann

A modern travel agency website built with Next.js that helps users explore destinations, browse travel plans, customize trips, and complete bookings online.

## Overview

Bharat Bhramann is designed for a travel brand that wants a polished digital presence with booking-driven user journeys. The platform includes destination discovery, travel package browsing, custom itinerary requests, email verification, user authentication, and secure online payments.

## Key Features

- Travel landing page and destination discovery experience
- Tour and plan listings with package cards
- Custom trip request and booking workflow
- User registration and login flows
- Google OAuth and credentials-based authentication via NextAuth
- Email verification during sign-up and account activation
- Razorpay payment integration for checkout
- User dashboard/profile management
- Contact and inquiry forms
- Blog section for destination and travel content

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- MongoDB with Mongoose
- NextAuth v5
- Zod validation
- Nodemailer for email delivery
- Razorpay for payment processing
- React Icons and related UI utilities

## Project Structure

```bash
travel-agency/
├── public/                 # Static assets
├── src/
│   ├── app/                # App Router pages and API routes
│   ├── components/         # Reusable UI components
│   ├── lib/                # Database, email, validation utilities
│   ├── models/             # MongoDB models
│   ├── auth.js             # NextAuth configuration
│   ├── auth.config.js      # Auth config helpers
│   └── middleware.js       # Route middleware
├── .env.example            # Environment variable template
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
└── README.md
```

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js 18 or later
- npm or yarn
- MongoDB instance or MongoDB Atlas connection
- Razorpay account for payment keys
- Google Cloud project for OAuth credentials
- SMTP email provider credentials for verification emails

## Installation

1. Clone the repository:

```bash
git clone https://github.com/negidivyanshu/bharatbhramann.git
cd bharatbhramann/travel-agency
```

2. Install dependencies:

```bash
npm install
```

3. Create a local environment file:

```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your credentials.

## Environment Variables

Create a `.env.local` file with the following values:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>
AUTH_URL=http://localhost:3000
AUTH_SECRET=your_auth_secret
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

> Note: If your hosting platform uses one of the auth secret variables, set the one required by your deployment setup.

## Running the Project

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev     # Start the Next.js development server
npm run build   # Create a production build
npm run start   # Run the production build
npm run lint    # Run ESLint checks
```

## Deployment

This application is ready to be deployed on platforms such as:

- Vercel
- Railway
- Render
- DigitalOcean App Platform

When deploying, make sure all environment variables are configured in your hosting environment and the database connection string is set correctly.

## License

This project is for commercial and educational use as defined by the project owner.

## Contact

For support, collaboration, or business inquiries, contact the project maintainers through the official website or the configured contact channels.
