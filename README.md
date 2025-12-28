# Playwright Page Object Model (POM) Automation Framework

This repository contains a professional-grade automated testing framework for [SauceDemo](https://www.saucedemo.com/) built with **Playwright**, **TypeScript**, and **Dotenv**. 

---

## 🚀 Key Features

- **Page Object Model (POM):** Decouples test logic from UI selectors for easier maintenance.
- **BasePage Architecture:** Uses class inheritance to share common utilities and centralized logging.
- **Environment Management:** Supports multi-environment configurations using `.env` files.
- **Custom Fixtures:** Simplifies test setup by injecting Page Objects directly into tests.
- **Logging:** Integrated timestamped logs for better execution visibility.
- **CI/CD Integrated:** Ready for GitHub Actions with automated reporting and secret masking.

---

## 🛠️ Project Structure



```text
├── .github/workflows/   # CI/CD pipeline (GitHub Actions)
├── lib/                 # Framework utilities and fixtures
│   ├── fixtures.ts      # Custom Playwright fixtures
│   └── Logger.ts        # Custom logging utility
├── pages/               # Page Object Models
│   ├── BasePage.ts      # Parent class (Shared methods/Constructor)
│   ├── LoginPage.ts     # Login specific actions & locators
│   └── HomePage.ts      # Homepage specific actions & locators
├── tests/               # Test suites
│   ├── login.spec.ts
│   └── homepage.spec.ts
├── .env                 # Environment secrets (Git-ignored)
├── .env.example         # Template for environment variables
├── playwright.config.ts # Playwright global settings
└── package.json         # Project dependencies and scripts
```


# 🏁 Getting Started
# Prerequisites
Node.js: v18 or higher

npm: v9 or higher


# Install project dependencies
`npm install`

# Install Playwright browser binaries
`npx playwright install --with-deps`


## 🧪 Running Tests

| Command | Description |
| :--- | :--- |
| `npx playwright test` | Run all tests in headless mode |
| `npx playwright test --headed` | Run tests with the browser visible |
| `npx playwright test --ui` | Open Playwright's Interactive UI mode |
| `ENV=staging npx playwright test` | Run tests using a specific env file (.env.staging) |
| `npx playwright show-report` | Open the last generated HTML report |

---

## 🏗️ Core Concepts

### BasePage Inheritance
Every page object extends the `BasePage`. This ensures every page has access to the standard Playwright `page` object, a centralized `Logger`, and shared utility methods.



### Custom Fixtures
We use Playwright Fixtures to instantiate pages. You don't need to write `const loginPage = new LoginPage(page)` in every test. Instead, simply pass them as arguments:

```typescript
test('example test', async ({ loginPage, homePage }) => {
  await loginPage.navigate();
  await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
  const count = await homePage.getInventoryCount();
  expect(count).toBe(6);
});

