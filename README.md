# HarryVerse Landing Page

Follow theses steps bellow to install and develop in HarryVerse repository. 
This project has currently been published in https://alanmatoso-lp-harrypotter.vercel.app/

## Configuration

### Step 1 - Basic setup

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Step 2 - Cloning the Github IO repository

[Clone](https://github.com/alanmatoso/alanmatoso.lp.harrypotter.git) this repository to your local files to be able to effectively start working on it.

Then, access the repository's directory using your terminal.

### Step 3 - Update your documents

- Inside the project that was cloned on your machine, run the command below to update it properly and start working on it.
- Command to update your project:
  - command: `git pull origin develop`
- If you point out any errors, it will be necessary to be performing the merge corrections.

### Step 4 - Create branch

- Create the branch for the task you are going to perform.
- Branch name always in lowercase and with gitflow prefixes (feature, release, storyfix, etc.)
- When creating a new branch always pull updates from develop before starting it.
- Command for if the branch does not exist:
  - command: `git checkout -b (prefixes/task-number)`
  - ex: `git checkout -b feature/task-000`
- Command for if the branch already exists:
  - command: `git checkout (prefixes/task-number)`
  - ex: `git checkout feature/task-000`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
