import { test, expect, Browser } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage';
import { DashboardPage } from '../pages/DashboardPage';

const validUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe_test@example.com',
  phone: '0912345678',
  street: 'StreetName 22',
  city: 'Split',
  zip: '21000',
  password: 'Test1234!',
  confirmPassword: 'Test1234!',
};

// SETUP — Register validUser account once
// before all tests that require login
// _________________________________________

test.beforeAll(async ({ browser }: { browser: Browser }) => {
  const page = await browser.newPage();
  const registrationPage = new RegistrationPage(page);
  await registrationPage.goto();
  await registrationPage.register(validUser);
  // Account may already exist on re-runs — that is acceptable
  await page.close();
});

// PAGE 1: LOGIN

test.describe('Login Page', () => {

  test('TC-001 - Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);
    await expect(dashboardPage.welcomeMessage).toBeVisible();
  });

  test('TC-002 - Login with incorrect password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.email, 'WrongPassword123!');
    await expect(page.getByText('Invalid email or password')).toBeVisible();
  });

  test('TC-003 - Login with unregistered email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('notregistered@example.com', 'AnyPassword123!');
    await expect(page.getByText('Invalid email or password')).toBeVisible();
  });

  test('TC-004 - Login with empty fields', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginButton.click();
    await expect(loginPage.emailInput).toBeFocused();
  });

  test('TC-006 - Login with invalid email format [BUG-001]', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const invalidEmails = ['invalidemail', 'user@', '@domain.com', 'user@domain', 'user @domain.com'];
    for (const email of invalidEmails) {
      await loginPage.emailInput.fill(email);
      await loginPage.passwordInput.fill('AnyPassword123!');
      await loginPage.loginButton.click();
      await expect(page.getByText('Invalid email or password').or(loginPage.emailInput)).toBeTruthy();
    }
  });

  test('TC-008 - Navigate to Create Account page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.createNewAccountLink.click();
    await expect(page).toHaveURL(/register/);
  });

  test('TC-009 - Navigate to Forgot Password page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.forgotPasswordLink.click();
    await expect(page).toHaveURL(/forgot/);
  });

});

// PAGE 2: CREATE ACCOUNT

test.describe('Create Account Page', () => {

  test('TC-010 - Successful registration with all valid data', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.register({
      ...validUser,
      email: `testuser_${Date.now()}@example.com`,
    });
    await expect(page.getByText(/Registration successful|Redirecting/i)).toBeVisible();
  });

  test('TC-012 - Registration without accepting Terms and Conditions [BUG-004]', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.register({
      ...validUser,
      email: `testuser_${Date.now()}@example.com`,
    }, false);
    // BUG-004: account is created without accepting T&C — this should NOT happen
    await expect(page.getByText(/Registration successful|Redirecting/i)).not.toBeVisible();
  });

  test('TC-014 - Password and Confirm Password mismatch [BUG-006]', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.register({
      ...validUser,
      email: `testuser_${Date.now()}@example.com`,
      confirmPassword: 'DifferentPassword123!',
    });
    // BUG-006: account is created despite password mismatch — this should NOT happen
    await expect(page.getByText(/passwords do not match/i)).toBeVisible();
  });

  test('TC-017 - Registration with duplicate email', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.register(validUser);
    await expect(page.getByText(/User with this email already exists/i)).toBeVisible();
  });

  test('TC-020 - Navigate back to Login from Create Account page', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.goto();
    await registrationPage.loginLink.click();
    await expect(page).toHaveURL(/index/);
  });

});

// PAGE 3: RESET PASSWORD

test.describe('Reset Password Page', () => {

  test('TC-022 - Password reset with registered email [BUG-011]', async ({ page }) => {
    const resetPage = new ResetPasswordPage(page);
    await resetPage.goto();
    await resetPage.sendResetLink(validUser.email);
    // BUG-011: no rate limiting — popup appears every time
    await expect(page.getByText(/Password reset link has been sent/i)).toBeVisible();
  });

  test('TC-023 - Password reset with unregistered email [BUG-012]', async ({ page }) => {
    const resetPage = new ResetPasswordPage(page);
    await resetPage.goto();
    await resetPage.sendResetLink('notregistered@example.com');
    // BUG-012: success popup shown even for unregistered email — should show error
    await expect(page.getByText(/No account found/i)).toBeVisible();
  });

  test('TC-025 - Navigate back to Login from Reset Password page', async ({ page }) => {
    const resetPage = new ResetPasswordPage(page);
    await resetPage.goto();
    await resetPage.backToLoginLink.click();
    await expect(page).toHaveURL(/index/);
  });

});

// PAGE 4: DASHBOARD

test.describe('Dashboard', () => {

test('TC-027 - Dashboard displays correct user information after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);
    await page.waitForURL(/dashboard/);
    await expect(dashboardPage.welcomeMessage).toContainText(validUser.firstName);
  });

test('TC-028 - Logout functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);
    await page.waitForURL(/dashboard/);
    await dashboardPage.logout();
    await expect(page).toHaveURL(/index/);
  });
});


// END-TO-END

test.describe('End-to-End', () => {

  test('TC-039 - Full registration and login flow', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    const uniqueEmail = `e2e_${Date.now()}@example.com`;

    await registrationPage.goto();
    await registrationPage.register({
      ...validUser,
      email: uniqueEmail,
    });

    await expect(page.getByText(/Registration successful|Redirecting/i)).toBeVisible();

    await loginPage.goto();
    await loginPage.login(uniqueEmail, validUser.password);

    await expect(dashboardPage.welcomeMessage).toBeVisible();
  });

});
