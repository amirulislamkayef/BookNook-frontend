# 📚 BookNook — Community Library & Book Sharing Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-1.7.25-purple?style=for-the-badge)](https://www.better-auth.com/)

**BookNook** is a modern, community-driven digital library and book-sharing platform designed for passionate readers. Discover curated genres, borrow books from neighbors and fellow readers in seconds, manage personal reading shelves, and give pre-loved books a vibrant second life.

---

## 🌐 Live Site

- **Live Client URL:** [https://booknook-client.vercel.app](https://booknook-client.vercel.app)
> *(Replace with your production deployment URL if hosted on another domain)*

---

## ✨ Key Features

- **📖 Dynamic Book Catalog & Rich Discovery**: Explore an extensive catalog with real-time book availability, copy counts, authors, categories, and detailed synopsis pages.
- **🔄 Streamlined 3-Step Borrowing**: Borrow books instantly through an intuitive, accessible modal workflow—no paperwork or traditional library card needed.
- **📚 Community Shelf Contributions**: Easily list books from your personal home shelf to share with the community, complete with cover images, descriptions, category tagging, and stock quantities.
- **🗂️ Curated Genre Shelves**: Browse eight distinct literary categories—including Fiction, Non-Fiction, Science, History, Biography, Fantasy, Mystery, and Children’s books—with dedicated thematic styling.
- **📊 Personal Reader Management (`My Books` & `My Borrows`)**: Dedicated dashboards allowing readers to monitor currently borrowed books, return dates, and manage books they've shared with the library.
- **🔐 Secure Authentication via Better Auth**: High-performance authentication system backed by MongoDB Atlas, offering secure email/password sessions, user avatars, and protected routes.
- **🎨 Modern, Accessible & Responsive UI**: Built with Tailwind CSS v4, Base UI (`@base-ui/react`), Shadcn base-nova styling, Lucide React icons, and dynamic Swiper carousels optimized across mobile, tablet, and desktop viewports.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack & React Compiler |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & [Base UI](https://base-ui.com/) (Shadcn style base-nova) |
| **Icons & Media** | [Lucide React](https://lucide.dev/) & [Swiper](https://swiperjs.com/) |
| **Authentication** | [Better Auth](https://www.better-auth.com/) (`better-auth` & `@better-auth/mongo-adapter`) |
| **Database Driver** | [MongoDB Node Driver](https://www.mongodb.com/) |

---

## 🚀 Getting Started

Follow the steps below to set up and run the BookNook client locally.

### Prerequisites

- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`
- **MongoDB Atlas Database** or local MongoDB instance

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/booknook-client.git
   cd booknook-client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` or `.env.local` file in the project root:
   ```env
   # Authentication Configuration
   BETTER_AUTH_SECRET=your_super_secret_key_here
   BETTER_AUTH_URL=http://localhost:3000
   NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

   # Database Connection
   MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority

   # External Books API
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **Open in Browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Compiles and builds the production application |
| `npm run start` | Starts the production Next.js server |
| `npm run lint` | Runs ESLint to check code quality |

---

## 📁 Project Architecture

```
booknook-client/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout (Navbar, Footer, Toaster)
│   │   ├── page.tsx                  # Home page (Banner, Categories, New Arrivals, Spotlight)
│   │   ├── all-books/
│   │   │   ├── page.tsx              # All Books listing view
│   │   │   └── [id]/page.tsx         # Book details view + Borrow dialog
│   │   ├── add-book/page.tsx         # Add new book submission page
│   │   ├── my-books/page.tsx         # User's added books dashboard
│   │   ├── my-borrows/page.tsx       # User's active borrowing dashboard
│   │   ├── login/page.tsx            # Login with email/password
│   │   ├── signup/page.tsx           # Account registration
│   │   └── api/auth/[...all]/route.ts# Better Auth Next.js API route handler
│   ├── components/
│   │   ├── Banner.tsx                # Client-isolated dynamic carousel wrapper
│   │   ├── BannerSlider.tsx          # Swiper-powered hero slides
│   │   ├── BorrowBookDialog.tsx      # Modal dialog for borrowing a book
│   │   ├── CategorySection.tsx       # Curated 8-genre category grid
│   │   ├── CommunitySpotlight.tsx    # Reader testimonials, stats, & CTA
│   │   ├── Footer.tsx                # Footer with social & contact links
│   │   ├── HowBorrowingWorks.tsx     # 3-step borrowing visual guide
│   │   ├── Navbar.tsx                # Responsive navigation with session avatar
│   │   ├── NewArrival.tsx            # New arrivals book showcase
│   │   └── ui/                       # Accessible Base UI / Shadcn components
│   ├── lib/
│   │   ├── auth.ts                   # Better Auth server configuration with MongoDB
│   │   ├── auth-client.ts            # Client-side authentication hooks
│   │   └── utils.ts                  # Utility helper for Tailwind class merging (`cn`)
│   └── types/                        # TypeScript type definitions
├── next.config.ts                    # Next.js configuration
├── components.json                   # Shadcn Base UI CLI configuration
└── package.json                      # Project dependencies and scripts
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/booknook-client/issues).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
