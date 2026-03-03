# Automation Execution Report — User Registration & Authentication
**Application:** [QA Test Web App](https://qa-test-web-app.vercel.app/index.html)  
**Author:** Nika Unkovic  
**Date:** 2-3-2026  
**Execution Time:** 1.6 minutes  

---

## 1. Test Environment

| Item | Details |
|---|---|
| Automation Tool | Playwright |
| Language | TypeScript |
| Pattern | Page Object Model (POM) |
| Browsers | Chromium, Firefox, WebKit |
| OS | Windows 11 |
| Node.js | v20.19.5 |
| Playwright | 1.58.2 |

---

## 2. Project Structure

```
Vercel_app/
  /docs
    TEST_PLAN.md
    TEST_CASES.md
    BUG_REPORT.md
    AUTOMATION_REPORT.md
  /pages
    LoginPage.ts
    RegistrationPage.ts
    ResetPasswordPage.ts
    DashboardPage.ts
  /tests
    registration.spec.ts
  playwright.config.ts
  package.json
  README.md
```

---

## 3. Execution Summary

| Browser | Total | Passed | Failed |
|---|---|---|---|
| Chromium | 18 | 16 | 2 |
| Firefox | 18 | 16 | 2 |
| WebKit | 18 | 16 | 2 |
| **Total** | **54** | **48** | **6** |

**Pass Rate:** 88.9%  
**Total Execution Time:** 1.6 minutes  

---

## 4. Failed Tests

All failures are **expected** — they correspond to known bugs identified during manual testing. Tests are written using Approach 1: assertions reflect correct expected behaviour, and tests fail because the application does not meet that expectation. When the bugs are fixed, these tests will automatically pass without any code changes.

| Test | Browser | Failure Reason | Bug Ref |
|---|---|---|---|
| TC-014 — Password and Confirm Password mismatch | Chromium | "Passwords do not match" error message not displayed; account created despite mismatch | BUG-006 |
| TC-014 — Password and Confirm Password mismatch | Firefox | "Passwords do not match" error message not displayed; account created despite mismatch | BUG-006 |
| TC-014 — Password and Confirm Password mismatch | WebKit | "Passwords do not match" error message not displayed; account created despite mismatch | BUG-006 |
| TC-023 — Password reset with unregistered email | Chromium | "No account found" error not displayed; success popup shown for unregistered email | BUG-012 |
| TC-023 — Password reset with unregistered email | Firefox | "No account found" error not displayed; success popup shown for unregistered email | BUG-012 |
| TC-023 — Password reset with unregistered email | WebKit | "No account found" error not displayed; success popup shown for unregistered email | BUG-012 |

---

## 5. Automated vs Non-Automated Test Cases

### Automated (15 unique test cases, 54 executions across 3 browsers)

| TC | Description | Result |
|---|---|---|
| TC-001 | Successful login with valid credentials | PASS |
| TC-002 | Login with incorrect password | PASS |
| TC-003 | Login with unregistered email | PASS |
| TC-004 | Login with empty fields | PASS |
| TC-006 | Login with invalid email format | PASS |
| TC-008 | Navigate to Create Account page | PASS |
| TC-009 | Navigate to Forgot Password page | PASS |
| TC-010 | Successful registration with all valid data | PASS |
| TC-012 | Registration without accepting Terms and Conditions | PASS |
| TC-014 | Password and Confirm Password mismatch | FAIL (BUG-006) |
| TC-017 | Registration with duplicate email | PASS |
| TC-020 | Navigate back to Login from Create Account page | PASS |
| TC-022 | Password reset with registered email | PASS |
| TC-023 | Password reset with unregistered email | FAIL (BUG-012) |
| TC-025 | Navigate back to Login from Reset Password page | PASS |
| TC-027 | Dashboard displays correct user information after login | PASS |
| TC-028 | Logout functionality | PASS |
| TC-039 | Full registration and login flow (End-to-End) | PASS |

### Not Automated — Reasons

| TC | Description | Reason Not Automated |
|---|---|---|
| TC-007 | Remember Me checkbox functionality | Requires browser session persistence verification across page reloads — complex to automate reliably |
| TC-011 | Registration with empty required fields | Visual indication (asterisk) cannot be verified through functional automation |
| TC-013 | Terms and Conditions link is clickable | Requires verification of new tab or modal — not prioritised |
| TC-015 | Registration with invalid email format | Overlaps with TC-006; same validation logic |
| TC-016 | Phone number field accepts unlimited length | Boundary test — lower priority for automation |
| TC-018 | Security question not set during registration | Requires cross-page state verification — complex setup |
| TC-019 | Subscribe to newsletter checkbox | BLOCKED — cannot verify without email inbox access |
| TC-021 | Password strength requirements | No defined password rules in the application |
| TC-024 | Security Question/Answer label consistency | UI/visual check — more suitable for manual testing |
| TC-026 | Navigate to Create Account from Reset Password | Lower priority navigation test |
| TC-029 | Recent Activity timestamps are dynamic | Requires time-based verification — complex to automate reliably |
| TC-030 | Download Report button downloads a file | Requires file system verification |
| TC-031 | XSS/SQL injection in name fields | Security test — requires manual verification of rendered output |
| TC-032 | Special characters in password field | Covered by TC-021 (no password rules enforced) |
| TC-033 | Password minimum and maximum length | Covered by TC-021 (no password rules enforced) |
| TC-034 | Email with leading or trailing spaces | Edge case — lower priority |
| TC-035 | Phone number with non-numeric characters | Boundary test — lower priority for automation |
| TC-036 | Password field masks input on Create Account | Visual check — suitable for manual testing |
| TC-037 | Password field masks input on Login | Visual check — suitable for manual testing |
| TC-038 | Form submission on pressing Enter key | Lower priority UX test |

---

## 6. Notes

- 'test.beforeAll' is used to register the 'validUser' account once before all tests that require login. On subsequent test runs, registration may show a "User already exists" message — this is expected and does not affect login tests.
- Each registration test that requires a unique email uses 'Date.now()' to generate a unique email address per run.
- Tests are run across 3 browsers (Chromium, WebKit,Firefox) as configured in 'playwright.config.ts' — no additional configuration is required to run cross-browser.
- The Advertisement block (BUG-018) observed during manual testing did not appear during automated test runs, suggesting it may appear non-deterministically.
