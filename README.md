# HUNO - Urban Streetwear E-Commerce 🛒🖤

![HUNO Preview](https://github.com/user-attachments/assets/311fb74e-4013-447b-8e32-2a5c953b672e) 

## 🚀 About the Project

**HUNO** is a modern, high-performance e-commerce web application built for an independent urban streetwear brand. It features a fully functional shopping cart, dynamic product variants (sizes), and a seamless checkout experience powered by real API integrations.

Developed with a focus on modern web architecture, clean UI/UX, and robust type safety.

## ✨ Key Features

- **Next.js App Router:** Utilizing Server Components for lightning-fast product fetching and SEO optimization.
- **Real Payment Integration:** Fully integrated with **Stripe Checkout** to handle real transactions, line items, and dynamic sizing variants.
- **Shopping Cart Management:** Persistent and interactive cart functionality.
- **Responsive Design:** Pixel-perfect mobile and desktop layouts using **Tailwind CSS**.
- **Interactive UI:** Dynamic newsletter subscription state, toast notifications, and smooth hover effects.
- **Type Safety:** Strictly typed with **TypeScript** for predictable state management and fewer runtime errors.
- **Shipping Integration:** Prepared structure for regional shipping calculations (inspired by Melhor Envio workflow).
- **Client/Server Separation:** Extracted interactive features (like the newsletter and sizing dropdowns) into isolated Client Components to keep the main landing page as a high-performance Server Component.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Payments:** [Stripe API](https://stripe.com/)
- **Deployment:** [Vercel](https://vercel.com/) (Recommended)

## ⚙️ Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or pnpm
- A Stripe account (for the API keys)

### Installation

1. **Clone the repository:**
```bash
    git clone https://github.com/Althalost/Huno-Ecommerce.git
    cd huno-ecommerce

2. **Install dependencies:**
```bash
    npm install

3. Set up Environment Variables:
Create a .env.local file in the root directory and add your Stripe keys:
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_public_key
    STRIPE_SECRET_KEY=sk_test_your_secret_key
    MELHOR_ENVIO_TOKEN="your_melhor_envio_token_here"
    CEP_ORIGEM="00000-000""

4. Run the development server:
```bash
    npm run dev


## 👨‍💻 Author

**PabloDev**
- **GitHub:** [@Althalost](https://github.com/Althalost)
- **LinkedIn:** [Pablo](www.linkedin.com/in/pablo-elias-lópez-marcano-114345208)

Concept, Design & Code by PabloDev. Built for portfolio purposes.