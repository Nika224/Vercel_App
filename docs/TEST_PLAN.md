# Test Plan — User Registration
**Application:** [QA Test Web App](https://qa-test-web-app.vercel.app/index.html)  
**Version:** 1.0  
**Author:** [Nika Unkovic]  
**Date:** [28-2-2026]  

---

## 1. Introduction

This test plan covers functional testing of the user registration process for the QA Test Web App. It defines the scope, approach, resources, and schedule for testing activities.

---

## 2. Scope

### In Scope
- User registration form functionality
- Input field validation (email, password, username, etc.)
- Error messages and user feedback
- Successful registration flow
- Authentication after registration (login functionality)
- Duplicate account handling
- UI/UX of the registration and login pages
- Navigation elements (links, redirects)
- Cross-browser compatibility
- Responsive design (mobile/desktop)

### Out of Scope
- Backend/API internals
- Database layer
- Password reset flow
- Third-party integrations

---

## 3. Test Objectives

- Verify that the registration form accepts valid inputs and creates an account successfully
- Verify that appropriate validation messages are shown for invalid inputs
- Verify that duplicate registrations are handled correctly
- Verify that the UI behaves consistently across browsers and screen sizes
- Identify and document any defects found during testing

---

## 4. Acceptance Criteria

- A user can successfully register with valid credentials
- All mandatory fields must be filled before form submission is allowed
- Invalid email format is rejected with a clear error message
- Weak or invalid passwords are rejected with a clear error message
- Registering with an already existing email shows an appropriate error
- After successful registration, the user is redirected or shown a confirmation
- All error messages are descriptive and user-friendly
- The form is accessible and usable on mobile devices

---

## 5. Test Approach

### Manual Testing
Functional test cases will be executed manually to verify the registration flow, edge cases, and UI behaviour. Results will be documented in the Test Cases document.

### Automated Testing
Selected test cases will be automated using **Playwright** with **TypeScript**. Tests are structured following the **Page Object Model (POM)** pattern. Automated tests will be executed and results attached as an Automation Execution Report.

---

## 6. Test Types

| Test Type | Description |
|---|---|
| Functional Testing | Verify registration works as expected |
| Negative Testing | Verify invalid inputs are handled correctly |
| Boundary Testing | Test min/max input lengths |
| UI Testing | Verify layout, messages, and visual elements |
| Cross-browser Testing | Chrome, Firefox, Safari |
| Responsive Testing | Desktop, tablet, mobile viewports |

---

## 7. Test Environment

| Item | Details |
|---|---|
| Application URL | https://qa-test-web-app.vercel.app/index.html |
| Browsers | Chrome, Firefox, Safari |
| OS | Windows |
| Automation Tool | Playwright (TypeScript) |
| Test Runner | Playwright Test |
| Reporting | Playwright HTML Reporter |

---

## 8. Entry and Exit Criteria

### Entry Criteria
- Application is accessible and the registration page is available
- Test cases are written and reviewed

### Exit Criteria
- All planned test cases have been executed
- All critical and high severity bugs are documented
- Automation tests are executed and results are recorded

---

## 9. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Application unavailable during testing | Test during stable hours, document downtime |
| Unclear validation rules | Base expected behaviour on UX best practices |
| No access to backend/DB to verify data | Rely on UI feedback and observable behaviour |

---

## 10. Deliverables

- Test Plan (this document)
- Test Cases (`TEST-CASES.md`)
- Bug Report (`BUG-REPORT.md`)
- Automation code (GitHub repository)
- Automation Execution Report (`AUTOMATION-REPORT.md`)
