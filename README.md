# SWIFT Agentic Commerce

SWIFT Agentic Commerce is an agentic e‑commerce platform designed to transform how people shop online. Instead of browsing through static catalogs, customers can describe their preferences in natural language, and the system’s AI agent intelligently recommends products that match their needs. The platform combines modern web technologies, secure payment integration, and a clean user experience to deliver a next‑generation shopping solution.


## Overview

The application provides a complete shopping journey:
- Customers interact with an AI agent to discover products.
- A modern, responsive interface supports browsing, cart management, and checkout.
- Payments are integrated with Interswitch’s Inline Checkout using test credentials.
- Transactions are verified server‑side before orders are confirmed.
- Administrators have access to a dashboard for managing products and customer interactions.


## Key Features

- **AI‑Driven Shopping**: Natural language product discovery through an intelligent agent.
- **Cart and Checkout**: Full cart functionality with secure payment flow.
- **Payment Integration**: Interswitch Inline Checkout in test mode, with server‑side transaction confirmation.
- **Authentication**: Supabase authentication for user login and account management.
- **Admin Dashboard**: Tools for administrators to manage products and monitor activity.
- **Responsive Design**: Optimized for both desktop and mobile devices.


## Technology Stack

**Frontend**: React, Vite, TypeScript
**UI Components**: ShadCN UI, TailwindCSS, Framer Motion
**State Management**: React Context (AuthContext, CartContext)
**Data Layer**: TanStack React Query
**Backend**: Vercel serverless functions (`/api`)
**Database and Authentication**: Supabase
**Payments**: Interswitch Inline Checkout (Test Mode)
**Deployment**: Vercel


## Payment Flow

1. The customer initiates payment via Inline Checkout.
2. The widget opens with test credentials:
   - Merchant Code: `MX21696`
   - Pay Item ID: `4177785`
   - Mode: `TEST`
3. After payment, the application calls the `/api/getTransaction` endpoint.
4. The cart is cleared only if:
   - The response code is `"00"`.
   - The amount returned matches the original transaction amount.


## Project Structure

src/
  components/
    ui/        # Reusable UI components (Badge, Popover, Button, etc.)
    Navbar.tsx
    Footer.tsx
    PaymentPopup.tsx
  contexts/
    AuthContext.tsx
    CartContext.tsx
  pages/
    Index.tsx
    About.tsx
    Blog.tsx
    Checkout.tsx
    AdminDashboard.tsx
  App.tsx
  main.tsx
public/
  logo.png     # Application logo
api/
  confirmTransaction.js  # Server-side transaction verification
  getTransaction.js      # Alternative verification endpoint
vercel.json    # Vercel build configuration
index.html     # Entry HTML, includes Interswitch script


## Setup and Installation

1. Clone the repository:
   git clone https://github.com/Zeenah-Yusuf/SWIFT-agentic.git
   cd SWIFT-agentic

2. Install dependencies:
   npm install

3. Configure environment variables in `.env`:
   
   VITE_SUPABASE_PROJECT_ID=your-project-id
   VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
   VITE_SUPABASE_URL=https://your-project.supabase.co

   VITE_INTERSWITCH_MERCHANT_CODE=MX21696
   VITE_INTERSWITCH_PAY_ITEM_ID=4177785

   INTERSWITCH_CLIENT_ID=your-client-id
   INTERSWITCH_SECRET=your-secret
  

4. Run locally:
   ```bash
   npm run dev
   ```

5. Deploy to Vercel:
   - Connect the repository to Vercel.
   - Ensure `vercel.json` is present.
   - Add environment variables in the Vercel dashboard.


## Branding

- **Logo**: A lightning bolt symbol representing speed and intelligence.
- **Meta Tags**: Configured in `index.html` for social sharing.
- **Lovable**: The project was scaffolded with **Lovable**, then customized and extended for production use.


## Built With

- Lovable (initial scaffolding)
- React + Vite + TypeScript
- Supabase
- Interswitch API
- Vercel


## License

This project is licensed under the MIT License.
```
