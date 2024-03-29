This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Project Folder Structure
```
.
├── public/
│ ├── app/
│ │ ├── auth/
│ │ │ └── routes/
│ │ │ ├── sign-in/
│ │ │ │ └── [[...sign-in]].jsx
│ │ │ └── sign-up/
│ │ │ └── [[...sign-up]].jsx
│ │ └── dashboard/
│ │ └── routes/
│ │ └── file-preview/
│ │ └── [fileId].jsx
│ └── files/
│ ├── upgrade/
│ └── upload/
├── _components/
│ ├── Alert.js
│ ├── SideNav.js
│ ├── TopHeader.js
│ └── layout.js
├── routes/
│ ├── about-us/
│ │ └── _components/
│ │ └── Dropdown.js
│ ├── contact-us/
│ │ └── _components/
│ │ ├── Footer.js
│ │ ├── Header.js
│ │ ├── Hero.js
│ │ └── mail-template.js
│ └── f/
│ └── [fileId].js
├── favicon.ico
├── globals.css
├── layout.js
├── page.js
├── public/
│ └── favicon.ico
├── .eslintrc.json
├── .gitignore
├── README.md
├── firebaseConfig.js
├── jsconfig.json
├── middleware.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json


```

## Folder Descriptions

- **public/app/**: Contains authentication-related routes for signing in, signing up, and dashboard components.
- **public/files/**: Holds routes for file-related actions such as upgrading and uploading.
- **_components/**: Reusable components like Alert, SideNav, TopHeader, and layout.
- **routes/**: Contains routes for about us, contact us, and file-related actions.
- **public/**: Holds favicon.ico.
- **.eslintrc.json**: ESLint configuration file.
- **.gitignore**: Specifies intentionally untracked files to ignore.
- **README.md**: Markdown file containing project information.
- **firebaseConfig.js**: Firebase configuration file.
- **jsconfig.json**: JavaScript configuration file.
- **middleware.js**: Middleware for API routes.
- **next.config.mjs**: Next.js configuration file.
- **package-lock.json**: Automatically generated for any operations where npm modifies either the node_modules tree or package.json.
- **package.json**: Metadata file for the project.
- **postcss.config.js**: PostCSS configuration file.
- **tailwind.config.js**: Tailwind CSS configuration file.
- **tsconfig.json**: TypeScript configuration file.

Feel free to customize this structure according to your project's needs.




