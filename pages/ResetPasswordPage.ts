import { Page, Locator } from '@playwright/test';

export class ResetPasswordPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly securityQuestionSelect: Locator;
  readonly securityAnswerInput: Locator;
  readonly sendResetLinkButton: Locator;
  readonly backToLoginLink: Locator;
  readonly createNewAccountLink: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('Enter your email');
    this.securityQuestionSelect = page.getByRole('combobox');
    this.securityAnswerInput = page.getByPlaceholder('Enter your answer');
    this.sendResetLinkButton = page.getByRole('button', { name: 'Send Reset Link' });
    this.backToLoginLink = page.getByRole('link', { name: 'Back to Login' });
    this.createNewAccountLink = page.getByRole('link', { name: 'Create New Account' });
    this.successMessage = page.locator('.success-message');
    this.errorMessage = page.locator('.error-message');
  }

  async goto() {
    await this.page.goto('https://qa-test-web-app.vercel.app/forgot-password.html');
  }

  async sendResetLink(email: string) {
    await this.emailInput.fill(email);
    await this.sendResetLinkButton.click();
  }
}