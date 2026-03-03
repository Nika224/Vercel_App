QA Test — User Registration & Authentication
Functional and automated testing of the user registration process for the [Vercel App](https://qa-test-web-app.vercel.app/index.html).

## Project Structure

```
Vercel_app/
  /docs
    TEST_PLAN.md          # Test plan, scope, objectives and acceptance criteria
    TEST_CASES.md         # Manual test cases with results
    BUG_REPORT.md         # Bug report with severity and reproduction steps
    AUTOMATION_REPORT.md  # Automation execution report
  /pages
    LoginPage.ts          # Page Object for Login page
    RegistrationPage.ts   # Page Object for Create Account page
    ResetPasswordPage.ts  # Page Object for Reset Password page
    DashboardPage.ts      # Page Object for Dashboard page
  /tests
    registration.spec.ts  # Playwright test suite
  playwright.config.ts
  package.json
  README.md
```
_________________

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (included with Node.js)

---

## Installation

**1. Clone the repository:**
```bash
git clone https://github.com/Nika224/Vercel_App.git
cd Vercel_App
```

**2. Install dependencies:**
```bash
npm install
```

**3. Install Playwright browsers:**
```bash
npx playwright install
```

________________

## Running the Tests

**Run all tests across all browsers (Chromium, Firefox, WebKit):**
```bash
npx playwright test
```

**Run tests in a specific browser only:**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run tests in headed mode (browser window visible):**
```bash
npx playwright test --headed
```

**Run a specific test file:**
```bash
npx playwright test tests/registration.spec.ts
```

______________

## Viewing the HTML Report

After running the tests, open the HTML report:
```bash
npx playwright show-report
```

This opens an interactive report in your browser with detailed results, screenshots on failure, and test timelines.

______________

## Test Results

| Browser | Total | Passed | Failed |
|---|---|---|---|
| Chromium | 18 | 16 | 2 |
| Firefox | 18 | 16 | 2 |
| WebKit | 18 | 16 | 2 |
| **Total** | **54** | **48** | **6** |

**Note:** 6 failing tests are expected — they correspond to known bugs (BUG-006 and BUG-012) identified during manual testing. See `docs/AUTOMATION_REPORT.md` for details.

---

## Documentation

All test documentation is located in the `/docs` folder:

- **TEST_PLAN.md** — scope, objectives, test approach and acceptance criteria
- **TEST_CASES.md** — 39 manual test cases covering Login, Create Account, Reset Password, Dashboard and End-to-End flows
- **BUG_REPORT.md** — 17 bugs identified with severity, reproduction steps and status
- **AUTOMATION_REPORT.md** — automation execution results, pass/fail breakdown and notes on non-automated tests
