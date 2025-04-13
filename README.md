# Ledger Flow Finance

A modern financial management application built with React and TypeScript that helps users track transactions, manage accounts, and visualize financial data.

## Project info

**URL**: https://lovable.dev/projects/ba469c79-d28a-492f-b86c-cfa23f44804a

## Project Overview

Ledger Flow Finance is a comprehensive financial management application designed to help users track their finances, manage accounts, and get insights into their spending habits. The application features a clean, intuitive interface built with shadcn-ui components and styled with Tailwind CSS.

### Key Features

- **Dashboard Overview**: Visual summaries of financial status and recent activity
- **Transaction Management**: Record, categorize, and track all financial transactions
- **Account Summaries**: Monitor balances and activity across multiple accounts
- **Budget Planning**: Set and track financial goals and spending limits
- **Financial Reports**: Generate insights with data visualization
- **User Profiles**: Personalized experience with custom settings
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Project Structure

```
ledger-flow-finance/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── AccountSummary.tsx
│   │   ├── DashboardOverview.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProfileContent.tsx
│   │   ├── RecentActivity.tsx
│   │   ├── SettingsContent.tsx
│   │   ├── TransactionForm.tsx
│   │   ├── TransactionTable.tsx
│   │   └── ui/             # shadcn UI components
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                # Utility functions and helpers
│   │   └── utils.ts
│   ├── pages/              # Application pages/routes
│   │   ├── Budget.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── Profile.tsx
│   │   ├── Reports.tsx
│   │   ├── Settings.tsx
│   │   └── Transactions.tsx
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
└── ...config files         # Various configuration files
```

## Technology Stack

This project leverages modern web technologies:

- **React 18**: UI library for building component-based interfaces
- **TypeScript**: Type-safe JavaScript for improved developer experience
- **Vite**: Next-generation frontend build tool for fast development and optimized builds
- **React Router**: Client-side routing for single-page application
- **shadcn/ui**: High-quality reusable UI components built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Recharts**: Composable charting library for data visualization
- **React Hook Form**: Performant form handling with validation
- **Zod**: TypeScript-first schema validation
- **React Query**: Data fetching and state management
- **Lucide React**: Beautiful, consistent icon set

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ba469c79-d28a-492f-b86c-cfa23f44804a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd ledger-flow-finance

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Development

### Prerequisites

- Node.js (v16 or newer)
- npm, yarn, or bun package manager

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ba469c79-d28a-492f-b86c-cfa23f44804a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
