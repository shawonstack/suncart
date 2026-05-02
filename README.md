# SunCart – Summer Essentials Store

A modern summer eCommerce platform where users can explore and purchase seasonal
products like sunglasses, cooling towels, insulated bottles, caps, fans, and
more.

## Purpose

SunCart is a summer-themed eCommerce web application where users can browse
summer essential products, view detailed product information (protected route),
and manage their profile after authentication.

## Key Features

- Hero Section with summer sale banner
- Popular Products section (3 products on homepage)
- All Products page with 6 summer items
- Protected Product Details page (login required)
- Email/Password and Google OAuth authentication
- My Profile page with user info
- Update Profile (name and photo)
- Summer Care Tips section
- Top Brands section
- Fully responsive on mobile, tablet, desktop
- Animations with Animate.css

## Tech Stack

- **Next.js 15** (TypeScript) — App Router
- **Tailwind CSS v4** — Styling
- **DaisyUI v5** — UI Components
- **BetterAuth** — Authentication
- **MongoDB Atlas** — Database

## NPM Packages Used

| Package           | Purpose                               |
| ----------------- | ------------------------------------- |
| `better-auth`     | Authentication (email + Google OAuth) |
| `mongodb`         | Database connection                   |
| `daisyui`         | UI component library                  |
| `animate.css`     | CSS animations                        |
| `react-hot-toast` | Toast notifications                   |

## Environment Variables

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
NEXT_PUBLIC_APP_URL=
```

## Developer
