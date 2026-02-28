# Bug Report — User Registration & Authentication
**Application:** [QA Test Web App](https://qa-test-web-app.vercel.app/index.html)  
**Author:** Nika Unkovic  
**Date:** 28-02-2026  

---

## Severity Legend

| Severity | Description |
|---|---|
| Critical | Core functionality broken, no workaround exists |
| High | Important feature not working correctly, workaround may exist |
| Medium | Feature works but with issues; affects user experience |
| Low | Minor issue, cosmetic or edge case |

## Status Legend

| Status | Description |
|---|---|
| Open | Bug identified, not yet fixed |
| Fixed | Bug has been resolved |
| Won't Fix | Bug acknowledged but will not be addressed |

---

## BUG-001 — Invalid email format not fully validated on Login page

| | |
|---|---|
| **Severity** | Low |
| **Status** | Open |
| **TC Ref** | TC-006 |
| **Steps to Reproduce** | 1. Navigate to Login page<br>2. Enter an invalid email format such as `user@`, `@domain.com`, `user@domain` or `user @domain.com`<br>3. Enter any password<br>4. Click **Login** |
| **Expected Result** | Validation error shown for all invalid email formats |
| **Actual Result** | Validation only triggers when "@" is missing; all other invalid formats are accepted |

---

## BUG-002 — Remember Me checkbox has no effect

| | |
|---|---|
| **Severity** | Medium |
| **Status** | Open |
| **TC Ref** | TC-007 |
| **Steps to Reproduce** | 1. Navigate to Login page<br>2. Enter valid credentials<br>3. Check **Remember Me**<br>4. Click **Login**<br>5. Log out<br>6. Return to Login page |
| **Expected Result** | Email address is pre-filled on return to login page, or user is automatically logged in (session persistence) |
| **Actual Result** | Email and password fields are empty; Remember Me has no measurable effect |

---

## BUG-003 — Required fields not visually indicated as mandatory

| | |
|---|---|
| **Severity** | Medium |
| **Status** | Open |
| **TC Ref** | TC-011 |
| **Steps to Reproduce** | 1. Navigate to Create Account page<br>2. Observe the form fields |
| **Expected Result** | Mandatory fields are visually indicated (e.g. with an asterisk "*") |
| **Actual Result** | No visual indication that any fields are mandatory; users cannot tell which fields are required before attempting to submit |

---

## BUG-004 — Account can be created without accepting Terms and Conditions

| | |
|---|---|
| **Severity** | Critical |
| **Status** | Open |
| **TC Ref** | TC-012 |
| **Steps to Reproduce** | 1. Navigate to Create Account page<br>2. Fill in all fields with valid data<br>3. Leave **I agree to the Terms and Conditions** unchecked<br>4. Click **Create Account** |
| **Expected Result** | Form submission blocked; error message indicating T&C must be accepted |
| **Actual Result** | Account is created without accepting Terms and Conditions |

---

## BUG-005 — Terms and Conditions link is not clickable

| | |
|---|---|
| **Severity** | Medium |
| **Status** | Open |
| **TC Ref** | TC-013 |
| **Steps to Reproduce** | 1. Navigate to Create Account page<br>2. Click on **Terms and Conditions** text in the checkbox label |
| **Expected Result** | Terms and Conditions document opens in a new tab or modal |
| **Actual Result** | Link is not clickable; nothing happens |

---

## BUG-006 — Account created despite Password and Confirm Password mismatch

| | |
|---|---|
| **Severity** | Critical |
| **Status** | Open |
| **TC Ref** | TC-014 |
| **Steps to Reproduce** | 1. Navigate to Create Account page<br>2. Fill in all fields with valid data<br>3. Enter different values in **Password** and **Confirm Password**<br>4. Click **Create Account** |
| **Expected Result** | Error message displayed: "Passwords do not match"; account not created |
| **Actual Result** | Account is created despite passwords not matching |

---

## BUG-007 — Invalid email format not fully validated on Create Account page

| | |
|---|---|
| **Severity** | High |
| **Status** | Open |
| **TC Ref** | TC-015 |
| **Steps to Reproduce** | 1. Navigate to Create Account page<br>2. Fill in all fields<br>3. Enter an invalid email format such as `user@`, `@domain.com`, `user@domain` or `user @domain.com`<br>4. Click **Create Account** |
| **Expected Result** | Validation error shown for all invalid email formats |
| **Actual Result** | Validation only triggers when "@" is missing; all other invalid formats are accepted |

---

## BUG-008 — Phone number field has no maximum length restriction

| | |
|---|---|
| **Severity** | Medium |
| **Status** | Open |
| **TC Ref** | TC-016 |
| **Steps to Reproduce** | 1. Navigate to Create Account page<br>2. Enter an unrealistically long phone number (e.g. 20+ digits)<br>3. Complete other fields and submit |
| **Expected Result** | Phone number field has a maximum length; overly long values are rejected |
| **Actual Result** | No length restriction; any length is accepted |

---

## BUG-009 — Security question not set during registration but required for password reset

| | |
|---|---|
| **Severity** | High |
| **Status** | Open |
| **TC Ref** | TC-018 |
| **Steps to Reproduce** | 1. Complete registration (no security question is offered during registration)<br>2. Navigate to Reset Password page<br>3. Observe the Security Question field |
| **Expected Result** | Registration should either include security question setup, or Reset Password should not depend on it |
| **Actual Result** | No security question is set during registration; Reset Password page includes a security question field with no corresponding data set for the user |

---

## BUG-010 — No password strength requirements enforced

| | |
|---|---|
| **Severity** | High |
| **Status** | Open |
| **TC Ref** | TC-021, TC-033 |
| **Steps to Reproduce** | 1. Navigate to Create Account page<br>2. Enter a weak password (e.g. `a`, `password`, `12345678`, `!@#$%^&*`)<br>3. Fill remaining fields with valid data<br>4. Click **Create Account** |
| **Expected Result** | Weak passwords are rejected; application enforces minimum password strength requirements |
| **Actual Result** | All password combinations accepted without any strength or length validation |

---

## BUG-011 — No rate limiting on password reset requests

| | |
|---|---|
| **Severity** | High |
| **Status** | Open |
| **TC Ref** | TC-022 |
| **Steps to Reproduce** | 1. Navigate to Reset Password page<br>2. Enter any email address<br>3. Click **Send Reset Link**<br>4. Repeat step 3 multiple times |
| **Expected Result** | Repeated requests are rate-limited or require additional verification to prevent email flooding |
| **Actual Result** | Reset link popup appears on every submission with no rate limiting or verification required; any user can trigger unlimited reset emails to any address |

---

## BUG-012 — Password reset link sent for unregistered email addresses

| | |
|---|---|
| **Severity** | High |
| **Status** | Open |
| **TC Ref** | TC-023 |
| **Steps to Reproduce** | 1. Navigate to Reset Password page<br>2. Enter an email address that is not registered<br>3. Click **Send Reset Link** |
| **Expected Result** | Error message: "No account found with this email address" |
| **Actual Result** | Success popup "Password reset link has been sent to your email!" is shown regardless of whether the email is registered |

---

## BUG-013 — Security Question labelled as Optional but Security Answer has no such indication

| | |
|---|---|
| **Severity** | Medium |
| **Status** | Open |
| **TC Ref** | TC-024 |
| **Steps to Reproduce** | 1. Navigate to Reset Password page<br>2. Observe the labels next to Security Question and Security Answer fields |
| **Expected Result** | Both fields have consistent labelling — if Security Question is marked as "Optional", Security Answer should be marked the same way |
| **Actual Result** | Security Question is labelled as "Optional" but Security Answer has no such indication, creating an inconsistent and potentially confusing UI |

---

## BUG-014 — Recent Activity timestamps are hardcoded and do not update

| | |
|---|---|
| **Severity** | Medium |
| **Status** | Open |
| **TC Ref** | TC-029 |
| **Steps to Reproduce** | 1. Log in and observe Recent Activity timestamps on Dashboard<br>2. Log out and log back in<br>3. Observe if timestamps change |
| **Expected Result** | Timestamps reflect real activity time and update accordingly |
| **Actual Result** | Timestamps appear hardcoded ("2 hours ago", "1 day ago", "3 days ago") and do not change between sessions |

---

## BUG-015 — Download Report button does not download a file

| | |
|---|---|
| **Severity** | Low |
| **Status** | Open |
| **TC Ref** | TC-030 |
| **Steps to Reproduce** | 1. Log in and navigate to Dashboard<br>2. Click **Download Report** button |
| **Expected Result** | A file is downloaded to the user's device |
| **Actual Result** | Popup notification appears confirming download, but no file is downloaded |

---

## BUG-016 — Input not sanitised; script tag stored and rendered as raw text on Dashboard

| | |
|---|---|
| **Severity** | Medium |
| **Status** | Open |
| **TC Ref** | TC-031 |
| **Steps to Reproduce** | 1. Navigate to Create Account page<br>2. Enter `<script>alert(1)</script>` in the First Name field<br>3. Enter `DROP TABLE users;` in the Last Name field<br>4. Fill remaining fields with valid data and submit<br>5. Log in with the new credentials and observe the Dashboard |
| **Expected Result** | Input is sanitised or rejected; no script tag is stored or rendered |
| **Actual Result** | Account is created; Dashboard displays "Welcome, `<script>alert(1)</script>`!" confirming input is stored and rendered without sanitisation. Script did not execute as the browser escaped the output, however the vulnerability exists at the application level |

---

## BUG-017 — Phone number field accepts non-numeric characters

| | |
|---|---|
| **Severity** | Medium |
| **Status** | Open |
| **TC Ref** | TC-035 |
| **Steps to Reproduce** | 1. Navigate to Create Account page<br>2. Enter a phone number containing letters or special characters (e.g. `+385 91 abc-1234`, `!@#$%`)<br>3. Complete remaining fields and submit |
| **Expected Result** | Non-numeric characters are rejected or field accepts only valid phone formats |
| **Actual Result** | Non-numeric characters are accepted without any validation |

---

## Bug Summary

| Bug ID | Title | Severity | Status | TC Ref |
|---|---|---|---|---|
| BUG-001 | Invalid email format not fully validated on Login page | Low | Open | TC-006 |
| BUG-002 | Remember Me checkbox has no effect | Medium | Open | TC-007 |
| BUG-003 | Required fields not visually indicated as mandatory | Medium | Open | TC-011 |
| BUG-004 | Account can be created without accepting Terms and Conditions | Critical | Open | TC-012 |
| BUG-005 | Terms and Conditions link is not clickable | Medium | Open | TC-013 |
| BUG-006 | Account created despite Password and Confirm Password mismatch | Critical | Open | TC-014 |
| BUG-007 | Invalid email format not fully validated on Create Account page | High | Open | TC-015 |
| BUG-008 | Phone number field has no maximum length restriction | Medium | Open | TC-016 |
| BUG-009 | Security question not set during registration but required for password reset | High | Open | TC-018 |
| BUG-010 | No password strength requirements enforced | High | Open | TC-021, TC-033 |
| BUG-011 | No rate limiting on password reset requests | High | Open | TC-022 |
| BUG-012 | Password reset link sent for unregistered email addresses | High | Open | TC-023 |
| BUG-013 | Security Question labelled as Optional but Security Answer has no such indication | Medium | Open | TC-024 |
| BUG-014 | Recent Activity timestamps are hardcoded and do not update | Medium | Open | TC-029 |
| BUG-015 | Download Report button does not download a file | Low | Open | TC-030 |
| BUG-016 | Input not sanitised; script tag stored and rendered as raw text on Dashboard | Medium | Open | TC-031 |
| BUG-017 | Phone number field accepts non-numeric characters | Medium | Open | TC-035 |

### Totals by Severity

| Severity | Count |
|---|---|
| Critical | 2 |
| High | 5 |
| Medium | 8 |
| Low | 2 |
| **Total** | **17** |
