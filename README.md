# E-Commerce Platform

This is a modern e-commerce platform built with Next.js, TypeScript, and TailwindCSS. The project is designed to provide a scalable, performant, and user-friendly shopping experience.

## Features

- **Responsive Design**: Fully responsive UI built with TailwindCSS.
- **Server-Side Rendering (SSR)**: Powered by Next.js for optimal performance and SEO.
- **Component-Based Architecture**: Modular and reusable components for maintainability.
- **State Management**: Context API and custom hooks for efficient state handling.
- **Type Safety**: Written in TypeScript for robust and maintainable code.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or later)
- pnpm (v7 or later)

## Getting Started

Follow these steps to set up and run the project locally:

1. **Install pnpm globally**:
   ```sh
   npm install -g pnpm
   ```

2. **Install dependencies**:
   ```sh
   pnpm install
   ```

3. **Build the project**:
   ```sh
   pnpm run build
   ```

4. **Start the development server**:
   ```sh
   pnpm run start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
.
├── app/                # Application routes and pages
├── components/         # Reusable UI components
├── context/            # Context API for state management
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and libraries
├── public/             # Static assets (images, fonts, etc.)
├── styles/             # Global and component-specific styles
├── types/              # TypeScript type definitions
├── .next/              # Next.js build output
├── package.json        # Project metadata and scripts
├── pnpm-lock.yaml      # Dependency lock file
├── tailwind.config.ts  # TailwindCSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Scripts

Here are the available scripts defined in `package.json`:

- `pnpm run dev`: Start the development server.
- `pnpm run build`: Build the project for production.
- `pnpm run start`: Start the production server.
- `pnpm run lint`: Run linting checks.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
