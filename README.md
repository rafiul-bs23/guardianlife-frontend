# Guardian Life Frontend

A modern, high-performance web application designed for **Guardian Life Limited**. Built with a focus on modularity, scalability, and visual excellence using **React**, **TypeScript**, and **Vite**.

---

## 🏛️ Architecture & Philosophy

This project follows a **Feature-Driven Architecture**, emphasizing low coupling and high cohesion. Each feature is self-contained, allowing for rapid development and easy maintenance.

### Key Principles:
- **Zero Circular Dependencies**: Features are isolated to prevent complex dependency graphs.
- **Atomic Components**: Shared UI elements are kept in `src/shared` for project-wide consistency.
- **Mock-First Development**: Built-in support for mock APIs to accelerate frontend development independently of backend progress.

---

## 🚀 Technical Stack

- **Framework:** [React 18](https://reactjs.org/) (Functional Components, Hooks)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Build System:** [Vite](https://vitejs.dev/) (Fast Refreshes, Optimized Bundling)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API Handling:** [Axios](https://axios-http.com/)
- **Routing:** [React Router 6](https://reactrouter.com/)

---

## 📁 Detailed Project Structure

```text
src/
├── app/                # Global providers, routing setup, and entry points
├── features/           # Modular business logic (The core of the app)
│   ├── about/          # Company information and history
│   ├── product-details/# Comprehensive product viewing logic
│   ├── claim/          # Insurance claim processing
│   └── ...            # 25+ other specialized modules
├── shared/             # Globally shared components (Buttons, Inputs, Modals)
├── hooks/              # Reusable custom hooks (e.g., useMediaQuery)
├── lib/                # Configuration for 3rd party libraries
├── styles/             # Global CSS and Tailwind directives
├── utils/              # Pure helper functions (formatters, validators)
└── main.tsx            # Application entry point
```

---

## ⚙️ Environment Configuration

The application requires specific environment variables to function correctly. Create a `.env.local` file in the root directory.

### Configuration Template:
```env
# The base URL for the backend API
VITE_API_URL=https://webapi-staging.guardianlife.com.bd/api/v1

# Toggle for Mock API usage (Boolean string)
VITE_USE_MOCK_API=true
```

> [!IMPORTANT]
> **To enable local development with mock data, you MUST set `VITE_USE_MOCK_API=true` in your environment variables.**

---

## 🛠️ Development Lifecycle

### 1. Installation
Clone the repository and install the dependencies:
```bash
git clone <repository-url>
cd guardianlife-frontend
npm install
```

### 2. Local Development
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
- **Port:** `3000` (Default)
- **Local URL:** `http://localhost:3000`

### 3. Production Build
Optimize the application for production deployment:
```bash
npm run build
```
- This runs TypeScript checks (`tsc`) followed by the Vite build process.
- Output is generated in the `dist/` directory.

### 4. Quality Assurance (Linting)
Ensure code consistency and identify potential errors:
```bash
npm run lint
```

### 5. Preview Deployment
Verify the local production build before actual deployment:
```bash
npm run preview
```

---

## 📦 Deployment

This project is configured for seamless deployment on **Vercel**.
- Configuration is handled via `vercel.json`.
- Automatic deployments are triggered on merges to the main branch.

---

## 📋 Feature Overview

The application is composed of several high-impact modules, including but not limited to:
- **Insurance Solutions:** Bancassurance, Group Insurance, Micro Insurance.
- **Corporate:** Board of Directors, Chairman's Profile, Management Committee (ManCom).
- **Service Center:** Branch Locator, Preferred Hospitals, FAQ, Form Library.
- **Customer Portal:** Quick Buy, Tax Rebate Calculators, Payment Gateways.

---

## 📄 License & Proprietary Info

© 2026 Guardian Life Limited. This software is proprietary and confidential. Unauthorized copying, modification, or distribution is strictly prohibited.
