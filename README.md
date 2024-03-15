# React TypeScript Boilerplate

A starter boilerplate for web app front-end using React and TypeScript.

## What is inside?

This project uses lot of stuff, such as:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Docz](https://www.docz.site/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

#### Clone repo:

```bash
git clone --depth 1 --branch master git@github.com:s8srahme/react-typescript-boilerplate.git [YOUR_PROJECT_NAME]
```

#### Install dependencies:

```bash
cd [YOUR_PROJECT_NAME]
nvm use
npm install
```

#### Start development server:

```bash
npm run dev
```

Now you're ready to rumble!

## Scripts

| Description                                                                     | Command                  |
| :------------------------------------------------------------------------------ | :----------------------- |
| Start development server                                                        | `dev`                    |
| Serve production build                                                          | `start`                  |
| Create production build                                                         | `build`                  |
| Allow customizing `Create React App` configuration and scripts                  | `eject`                  |
| Launch test runner                                                              | `test`                   |
| Launch test runner in interactive watch mode                                    | `test:watch`             |
| Generate code coverage report                                                   | `test:coverage`          |
| Open code coverage report                                                       | `test:open-coverage`     |
| Analyze code to find problems                                                   | `lint:check`             |
| Fix JS & TS code problems automatically                                         | `lint:fix`               |
| Check if JS & TS code conforms to a consistent style                            | `prettier:check`         |
| Format files to conform to a consistent style                                   | `prettier:format`        |
| Fix CSS syntax errors                                                           | `stylelint:fix`          |
| Check CSS syntax errors                                                         | `stylelint:check-css`    |
| Check if Stylelint configuration contains any rules that conflict with Prettier | `stylelint:check-config` |
| Start Docz development server                                                   | `docz:dev`               |
| Create Docz build                                                               | `docz:build`             |
| Serve Docz build                                                                | `docz:serve`             |

## Git Branch Naming Convention

I separate branches into two categories:

### **Code Flow Branches:**

| Branch Name | Description                                                                                                                                                                                                                                  |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev`       | All new features and bug fixes should be brought to the `Development` branch. Resolving developer code conflicts should be done as early as here.                                                                                            |
| `staging`   | `Staging` contains tested features that the stakeholders wanted to be available either for a demo or a proposal before elevating into the production. Decisions are made here if a feature should be finally brought to the production code. |
| `master`    | `Production` branch is the default branch being presented.                                                                                                                                                                                   |

**_Note:_** _These branches are expected to be permanently available on the repository and we want our code to follow a one-way merge starting from `development -> staging -> production`._

### **Temporary Branches:**

| Branch Name (examples)                                                                    | Description                                                                                                                                                                                                                                                                                                                                 |
| :---------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `feature/integrate-swagger`<br /><br />`feature/JIRA-1234_support-dark-theme`             | Any code change for a new module or use case should be done on a `Feature` branch. This branch is created based on the current `Development` branch. When all changes are done, a pull request is needed to put all of these to the `Development` branch.                                                                                   |
| `bugfix/more-gray-shades`<br /><br />`bugfix/JIRA-1444_gray-on-blur-fix`                  | If the code changes made from `Feature` branch were rejected after a release, any necessary fixes after that should be done on the `Bugfix` branch.                                                                                                                                                                                         |
| `hotfix/disable-endpoint-zero-day-exploit`<br /><br />`hotfix/increase-scaling-threshold` | If there is a need to fix a blocker, do a temporary patch, apply a critical framework or configuration change that should be handled immediately, it should be created as a `Hotfix`. It does not follow the scheduled integration of code and could be merged directly to the `Production` branch, then on the `Development` branch later. |
| `experimental/dark-theme-support`                                                         | `Experimental` is a branch for playing around. It is for any new feature or idea that is not part of a release or a sprint.                                                                                                                                                                                                                 |
| `release/myapp-1.01.123`                                                                  | `Release` is a branch for tagging a specific release version. `Git` also supports tagging a specific commit history of the repository. A `Release` branch is used if there is a need to make the code available for checkout or use.                                                                                                        |

**_Note:_** _These are disposable branches that can be created and deleted by need of the developer. It is recommended to use all lower caps letters and hyphen (-) to separate words in branch names whereas underscore (\_) could be used to separate ID and description._

## Customize PWA

#### Change your application name and description:

1. Fire up `public/index.html`
2. Replace `<title>React App</title>` with a more imaginative name
3. Replace `content` in `meta` tag for `description`
4. Open up `public/manifest.json` to replace `short_name` and `name`

#### Replace your application icons:

1. You need a `PNG` image which should ideally be square and easily visible when tiny. Head over to [Favicon Generator](https://realfavicongenerator.net/) and upload your image by pressing `Select your Favicon image` button. Once you do, `Favicon Generator` will load up a preview for how your favicon will look on your website and application across different native devices. It even gives you options to change how it looks, e.g. adding a background. Feel free to update these settings to your liking.
2. Once you are ready, head down to the bottom of the page and click `Generate your Favicons and HTML code`. Download and drag all of your news icons into project `public/favicons` directory to replace the existing icons. Be sure to sync the generated code snippet in `<head>` of `public/index.html` and to conform to JSX standards, i.e. adding a closing tag to all of the lines or self-closing each one.
3. Update icon references in `public/manifest.json`.

## Deploy

WIP

## License

This project is licensed under the MIT license, Copyright (c) 2023 Sabbir Ahmed. For more information see `LICENSE.md`.
