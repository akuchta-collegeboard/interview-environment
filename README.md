# interview-environment
A GitHub codespaces environment for interviewing.

# Getting Started w/ GitHub Codespaces(Recommended)
This repo is configured to start a Codespace that's a ready-to-use enviornment.

1. Fork this Repo
2. Open your fork in a GitHub Codespace (Click "Code" > "Codespaces" > "Create a codespace on main")
3. Dependencies should be automatically installed when environment builds
4. Port forwarding is already configured.
5. Run `npm run dev:all` to start the frontend and backend together.
6. Open the frontend at `https://<your workspace name>-5173.app.github.dev/`
    * Alternatively: You can find the URL in the "Ports" Tab of VS Code, labeled "frontend" ![Screenshot](./instructions-image.png)

# Getting Started Locally
This repo has been tested in Codespaces, but should work in a local Linux-based environment with Node v22.16.0.

# What's provided, required, optional
This is a ready-to-use, but minimal, starter to create an Express backend and React; both written in Typescript.

* You are **required** to use Typescript as implementation language.
* You are *strongly encouraged* to use React.
* You may use Express or something else if you choose for backend.

```
├── backend # Source code for an Express server
├── frontend # Source code for a React app
├── package.json # Dependencies for ^
├── README.md
├── tsconfig.json # Typescript config
└── vite.config.ts # Vite Config
└── ...
```
