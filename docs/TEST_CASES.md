# Test Cases — User Registration & Authentication
**Application:** [QA Test Web App](https://qa-test-web-app.vercel.app/index.html)  
**Author:** Nika Unkovic  
**Date:** 28-02-2026  

---

## Test Case Status Legend

| Status | Description |
|---|---|
| PASS | Test executed, actual result matches expected result |
| FAIL | Test executed, actual result does not match expected result |
| BLOCKED | Test could not be executed |
| NOT RUN | Test not yet executed |

## Priority Legend

| Priority | Description |
|---|---|
| Critical | Core functionality broken, no workaround |
| High | Important feature not working correctly |
| Medium | Feature works but with issues |
| Low | Minor issue, cosmetic or edge case |

---

## Page 1: Login Page

### TC-001 — Successful login with valid credentials
**Priority:** Critical  
**Type:** Functional / Happy Path  

| | |
|---|---|
| **Preconditions** | User account exists |
| **Test Data** | Email: valid registered email, Password: correct password |
| **Steps** | 1. Navigate to login page<br>2. Enter valid email address<br>3. Enter correct password<br>4. Click **Login** |
| **Expected Result** | User is redirected to Dashboard; welcome message displays user's first name |
| **Actual Result** | User is redirected to Dashboard; welcome message displays user's first name |
| **Status** | PASS |

---

### TC-002 — Login with incorrect password
**Priority:** Critical  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | User account exists |
| **Test Data** | Email: valid registered email, Password: wrong password |
| **Steps** | 1. Navigate to login page<br>2. Enter valid email<br>3. Enter incorrect password<br>4. Click **Login** |
| **Expected Result** | Error message is displayed; user remains on login page |
| **Actual Result** | Error message is displayed: "Invalid email or password"; user remains on login page |
| **Status** | PASS |

---

### TC-003 — Login with unregistered email
**Priority:** High  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Email: notregistered@example.com, Password: any |
| **Steps** | 1. Navigate to login page<br>2. Enter unregistered email<br>3. Enter any password<br>4. Click **Login** |
| **Expected Result** | Error message is displayed; user remains on login page |
| **Actual Result** | Error message is displayed: "Invalid email or password"; user remains on login page |
| **Status** | PASS |

---

### TC-004 — Login with empty fields
**Priority:** High  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | User account exists |
| **Test Data** | Email: empty, Password: empty |
| **Steps** | 1. Navigate to login page<br>2. Leave all fields empty<br>3. Click **Login**<br>4. Repeat the step 1 but populate the "Password" field with an existing password<br>5. Repeat the step 3 and verify the result is the same |
| **Expected Result** | Pop-up message is displayed for the first one of the required fields |
| **Actual Result** | Pop-up message is displayed for the first required ("Email Address") field |
| **Status** | PASS |

---

### TC-005 — Login with empty password field only
**Priority:** High  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | User account exists |
| **Test Data** | Email: existing email, Password: empty |
| **Steps** | 1. Navigate to login page<br>2. Populate the "Email Address" field with an existing Email Address<br>3. Click **Login** |
| **Expected Result** | Pop-up message is displayed for the first empty field |
| **Actual Result** | Pop-up message is displayed for the first empty ("Password") field |
| **Status** | PASS |

---

### TC-006 — Login with invalid email format
**Priority:** Low  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Email: `invalidemail`, `user@`, `@domain.com`, `user@domain`, `user @domain.com` |
| **Steps** | 1. Navigate to login page<br>2. Enter invalid email format<br>3. Enter any password<br>4. Click **Login** |
| **Expected Result** | Validation error shown for invalid email format |
| **Actual Result** | Validation only triggers when "@" is missing; other invalid formats are accepted |
| **Status** | FAIL |
| **Bug Ref** | BUG-001 — Invalid email format not fully validated on Login page |

---

### TC-007 — Remember Me checkbox functionality
**Priority:** Medium  
**Type:** Functional  

| | |
|---|---|
| **Preconditions** | User account exists |
| **Test Data** | Valid credentials (existing Email Address and corresponding Password) |
| **Steps** | 1. Navigate to login page<br>2. Enter valid credentials<br>3. Check **Remember Me**<br>4. Click **Login**<br>5. Log out<br>6. Return to login page |
| **Expected Result** | Email address is pre-filled on return to login page |
| **Actual Result** | Email and password fields are empty; Remember Me has no effect |
| **Status** | FAIL |
| **Bug Ref** | BUG-002 — Remember Me checkbox has no effect |
| **Notes** | Pre-filling the password is intentionally excluded from the expected result — storing passwords in the browser is considered a security risk. Standard "Remember Me" behaviour retains only the email address. An alternative valid implementation is session persistence: instead of pre-filling fields, the user is automatically logged in and bypasses the login page entirely when returning to or reloading the application. Both approaches are acceptable; the key requirement is that "Remember Me" has a measurable effect. |

---

### TC-008 — Navigate to Create Account page
**Priority:** Low  
**Type:** Navigation  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to login page<br>2. Click **Create New Account** link |
| **Expected Result** | User is redirected to the Create Account page |
| **Actual Result** | User is redirected to the Create Account page |
| **Status** | PASS |

---

### TC-009 — Navigate to Forgot Password page
**Priority:** Low  
**Type:** Navigation  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to login page<br>2. Click **Forgot Password?** link |
| **Expected Result** | User is redirected to the Reset Password page |
| **Actual Result** | User is redirected to the Reset Password page |
| **Status** | PASS |

---

## Page 2: Create Account

### TC-010 — Successful registration with all valid data
**Priority:** Critical  
**Type:** Functional / Happy Path  

| | |
|---|---|
| **Preconditions** | Email is not already registered |
| **Test Data** | First Name: John, Last Name: Doe, Email: johndoe@example.com, Phone: 0912345678, Street: Main St 1, City: Zagreb, ZIP: 10000, Password: Test1234!, Confirm Password: Test1234!, Terms: checked |
| **Steps** | 1. Navigate to Create Account page<br>2. Fill in all fields with valid data<br>3. Check **I agree to the Terms and Conditions**<br>4. Click **Create Account** |
| **Expected Result** | Account is created; user is redirected or shown a success message |
| **Actual Result** | Account is created; user is shown a success message and redirected back to the Login page |
| **Status** | PASS |

---

### TC-011 — Registration with empty required fields
**Priority:** Medium  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to Create Account page<br>2. Fill every field but first<br>3. Click **Create Account**<br>4. Repeat the steps for all the remaining fields (leave the second, then third, etc.) |
| **Expected Result** | Validation errors displayed for all required fields; fields marked as mandatory (e.g. with asterisk) |
| **Actual Result** | Form does not submit, pop-up is shown for every empty field, but required fields are not visually indicated as mandatory |
| **Status** | FAIL |
| **Bug Ref** | BUG-003 — Required fields not visually indicated as mandatory |

---

### TC-012 — Registration without accepting Terms and Conditions
**Priority:** Critical  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | All fields valid, Terms checkbox: unchecked |
| **Steps** | 1. Fill in all fields with valid data<br>2. Leave **I agree to the Terms and Conditions** unchecked<br>3. Click **Create Account** |
| **Expected Result** | Form submission blocked; error message indicating T&C must be accepted |
| **Actual Result** | Account is created without accepting Terms and Conditions |
| **Status** | FAIL |
| **Bug Ref** | BUG-004 — Account can be created without accepting Terms and Conditions |

---

### TC-013 — Terms and Conditions link is clickable
**Priority:** Medium  
**Type:** UI / Functional  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to Create Account page<br>2. Click on **Terms and Conditions** text in the checkbox label |
| **Expected Result** | Terms and Conditions document opens (new tab or modal) |
| **Actual Result** | Link is not clickable; nothing happens |
| **Status** | FAIL |
| **Bug Ref** | BUG-005 — Terms and Conditions link is not clickable |

---

### TC-014 — Password and Confirm Password mismatch
**Priority:** Critical  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Password: Test1234!, Confirm Password: Different123! |
| **Steps** | 1. Fill in all fields with valid data<br>2. Enter different values in **Password** and **Confirm Password**<br>3. Click **Create Account** |
| **Expected Result** | Error message displayed: "Passwords do not match"; account not created |
| **Actual Result** | Account is created despite passwords not matching |
| **Status** | FAIL |
| **Bug Ref** | BUG-006 — Account created despite Password and Confirm Password mismatch |

---

### TC-015 — Registration with invalid email format
**Priority:** High  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Email: `invalidemail`, `user@`, `@domain.com`, `user@domain`, `user @domain.com` |
| **Steps** | 1. Fill in all fields<br>2. Enter invalid email format<br>3. Click **Create Account** |
| **Expected Result** | Validation error shown for invalid email format |
| **Actual Result** | Validation only triggers when "@" is missing; other invalid formats are accepted |
| **Status** | FAIL |
| **Bug Ref** | BUG-007 — Invalid email format not fully validated on Create Account page |

---

### TC-016 — Phone number field accepts unlimited length
**Priority:** Medium  
**Type:** Boundary  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Phone: 99999999999999999999 (20+ digits) |
| **Steps** | 1. Navigate to Create Account page<br>2. Enter an unrealistically long phone number<br>3. Complete other fields and submit |
| **Expected Result** | Phone number field has a maximum length; overly long values are rejected |
| **Actual Result** | No length restriction; any length is accepted |
| **Status** | FAIL |
| **Bug Ref** | BUG-008 — Phone number field has no maximum length restriction |

---

### TC-017 — Registration with duplicate email
**Priority:** High  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | Account with test email already exists |
| **Test Data** | Email: already registered email |
| **Steps** | 1. Fill in all fields using an already registered email<br>2. Click **Create Account** |
| **Expected Result** | Error message: "An account with this email already exists" |
| **Actual Result** | Error message: "User with this email already exists" |
| **Status** | PASS |

---

### TC-018 — Security question not set during registration
**Priority:** High  
**Type:** Functional  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Complete registration without any security question setup<br>2. Navigate to Reset Password page<br>3. Observe Security Question requirement |
| **Expected Result** | Registration should either include security question setup, or Reset Password should not depend on it |
| **Actual Result** | No security question is set during registration; Reset Password page includes security question field |
| **Status** | FAIL |
| **Bug Ref** | BUG-009 — Security question not set during registration but required for password reset |

---

### TC-019 — Subscribe to newsletter checkbox is optional
**Priority:** Low  
**Type:** Functional  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Fill in all fields<br>2. Leave **Subscribe to newsletter** unchecked<br>3. Click **Create Account** |
| **Expected Result** | Account is created successfully without newsletter subscription |
| **Actual Result** | Account is created; unable to verify newsletter subscription status without access to email inbox or database |
| **Status** | BLOCKED |

---

### TC-020 — Navigate back to Login from Create Account page
**Priority:** Low  
**Type:** Navigation  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to Create Account page<br>2. Click **Already have an account? Login** link |
| **Expected Result** | User is redirected to the Login page |
| **Actual Result** | User is redirected to the Login page |
| **Status** | PASS |

---

### TC-021 — Password strength requirements
**Priority:** Medium  
**Type:** Functional / Security  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Password: `password`, `12345678`, `!@#$%^&*`, `a` |
| **Steps** | 1. Navigate to Create Account page<br>2. Enter a weak password (e.g. all lowercase, all numbers, all special characters, single character)<br>3. Fill remaining fields with valid data<br>4. Click **Create Account** |
| **Expected Result** | Weak passwords are rejected; application enforces minimum password strength requirements (e.g. minimum length, mix of uppercase, lowercase, numbers, special characters) |
| **Actual Result** | All password combinations accepted without any strength validation; no password requirements are enforced |
| **Status** | FAIL |
| **Bug Ref** | BUG-010 — No password strength requirements enforced |

---

## Page 3: Reset Password

### TC-022 — Password reset with registered email
**Priority:** High  
**Type:** Functional  

| | |
|---|---|
| **Preconditions** | User account exists |
| **Test Data** | Email: valid registered email |
| **Steps** | 1. Navigate to Reset Password page<br>2. Enter registered email address<br>3. Click **Send Reset Link**<br>4. Repeat step 3 multiple times |
| **Expected Result** | Reset link is sent to registered email; repeated requests are rate-limited or require additional verification (e.g. security question) to prevent email flooding |
| **Actual Result** | Reset link popup appears on every submission with no rate limiting or additional verification required; any user can trigger unlimited reset emails to any address |
| **Status** | FAIL |
| **Bug Ref** | BUG-011 — No rate limiting on password reset requests |

---

### TC-023 — Password reset with unregistered email
**Priority:** High  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Email: notregistered@example.com |
| **Steps** | 1. Navigate to Reset Password page<br>2. Enter unregistered email<br>3. Click **Send Reset Link** |
| **Expected Result** | Error message: "No account found with this email address" |
| **Actual Result** | Success popup "Password reset link has been sent to your email!" is shown regardless |
| **Status** | FAIL |
| **Bug Ref** | BUG-012 — Password reset link sent for unregistered email addresses |

---

### TC-024 — Security Question and Security Answer field consistency
**Priority:** Medium  
**Type:** UI  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to Reset Password page<br>2. Observe the labels next to Security Question and Security Answer fields |
| **Expected Result** | Both fields have consistent labelling — if Security Question is marked as "Optional", Security Answer should be marked the same way |
| **Actual Result** | Security Question is labelled as "Optional" but Security Answer has no such indication, creating inconsistent and potentially confusing UI |
| **Status** | FAIL |
| **Bug Ref** | BUG-013 — Security Question labelled as Optional but Security Answer has no such indication |

---

### TC-025 — Navigate back to Login from Reset Password page
**Priority:** Low  
**Type:** Navigation  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to Reset Password page<br>2. Click **Back to Login** link |
| **Expected Result** | User is redirected to the Login page |
| **Actual Result** | User is redirected to the Login page |
| **Status** | PASS |

---

### TC-026 — Navigate to Create Account from Reset Password page
**Priority:** Low  
**Type:** Navigation  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to Reset Password page<br>2. Click **Create New Account** link |
| **Expected Result** | User is redirected to the Create Account page |
| **Actual Result** | User is redirected to the Create Account page |
| **Status** | PASS |

---

## Page 4: Dashboard

### TC-027 — Dashboard displays correct user information after login
**Priority:** High  
**Type:** Functional  

| | |
|---|---|
| **Preconditions** | User account exists |
| **Steps** | 1. Log in with valid credentials<br>2. Observe Dashboard content |
| **Expected Result** | Welcome message displays correct first name; last login timestamp is accurate and in expected format |
| **Actual Result** | "Login successful! Redirecting..." message is shown. Welcome message displays correct first name; last login timestamp is accurate and in expected format |
| **Status** | PASS |

---

### TC-028 — Logout functionality
**Priority:** Critical  
**Type:** Functional  

| | |
|---|---|
| **Preconditions** | User is logged in |
| **Steps** | 1. From Dashboard, click **Logout**<br>2. Observe redirect |
| **Expected Result** | User is logged out and redirected to Login page; cannot access Dashboard without logging in again |
| **Actual Result** | User is logged out and redirected to Login page; cannot access Dashboard without logging in again |
| **Status** | PASS |

---

### TC-029 — Recent Activity timestamps are dynamic
**Priority:** Medium  
**Type:** Functional  

| | |
|---|---|
| **Preconditions** | User is logged in |
| **Steps** | 1. Log in and observe Recent Activity timestamps<br>2. Log out, log back in<br>3. Observe if timestamps change |
| **Expected Result** | Timestamps reflect real activity time and update accordingly |
| **Actual Result** | Timestamps appear hardcoded ("2 hours ago", "1 day ago", "3 days ago") and do not change |
| **Status** | FAIL |
| **Bug Ref** | BUG-014 — Recent Activity timestamps are hardcoded and do not update |

---

### TC-030 — Download Report button downloads a file
**Priority:** Low  
**Type:** Functional  

| | |
|---|---|
| **Preconditions** | User is logged in |
| **Steps** | 1. Click **Download Report** button on Dashboard |
| **Expected Result** | A file is downloaded to the user's device |
| **Actual Result** | Popup notification appears but no file is downloaded |
| **Status** | FAIL |
| **Bug Ref** | BUG-015 — Download Report button does not download a file |

---

## Additional Edge Case Test Cases

### TC-031 — Special characters in First Name and Last Name fields
**Priority:** Medium  
**Type:** Boundary / Negative  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | First Name: `<script>alert(1)</script>`, Last Name: `DROP TABLE users;` |
| **Steps** | 1. Navigate to Create Account page<br>2. Enter special characters / script injection in First Name and Last Name<br>3. Fill remaining fields with valid data<br>4. Click **Create Account** |
| **Expected Result** | Input is sanitised or rejected; no script executes; error message shown if format is invalid |
| **Actual Result** | Account is created successfully with no validation or sanitisation of malicious input; "Registration successful. Redirecting to login..." message is shown |
| **Status** | FAIL |
| **Bug Ref** | BUG-016 — Input not sanitised; script tag stored and rendered as raw text on Dashboard |
| **Notes** | Tests basic XSS and SQL injection resilience on name fields. Script tag was stored and rendered as raw text on the Dashboard ("Welcome, <script>alert(1)</script>!"), confirming input is not sanitised. Script did not execute as the browser escaped the output, however the vulnerability exists at the application level. |

---

### TC-032 — Special characters in Password field
**Priority:** Medium  
**Type:** Boundary  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Password: `!@#$%^&*()_+-=[]{}` |
| **Steps** | 1. Navigate to Create Account page<br>2. Enter a password containing only special characters<br>3. Fill remaining fields with valid data<br>4. Click **Create Account** |
| **Expected Result** | Special characters are accepted in password; account is created or appropriate error is shown if format rules apply |
| **Actual Result** | No password strength requirements enforced — any combination of characters is accepted |
| **Status** | PASS |

---

### TC-033 — Password minimum and maximum length
**Priority:** Medium  
**Type:** Boundary  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Password: `a` (1 char), `Ab1!` (4 chars), `Ab1!Ab1!Ab1!Ab1!Ab1!Ab1!Ab1!Ab1!Ab1!Ab1!Ab1!Ab1!Ab1!` (50+ chars) |
| **Steps** | 1. Navigate to Create Account page<br>2. Test password field with very short (1 char) value<br>3. Test with a very long value (50+ chars)<br>4. Attempt to submit in each case |
| **Expected Result** | Minimum and maximum length rules are enforced with clear error messages |
| **Actual Result** | No length restriction enforced |
| **Status** | FAIL |
| **Bug Ref** | BUG-010 — No password strength requirements enforced |

---

### TC-034 — Email with leading or trailing spaces
**Priority:** Medium  
**Type:** Boundary / Negative  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Email: ` user@example.com` (leading space), `user@example.com ` (trailing space) |
| **Steps** | 1. Navigate to Create Account page<br>2. Enter email with a leading space<br>3. Attempt to submit<br>4. Repeat with trailing space |
| **Expected Result** | Spaces are trimmed automatically or a validation error is shown |
| **Actual Result** | Spaces are not trimmed automatically and a validation error is shown |
| **Status** | PASS |
| **Notes** | Although a validation error prevents invalid input, the ideal behaviour would be to automatically trim leading and trailing spaces, as users often accidentally add spaces when copy-pasting an email address. Displaying an error in this case creates unnecessary friction and a poor user experience. |

---

### TC-035 — Phone number with non-numeric characters
**Priority:** Medium  
**Type:** Negative  

| | |
|---|---|
| **Preconditions** | None |
| **Test Data** | Phone: `+385 91 abc-1234`, `!@#$%`, `123 456 789` |
| **Steps** | 1. Navigate to Create Account page<br>2. Enter phone number containing letters and special characters<br>3. Complete remaining fields and submit |
| **Expected Result** | Non-numeric characters are rejected or field accepts only valid phone formats |
| **Actual Result** | Non-numeric characters are accepted |
| **Status** | FAIL |
| **Bug Ref** | BUG-017 — Phone number field accepts non-numeric characters |

---

### TC-036 — Password field masks input on Create Account page
**Priority:** Low  
**Type:** UI / Security  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to Create Account page<br>2. Type into the **Password** field<br>3. Observe characters displayed |
| **Expected Result** | Password input is masked (shown as dots or asterisks) |
| **Actual Result** | Password input is masked (shown as dots or asterisks) |
| **Status** | PASS |

---

### TC-037 — Password field masks input on Login page
**Priority:** Low  
**Type:** UI / Security  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to Login page<br>2. Type into the **Password** field<br>3. Observe characters displayed |
| **Expected Result** | Password input is masked (shown as dots or asterisks) |
| **Actual Result** | Password input is masked (shown as dots or asterisks) |
| **Status** | PASS |

---

### TC-038 — Form submission on pressing Enter key
**Priority:** Low  
**Type:** Functional / UX  

| | |
|---|---|
| **Preconditions** | None |
| **Steps** | 1. Navigate to Login page<br>2. Fill in email and password<br>3. Press **Enter** key instead of clicking Login button |
| **Expected Result** | Form is submitted same as clicking the Login button |
| **Actual Result** | Form is submitted same as clicking the Login button |
| **Status** | PASS |

---

## End-to-End Test Cases

### TC-039 — Full registration and login flow
**Priority:** Critical  
**Type:** End-to-End / Happy Path  

| | |
|---|---|
| **Preconditions** | Email is not already registered |
| **Steps** | 1. Navigate to login page<br>2. Click **Create New Account**<br>3. Fill in all valid fields, accept T&C<br>4. Click **Create Account**<br>5. Navigate to login page<br>6. Enter credentials used during registration<br>7. Click **Login** |
| **Expected Result** | User can register and immediately log in with the same credentials; Dashboard is shown |
| **Actual Result** | User can register and immediately log in with the same credentials; Dashboard is shown |
| **Status** | PASS |

---

## Test Execution Summary

| Total | Pass | Fail | Blocked | Not Run |
|---|---|---|---|---|
| 39 | 19 | 19 | 1 | 0 |
